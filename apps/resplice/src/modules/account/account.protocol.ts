import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import { applyAccountEvent } from '$modules/account/account.state'
import type { AccountStore } from '$modules/account/account.store'

export interface AccountProtocol {
	changeName(payload: proto.account.ChangeAccountName): void
	changeHandle(payload: proto.account.ChangeAccountHandle): void
	uploadAvatar(payload: proto.account.ChangeAccountAvatar): void
	// deleteAccount(payload: proto.account.DeleteAccount): void
}

type Dependencies = {
	cache: DB
	store: AccountStore
	commuter: SocketCommuter
}
function accountProtocolFactory({ store, commuter }: Dependencies): AccountProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.update((state) => applyAccountEvent(state, event))
	})

	return {
		changeName(payload) {
			sendCommand(commuter, {
				$case: 'changeAccountName',
				changeAccountName: payload
			})
			store.update((state) => ({ ...state, name: payload.name }))
		},
		changeHandle(payload) {
			sendCommand(commuter, {
				$case: 'changeAccountHandle',
				changeAccountHandle: payload
			})
			store.update((state) => ({ ...state, handle: payload.handle }))
		},
		uploadAvatar(payload) {
			sendCommand(commuter, {
				$case: 'changeAccountAvatar',
				changeAccountAvatar: payload
			})
			const avatarUrl = URL.createObjectURL(new File([payload.avatar], 'avatar'))
			store.update((state) => ({ ...state, avatarUrl }))
		}
		// deleteAccount(payload) {
		// 	await sendCommand(cache, commuter, {
		// 		type: proto.CommandType.DELETE_ACCOUNT,
		// 		payload
		// 	})
		// 	await cache.delete()
		// 	location.reload()
		// }
	}
}

export default accountProtocolFactory
