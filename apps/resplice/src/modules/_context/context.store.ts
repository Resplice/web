import { derived, writable } from 'svelte/store'
import { type ContextState, SocketStatus } from '$modules/_context/context.types'

const contextStore = writable<ContextState>({
	socketStatus: SocketStatus.CONNECTING,
	error: null,
	settings: {
		locale: 'en-US',
		theme: 'light',
		appNotifications: false
	}
})

export const isOnline = derived<typeof contextStore, boolean>(contextStore, ($store, set) => {
	if ($store.socketStatus === SocketStatus.DISCONNECTED) set(false)
	else set(true)
})

export type ContextStore = typeof contextStore

export default contextStore
