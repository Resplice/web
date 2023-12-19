import proto from '@resplice/proto'
import type { DB } from '$services/db'
import type { MomentStore } from '$modules/moment/moment.store'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { applyMomentEvent } from '$modules/moment/moment.state'
// import { sendCommand } from '$common/protocol/helpers'

export interface MomentProtocol {
	create(payload: proto.moment.CreateMoment): void
	changeInfo(payload: proto.moment.ChangeMomentInfo): void
	changeTime(payload: proto.moment.ChangeMomentTime): void
	join(payload: proto.moment.JoinMoment): void
	leave(payload: proto.moment.LeaveMoment): void
	delete(payload: proto.moment.DeleteMoment): void
}

type Dependencies = {
	cache: DB
	store: MomentStore
	commuter: SocketCommuter
}
function momentProtocolFactory({ store, commuter }: Dependencies): MomentProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.update((state) => applyMomentEvent(state, event))
	})

	return {
		create(payload) {
			console.log('create moment', payload)
			// TODO: Http request
			// sendCommand(commuter, {
			// 	$case: 'createMoment',
			// 	createMoment: payload
			// })
			// store.update((state) => {
			// 	state.get(payload.connectionId)!.alias = payload.alias
			// 	return state
			// })
		},
		changeInfo(payload) {
			console.log('change moment info', payload)
		},
		changeTime(payload) {
			console.log('change moment time', payload)
		},
		join(payload) {
			console.log('join moment', payload)
		},
		leave(payload) {
			console.log('leave moment', payload)
		},
		delete(payload) {
			console.log('delete moment', payload)
		}
	}
}

export default momentProtocolFactory
