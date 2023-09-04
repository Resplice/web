import { filter, map, pipe, type OperatorFunction } from 'rxjs'
import proto from '@resplice/proto'
import socketWorkerUrl from '$common/workers/socket?url'
import workerCommuterFactory, { type Commuter } from '$common/workers/workerCommuter'

export enum SocketCommandType {
	OPEN = 'OPEN',
	SEND = 'SEND',
	CLOSE = 'CLOSE'
}
export type CryptoKeys = {
	client: CryptoKey
	server: CryptoKey
}

export type OpenCommand = {
	type: SocketCommandType.OPEN
	respliceWsUrl: string
	cryptoKeys: CryptoKeys
}
export type SendCommand = {
	type: SocketCommandType.SEND
	payload: proto.Command
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
	message: proto.Message
}
type SentEvent = {
	type: SocketEventType.SENT
	requestId: number
}
type ErroredEvent = {
	type: SocketEventType.ERRORED
	error: Error
}
type ClosedEvent = {
	type: SocketEventType.CLOSED
	reason?: string
}
export type SocketEvent = OpenedEvent | ReceivedEvent | SentEvent | ErroredEvent | ClosedEvent

type ReceivedEventAccount = ReceivedEvent & {
	message: proto.Message & { payload: { $case: 'event'; event: proto.Event } }
}
export function onlyAccountEvents() {
	return pipe(
		filter<SocketEvent>(
			(e) => e.type === SocketEventType.RECEIVED && e.message.payload.$case === 'event'
		) as OperatorFunction<ReceivedEvent, ReceivedEventAccount>,
		map((e) => e.message.payload.event)
	)
}

export type SocketCommuter = Commuter<SocketCommand, SocketEvent>

function startCommuter() {
	const socketWorker = new Worker(socketWorkerUrl, { type: 'module' })

	return workerCommuterFactory<SocketCommand, SocketEvent>(socketWorker)
}

export default startCommuter
