import {
	filter,
	map,
	pipe,
	type MonoTypeOperatorFunction,
	type UnaryFunction,
	type Observable
} from 'rxjs'
import proto, { type Command, type Event, type UserEvent } from '@resplice/proto'
import socketWorkerUrl from '$common/workers/socket?url'
import workerCommuterFactory, { type Commuter } from '$common/workers/workerCommuter'

export enum SocketCommandType {
	OPEN = 'OPEN',
	SEND = 'SEND',
	CLOSE = 'CLOSE'
}

export type HandshakeCommand = Extract<Command, { type: proto.CommandType.AUTHORIZE_SOCKET }>
type OpenCommand = {
	type: SocketCommandType.OPEN
	respliceWsUrl: string
	handshake: HandshakeCommand
}
export type SendCommand = {
	type: SocketCommandType.SEND
	payload: Command
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
	event: Event
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

export function onlyUserEvents() {
	const nonUserEventTypes = [
		proto.EventType.ERROR,
		proto.EventType.AUTH_CHANGED,
		proto.EventType.SOCKET_AUTHORIZED
	]
	return pipe(
		filter<SocketEvent>(
			(m) => m.type === SocketEventType.RECEIVED && !nonUserEventTypes.includes(m.event.type)
		) as MonoTypeOperatorFunction<ReceivedEvent>,
		map((m) => m.event)
	) as UnaryFunction<Observable<SocketEvent>, Observable<UserEvent>>
}

export type SocketCommuter = Commuter<SocketCommand, SocketEvent>

function startCommuter() {
	const socketWorker = new Worker(socketWorkerUrl, { type: 'module' })

	return workerCommuterFactory<SocketCommand, SocketEvent>(socketWorker)
}

export default startCommuter
