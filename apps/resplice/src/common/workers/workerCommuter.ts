import { fromEvent, map, type Observable } from 'rxjs'

export interface Commuter<C, E> {
	events$: Observable<E>
	postMessage: (m: C) => void
}

function workerCommuterFactory<C = unknown, E = unknown>(worker: Worker): Commuter<C, E> {
	return {
		events$: fromEvent<MessageEvent<E>>(worker, 'message').pipe(map((e) => e.data)),
		postMessage: (m: C) => worker.postMessage(m)
	}
}

export default workerCommuterFactory
