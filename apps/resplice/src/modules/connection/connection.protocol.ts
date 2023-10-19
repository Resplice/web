import proto from '@resplice/proto'
import type { DB } from '$services/db'
import type { ConnectionStore } from '$modules/connection/connection.store'
import type { SocketCommuter } from '$common/workers/socket/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'

export interface ConnectionProtocol {
	changeAlias(payload: proto.connection.ChangeConnectionAlias): void
	addShare(payload: proto.connection.AddConnectionShare): void
	removeShare(payload: proto.connection.RemoveConnectionShare): void
}

type Dependencies = {
	cache: DB
	store: ConnectionStore
	commuter: SocketCommuter
}
function connectionProtocolFactory({ store, commuter }: Dependencies): ConnectionProtocol {
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
		addShare(payload) {
			sendCommand(commuter, {
				$case: 'addConnectionShare',
				addConnectionShare: payload
			})
			// store.update((state) => {
			// 	state.get(payload.connectionId)!.shares.push(payload.attributeId)
			// 	return state
			// })
		},
		removeShare(payload) {
			sendCommand(commuter, {
				$case: 'removeConnectionShare',
				removeConnectionShare: payload
			})
			// store.update((state) => {
			// 	state.get(payload.connectionId)!.shares = state
			// 		.get(payload.connectionId)!
			// 		.shares.filter((id) => id !== payload.attributeId)
			// 	return state
			// })
		}
	}
}

export default connectionProtocolFactory
