import { fromEvent, map, connectable, type Connectable } from 'rxjs'

export interface Commuter<C, E> {
	messages$: Connectable<E>
	postMessage: (m: C) => void
}

function workerCommuterFactory<C = unknown, E = unknown>(worker: Worker): Commuter<C, E> {
	const workerMessages$ = fromEvent<MessageEvent<E>>(worker, 'message').pipe(map((e) => e.data))
	return {
		messages$: connectable(workerMessages$),
		postMessage: (m: C) => worker.postMessage(m)
	}
}

export default workerCommuterFactory
