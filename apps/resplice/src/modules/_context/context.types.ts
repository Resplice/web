import type proto from '@resplice/proto'

export enum SocketStatus {
	DISCONNECTED = 'DISCONNECTED',
	CONNECTING = 'CONNECTING',
	CONNECTED = 'CONNECTED'
}

type Settings = {
	locale: string
	theme: 'light' | 'dark'
	appNotifications: boolean
}

export type ContextState = {
	socketStatus: SocketStatus
	error: string | null
	events: proto.Event[]
	settings: Settings
}
