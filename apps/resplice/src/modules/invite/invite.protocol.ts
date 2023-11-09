import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import type { InviteStore } from '$modules/invite/invite.store'
import type { Invite, Qr } from '$modules/invite/invite.types'
import {
	applyInviteEvent,
	applyPendingConnectionEvent,
	mapProtoInviteType
} from '$modules/invite/invite.state'

export interface InviteProtocol {
	create(payload: proto.invite.CreateInvite): void
	createQr(payload: proto.invite.CreateQrInvite): Promise<Qr>
	addShare(payload: proto.invite.AddInviteShare): void
	removeShare(payload: proto.invite.RemoveInviteShare): void
	delete(payload: proto.invite.DeleteInvite): void
	accept(payload: proto.invite.AcceptInvite): void
	decline(payload: proto.invite.DeclineInvite): void
}

type Dependencies = {
	cache: DB
	store: InviteStore
	commuter: SocketCommuter
}
function inviteProtocolFactory({ store, commuter }: Dependencies): InviteProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.invites.update((state) => applyInviteEvent(state, event))
		store.pendingConnections.update((state) => applyPendingConnectionEvent(state, event))
	})

	return {
		create(payload) {
			sendCommand(commuter, {
				$case: 'createInvite',
				createInvite: payload
			})
			const placeholderInvite: Invite = {
				id: 0,
				type: mapProtoInviteType(payload.type),
				name: payload.name,
				value: payload.value,
				shares: payload.attributeIds
			}
			store.invites.update((state) => {
				state.set(placeholderInvite.id, placeholderInvite)
				return state
			})
		},
		async createQr(payload) {
			// TODO: Implement
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({
						uuid: 'uuid1234',
						attributeIds: payload.attributeIds
					})
				}, 500)
			})
		},
		addShare(payload) {
			sendCommand(commuter, {
				$case: 'addInviteShare',
				addInviteShare: payload
			})
			store.invites.update((state) => {
				state.get(payload.inviteId)!.shares.push(payload.attributeId)
				return state
			})
		},
		removeShare(payload) {
			sendCommand(commuter, {
				$case: 'removeInviteShare',
				removeInviteShare: payload
			})
			store.invites.update((state) => {
				state.get(payload.inviteId)!.shares = state
					.get(payload.inviteId)!
					.shares.filter((id) => id !== payload.attributeId)
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
		},
		accept(payload) {
			sendCommand(commuter, {
				$case: 'acceptInvite',
				acceptInvite: payload
			})
		},
		decline(payload) {
			sendCommand(commuter, {
				$case: 'declineInvite',
				declineInvite: payload
			})
		}
	}
}

export default inviteProtocolFactory
