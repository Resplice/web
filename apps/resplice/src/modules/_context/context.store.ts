import { derived, writable } from 'svelte/store'
import { type ContextState, SocketStatus } from '$modules/_context/context.types'

const contextStore = writable<ContextState>({
	socketStatus: SocketStatus.DISCONNECTED,
	error: null,
	events: [],
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

export const lastEventId = derived<typeof contextStore, number>(contextStore, ($store, set) => {
	const lastEvent = $store.events[0]
	if (lastEvent) set(lastEvent.id)
	else set(0)
})

export type ContextStore = typeof contextStore

export default contextStore
