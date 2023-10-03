import proto, { type ProtoMessage } from '@resplice/proto'
import type { CryptoKeys } from '$modules/session/session.types'

export enum SocketCommandType {
	OPEN = 'OPEN',
	SEND = 'SEND',
	CLOSE = 'CLOSE'
}

export type OpenCommand = {
	type: SocketCommandType.OPEN
	respliceWsUrl: string
	cryptoKeys: CryptoKeys
	persist: boolean
	handshake: Extract<proto.Command['payload'], { $case: 'authorizeSocket' }>
}
export type SendCommand = {
	type: SocketCommandType.SEND
	payload: proto.Command['payload']
}
type CloseCommand = {
	type: SocketCommandType.CLOSE
	statusCode?: number
	reason?: string
}
export type SocketCommand = OpenCommand | SendCommand | CloseCommand

export enum SocketEventType {
	OPENED = 'OPENED',
	RECEIVED = 'RECEIVED',
	SENT = 'SENT',
	ERRORED = 'ERRORED',
	CLOSED = 'CLOSED'
}
type OpenedEvent = {
	type: SocketEventType.OPENED
}
export type ReceivedEvent = {
	type: SocketEventType.RECEIVED
	message: ProtoMessage
}
type SentEvent = {
	type: SocketEventType.SENT
	requestId: number
}
type ErroredEvent = {
	type: SocketEventType.ERRORED
	error: string
}
type ClosedEvent = {
	type: SocketEventType.CLOSED
	code: number
	reason?: string
}
export type SocketEvent = OpenedEvent | ReceivedEvent | SentEvent | ErroredEvent | ClosedEvent
