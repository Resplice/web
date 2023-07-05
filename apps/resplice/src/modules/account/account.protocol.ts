import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyUserEvents } from '$common/workers/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import { applyAccountEvent } from '$modules/account/account.state'
import type { AccountStore } from '$modules/account/account.store'

export interface AccountProtocol {
	editName(payload: proto.accounts.EditAccountName): Promise<void>
	editHandle(payload: proto.accounts.EditAccountHandle): Promise<void>
	uploadAvatar(payload: proto.accounts.EditAccountAvatar): Promise<void>
	deleteAccount(payload: proto.accounts.DeleteAccount): Promise<void>
}

type Dependencies = {
	cache: DB
	store: AccountStore
	commuter: SocketCommuter
}
function accountProtocolFactory({ cache, store, commuter }: Dependencies): AccountProtocol {
	commuter.messages$.pipe(onlyUserEvents()).subscribe((event) => {
		store.update((state) => applyAccountEvent(state, event))
	})

	return {
		async editName(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ACCOUNT_NAME,
				payload
			})
			store.update((state) => ({ ...state, name: payload.name }))
		},
		async editHandle(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ACCOUNT_HANDLE,
				payload
			})
			store.update((state) => ({ ...state, handle: payload.handle }))
		},
		async uploadAvatar(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ACCOUNT_AVATAR,
				payload
			})
			const avatarUrl = URL.createObjectURL(new File([payload.avatar], 'avatar'))
			store.update((state) => ({ ...state, avatarUrl }))
		},
		async deleteAccount(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.DELETE_ACCOUNT,
				payload
			})
			await cache.delete()
			location.reload()
		}
	}
}

export default accountProtocolFactory
