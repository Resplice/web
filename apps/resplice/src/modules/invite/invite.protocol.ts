import proto from '@resplice/proto'
import type { Fetch } from '@resplice/utils'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand, sendCommandRequest } from '$common/protocol/helpers'
import type { ConnectionStore } from '$modules/connection/connection.store'
import type { InviteStore } from '$modules/invite/invite.store'
import type { QrConnection, Qr } from '$modules/invite/invite.types'
import { applyConnectionEvent } from '$modules/connection/connection.state'
import { applyInviteEvent, applyPendingConnectionEvent } from '$modules/invite/invite.state'
import { mapProtoAttributeType } from '$modules/attribute/attribute.state'

export interface InviteProtocol {
	createQr(payload: proto.invite.CreateQrInvite): Promise<Qr>
	openQr(payload: proto.invite.OpenQrInvite): Promise<QrConnection>
	acceptQrInvite(payload: proto.invite.AcceptQrInvite): Promise<number>
	create(payload: proto.invite.CreateInvite): Promise<void>
	acceptInvite(payload: proto.invite.AcceptInvite): Promise<number>
	declineInvite(payload: proto.invite.DeclineInvite): void
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
		async createQr(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'createQrInvite',
					createQrInvite: payload
				}
			)
			if (!message.event) throw new Error('Cannot create QR code')
			if (message.event.payload?.$case !== 'qrInviteCreated')
				throw new Error('Cannot create QR code')

			return {
				uuid: message.event.payload.qrInviteCreated.qrCode,
				attributeIds: message.event.payload.qrInviteCreated.attributeIds
			}
		},
		async openQr(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'openQrInvite',
					openQrInvite: payload
				}
			)
			if (!message.event) throw new Error('Invalid QR code')
			if (message.event.payload?.$case !== 'qrInviteOpened') throw new Error('Invalid QR code')

			return {
				...message.event.payload.qrInviteOpened,
				alias: null,
				description: null,
				pendingAttributes: message.event.payload.qrInviteOpened.pendingAttributes.map((attr) => ({
					...attr,
					attributeType: mapProtoAttributeType(attr.attributeType)
				}))
			}
		},
		async acceptQrInvite(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'acceptQrInvite',
					acceptQrInvite: payload
				}
			)
			if (!message.event) throw new Error('Cannot connect via QR code')
			if (message.event.payload?.$case !== 'connectionAdded')
				throw new Error('Cannot connect via QR code')

			connectionStore.update((state) => applyConnectionEvent(state, message.event))

			return message.event.payload.connectionAdded.connectionId
		},
		async create(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'createInvite',
					createInvite: payload
				}
			)
			if (!message.event) throw new Error('Cannot create invite')
			if (!['inviteCreated', 'connectionAdded'].includes(message.event.payload!.$case))
				throw new Error('Cannot create invite')

			if (message.event.payload!.$case === 'inviteCreated') {
				store.invites.update((state) => applyInviteEvent(state, message.event))
				return
			}

			if (message.event.payload!.$case === 'connectionAdded') {
				connectionStore.update((state) => applyConnectionEvent(state, message.event))
				store.invites.update((state) => applyInviteEvent(state, message.event))
				store.pendingConnections.update((state) =>
					applyPendingConnectionEvent(state, message.event)
				)
				return
			}
		},
		async acceptInvite(payload) {
			const message = await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'acceptInvite',
					acceptInvite: payload
				}
			)
			if (!message.event) throw new Error('Cannot accept invite, you might already be connected.')
			if (message.event.payload?.$case !== 'connectionAdded')
				throw new Error('Cannot accept invite, you might already be connected.')

			connectionStore.update((state) => applyConnectionEvent(state, message.event))
			store.invites.update((state) => applyInviteEvent(state, message.event))
			store.pendingConnections.update((state) => applyPendingConnectionEvent(state, message.event))

			return message.event.payload.connectionAdded.connectionId
		},
		async declineInvite(payload) {
			sendCommand(commuter, {
				$case: 'declineInvite',
				declineInvite: payload
			})
			store.pendingConnections.update((state) => {
				state.delete(payload.connectionId)
				return state
			})
		},
		delete(payload) {
			sendCommand(commuter, {
				$case: 'deleteInvite',
				deleteInvite: payload
			})
			store.invites.update((state) => {
				state.delete(payload.inviteId)
				return state
			})
		}
	}
}

export default inviteProtocolFactory
