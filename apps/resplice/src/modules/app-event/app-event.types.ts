import type { Event } from '@resplice/proto'

export enum SocketStatus {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}
export type AppEventState = {
	socketStatus: SocketStatus
	error: Error | null
	events: Event[]
}
