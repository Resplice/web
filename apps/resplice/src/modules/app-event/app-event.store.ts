import { derived, writable } from 'svelte/store'
import { type AppEventState, SocketStatus } from '$modules/app-event/app-event.types'

const appEventStore = writable<AppEventState>({
	socketStatus: SocketStatus.DISCONNECTED,
	error: null,
	events: []
})

export const isOnline = derived<typeof appEventStore, boolean>(appEventStore, ($store, set) => {
	if ($store.socketStatus === SocketStatus.DISCONNECTED) set(false)
	else set(true)
})

export const lastEventId = derived<typeof appEventStore, number>(appEventStore, ($store, set) => {
	const lastEvent = $store.events[0]
	if (lastEvent) set(lastEvent.id)
	else set(0)
})

export type EventStore = typeof appEventStore

export default appEventStore
