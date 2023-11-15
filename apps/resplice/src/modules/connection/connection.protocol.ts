import proto from '@resplice/proto'
import type { DB } from '$services/db'
import type { ConnectionStore } from '$modules/connection/connection.store'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import { applyConnectionEvent } from '$modules/connection/connection.state'

export interface ConnectionProtocol {
	changeAlias(payload: proto.connection.ChangeConnectionAlias): void
	changeDescription(payload: proto.connection.ChangeConnectionDescription): void
	addShare(payload: proto.connection.AddConnectionShare): void
	removeShare(payload: proto.connection.RemoveConnectionShare): void
	remove(payload: proto.connection.RemoveConnection): void
}

type Dependencies = {
	cache: DB
	store: ConnectionStore
	commuter: SocketCommuter
}
function connectionProtocolFactory({ store, commuter }: Dependencies): ConnectionProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.update((state) => applyConnectionEvent(state, event))
	})

	return {
		changeAlias(payload) {
			sendCommand(commuter, {
				$case: 'changeConnectionAlias',
				changeConnectionAlias: payload
			})
			store.update((state) => {
				state.get(payload.connectionId)!.alias = payload.alias
				return state
			})
		},
		changeDescription(payload) {
			sendCommand(commuter, {
				$case: 'changeConnectionDescription',
				changeConnectionDescription: payload
			})
			store.update((state) => {
				state.get(payload.connectionId)!.description = payload.description
				return state
			})
		},
		addShare(payload) {
			sendCommand(commuter, {
				$case: 'addConnectionShare',
				addConnectionShare: payload
			})
			store.update((state) => {
				state.get(payload.connectionId)!.sharedAttributeIds.push(payload.attributeId)
				return state
			})
		},
		removeShare(payload) {
			sendCommand(commuter, {
				$case: 'removeConnectionShare',
				removeConnectionShare: payload
			})
			store.update((state) => {
				state.get(payload.connectionId)!.sharedAttributeIds = state
					.get(payload.connectionId)!
					.sharedAttributeIds.filter((id) => id !== payload.attributeId)
				return state
			})
		},
		remove(payload) {
			sendCommand(commuter, {
				$case: 'removeConnection',
				removeConnection: payload
			})
			store.update((state) => {
				state.delete(payload.connectionId)
				return state
			})
		}
	}
}

export default connectionProtocolFactory
