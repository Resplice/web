import proto, { type ProtoMessage } from '@resplice/proto'
import config from '$services/config'
import type { DB } from '$services/db'
import {
	SocketCommandType,
	type SocketCommuter,
	SocketEventType,
	type SocketEvent
} from '$common/workers/socketCommuter'
import { SocketStatus } from '$modules/_context/context.types'
import type { Stores } from '$common/stores'
import type { Session } from '$modules/session/session.types'

export interface ContextProtocol {
	openSocket: (session: Session) => Promise<void>
}

type Dependencies = {
	cache: DB
	stores: Stores
	commuter: SocketCommuter
}
function contextProtocolFactory({ cache, stores, commuter }: Dependencies): ContextProtocol {
	async function openSocket(session: Session) {
		const { events } = await cache.read<proto.Event>('events')
		const lastEventId = events.at(-1)?.id || 0

		const handshake: proto.Command['payload'] = {
			$case: 'authorizeSocket',
			authorizeSocket: {
				phone: session.phone,
				lastEventId
			}
		}

		commuter.postMessage({
			type: SocketCommandType.OPEN,
			respliceWsUrl: config.respliceWsUrl,
			cryptoKeys: session.cryptoKeys,
			persist: session.persist,
			handshake
		})
	}

	function onSocketOpen() {
		stores.context.update((state) => ({
			socketStatus: SocketStatus.CONNECTED,
			error: null,
			events: [],
			settings: state.settings
		}))
	}

	function onSocketMessage({ event, error, state }: ProtoMessage) {
		if (error) {
			// TODO: trigger toast
			console.error(error)
			return
		}

		if (event) {
			stores.context.update((state) => ({
				...state,
				events: [event, ...state.events]
			}))
		}

		if (state) {
			// TODO
		}
	}

	function onSocketError(e: Extract<SocketEvent, { type: SocketEventType.ERRORED }>) {
		if (navigator.onLine && document.hasFocus()) {
			reconnect()
		} else {
			stores.context.update((state) => ({
				...state,
				socketStatus: SocketStatus.DISCONNECTED,
				error: e.error
			}))
			window.addEventListener('online', function handler() {
				reconnect()
				window.removeEventListener('online', handler)
			})
			window.addEventListener('focus', function handler() {
				reconnect()
				window.removeEventListener('focus', handler)
			})
		}
	}

	function onSocketClose() {
		if (navigator.onLine && document.hasFocus()) {
			reconnect()
		} else {
			stores.context.update((state) => ({
				...state,
				socketStatus: SocketStatus.DISCONNECTED
			}))
			window.addEventListener('online', function handler() {
				reconnect()
				window.removeEventListener('online', handler)
			})
			window.addEventListener('focus', function handler() {
				reconnect()
				window.removeEventListener('focus', handler)
			})
		}
	}

	function reconnect() {
		const unsubscribe = stores.session.subscribe(async (state) => {
			await openSocket(state.currentSession)
		})
		unsubscribe()
	}

	commuter.messages$.subscribe((e) => {
		switch (e.type) {
			case SocketEventType.OPENED:
				onSocketOpen()
				break
			case SocketEventType.RECEIVED:
				onSocketMessage(e.message)
				break
			case SocketEventType.ERRORED:
				onSocketError(e)
				break
			case SocketEventType.CLOSED:
				onSocketClose()
				break
		}
	})

	return {
		openSocket
	}
}

export default contextProtocolFactory
