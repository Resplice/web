import { filter, map, pipe, type OperatorFunction } from 'rxjs'
import proto, { type ProtoMessage } from '@resplice/proto'
import socketWorkerUrl from '$common/workers/socket?url'
import workerCommuterFactory, { type Commuter } from '$common/workers/workerCommuter'
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
type ReceivedEvent = {
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
	reason?: string
}
export type SocketEvent = OpenedEvent | ReceivedEvent | SentEvent | ErroredEvent | ClosedEvent

export function onlyEvents() {
	return pipe(
		filter<SocketEvent>(
			(e) => e.type === SocketEventType.RECEIVED && !e.message.error
		) as OperatorFunction<ReceivedEvent, ReceivedEvent>,
		map((e) => e.message.message)
	)
}

export type SocketCommuter = Commuter<SocketCommand, SocketEvent>

function startCommuter() {
	const socketWorker = new Worker(socketWorkerUrl, { type: 'module' })

	return workerCommuterFactory<SocketCommand, SocketEvent>(socketWorker)
}

export default startCommuter
