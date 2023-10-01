import { filter, map, pipe, type OperatorFunction } from 'rxjs'
import workerCommuterFactory, { type Commuter } from '$common/workers/workerCommuter'
import {
	type SocketEvent,
	SocketEventType,
	type ReceivedEvent,
	type SocketCommand
} from '$common/workers/socket/socket.types'

export function onlyEvents() {
	return pipe(
		filter<SocketEvent>(
			(e) => e.type === SocketEventType.RECEIVED && !e.message.error && !e.message.state
		) as OperatorFunction<ReceivedEvent, ReceivedEvent>,
		map((e) => e.message.event)
	)
}

export type SocketCommuter = Commuter<SocketCommand, SocketEvent>

function startCommuter() {
	const socketWorker = new Worker(new URL('./socket.ts', import.meta.url), { type: 'module' })

	return workerCommuterFactory<SocketCommand, SocketEvent>(socketWorker)
}

export default startCommuter
