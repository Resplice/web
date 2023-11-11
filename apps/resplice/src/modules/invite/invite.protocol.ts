import proto from '@resplice/proto'
import type { Fetch } from '@resplice/utils'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand, sendCommandRequest } from '$common/protocol/helpers'
import type { ConnectionStore } from '$modules/connection/connection.store'
import type { InviteStore } from '$modules/invite/invite.store'
import type { Invite, QrPendingConnection, Qr } from '$modules/invite/invite.types'
import { applyConnectionEvent } from '$modules/connection/connection.state'
import { applyInviteEvent, mapProtoCommand } from '$modules/invite/invite.state'
import { mapProtoAttributeType } from '$modules/attribute/attribute.state'

export interface InviteProtocol {
	create(payload: proto.invite.CreateInvite): void
	createQr(payload: proto.invite.CreateQrCode): Promise<Qr>
	openQr(payload: proto.invite.OpenQrCode): Promise<QrPendingConnection>
	connectViaQr(payload: proto.invite.ConnectViaQrCode): Promise<number>
	delete(payload: proto.invite.DeleteInvite): void
}

type Dependencies = {
	fetch: Fetch
	cache: DB
	store: InviteStore
	connectionStore: ConnectionStore
	commuter: SocketCommuter
}
function inviteProtocolFactory({
	fetch,
	cache,
	store,
	connectionStore,
	commuter
}: Dependencies): InviteProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.invites.update((state) => applyInviteEvent(state, event))
		// store.pendingConnections.update((state) => applyPendingConnectionEvent(state, event))
	})

	return {
		create(payload) {
			sendCommand(commuter, {
				$case: 'createInvite',
				createInvite: payload
			})
			const placeholderInvite: Invite = {
				...mapProtoCommand(payload.name, payload.value),
				id: '0'
			}
			store.invites.update((state) => {
				state.set(placeholderInvite.id, placeholderInvite)
				return state
			})
		},
		async createQr(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'createQrCode',
					createQrCode: payload
				}
			)
			if (!message.event) throw new Error('Cannot create QR code')
			if (message.event.payload?.$case !== 'qrCodeCreated') throw new Error('Cannot create QR code')

			return message.event.payload.qrCodeCreated
		},
		async openQr(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'openQrCode',
					openQrCode: payload
				}
			)
			if (!message.event) throw new Error('Invalid QR code')
			if (message.event.payload?.$case !== 'qrCodeOpened') throw new Error('Invalid QR code')

			return {
				...message.event.payload.qrCodeOpened,
				pendingAttributes: message.event.payload.qrCodeOpened.pendingAttributes.map((attr) => ({
					...attr,
					attributeType: mapProtoAttributeType(attr.attributeType)
				}))
			}
		},
		async connectViaQr(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'openQrCode',
					openQrCode: payload
				}
			)
			if (!message.event) throw new Error('Cannot connect via QR code')
			if (message.event.payload?.$case !== 'connectionAdded')
				throw new Error('Cannot connect via QR code')

			connectionStore.update((state) => applyConnectionEvent(state, message.event))

			return message.event.payload.connectionAdded.accountId
		},
		delete(payload) {
			sendCommand(commuter, {
				$case: 'deleteInvite',
				deleteInvite: payload
			})
			store.invites.update((state) => {
				state.delete(payload.id)
				return state
			})
		}
	}
}

export default inviteProtocolFactory
