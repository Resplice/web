import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyAccountEvents } from '$common/workers/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import { applyAccountEvent } from '$modules/account/account.state'
import type { AccountStore } from '$modules/account/account.store'

export interface AccountProtocol {
	changeName(payload: proto.account.ChangeAccountName): Promise<void>
	changeHandle(payload: proto.account.ChangeAccountHandle): Promise<void>
	uploadAvatar(payload: proto.account.ChangeAccountAvatar): Promise<void>
	// deleteAccount(payload: proto.account.DeleteAccount): Promise<void>
}

type Dependencies = {
	cache: DB
	store: AccountStore
	commuter: SocketCommuter
}
function accountProtocolFactory({ cache, store, commuter }: Dependencies): AccountProtocol {
	commuter.messages$.pipe(onlyAccountEvents()).subscribe((event) => {
		store.update((state) => applyAccountEvent(state, event))
	})

	return {
		async changeName(payload) {
			await sendCommand(cache, commuter, {
				$case: 'changeAccountName',
				changeAccountName: payload
			})
			store.update((state) => ({ ...state, name: payload.name }))
		},
		async changeHandle(payload) {
			await sendCommand(cache, commuter, {
				$case: 'changeAccountHandle',
				changeAccountHandle: payload
			})
			store.update((state) => ({ ...state, handle: payload.handle }))
		},
		async uploadAvatar(payload) {
			await sendCommand(cache, commuter, {
				$case: 'changeAccountAvatar',
				changeAccountAvatar: payload
			})
			const avatarUrl = URL.createObjectURL(new File([payload.avatar], 'avatar'))
			store.update((state) => ({ ...state, avatarUrl }))
		}
		// async deleteAccount(payload) {
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
