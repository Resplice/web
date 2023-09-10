import proto from '@resplice/proto'
import type { Fetch } from '@resplice/utils'
import config from '$services/config'
import type { DB } from '$services/db'
import {
	SocketCommandType,
	type CryptoKeys,
	type SocketCommuter,
	SocketEventType,
	type SocketEvent
} from '$common/workers/socketCommuter'
import { SocketStatus } from '$modules/_context/context.types'
import type { ContextStore } from '$modules/_context/context.store'
import type { Session } from '$modules/session/session.types'

export interface ContextProtocol {
	openSocket: (session: Session) => Promise<void>
}

type Dependencies = {
	cache: DB
	store: ContextStore
	commuter: SocketCommuter
	fetch: Fetch
}
function contextProtocolFactory({ cache, store, commuter, fetch }: Dependencies): ContextProtocol {
	function onSocketOpen() {
		store.update((state) => ({
			socketStatus: SocketStatus.CONNECTED,
			error: null,
			events: [],
			settings: state.settings
		}))
	}

	function onSocketMessage(message: proto.SecMessage) {
		if (message.payload.$case === 'event') {
			const event = message.payload.event
			store.update((state) => ({
				...state,
				events: [event, ...state.events]
			}))
			return
		}

		if (message.payload.$case === 'stream') {
			const stream = message.payload.stream
			store.update((state) => ({
				...state,
				events: [...stream.events, ...state.events]
			}))
			return
		}

		if (message.payload.$case === 'error') {
			// TODO: trigger toast
			console.error(message.payload.error)
			return
		}
	}

	function onSocketError(e: Extract<SocketEvent, { type: SocketEventType.ERRORED }>) {
		// TODO: trigger toast
		store.update((state) => ({
			socketStatus: SocketStatus.DISCONNECTED,
			error: e.error,
			events: state.events,
			settings: state.settings
		}))
	}

	function onSocketClose() {
		store.update((state) => ({
			socketStatus: SocketStatus.DISCONNECTED,
			error: state.error,
			events: state.events,
			settings: state.settings
		}))
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
		async openSocket(session) {
			const { events } = await cache.read<proto.Event>('events')
			const lastEventId = events.at(-1)?.id || 0

			const payload: Extract<proto.Command['payload'], { $case: 'authorizeSocket' }> = {
				$case: 'authorizeSocket',
				authorizeSocket: {
					email: session.email,
					phone: session.phone,
					lastEventId
				}
			}

			const [id] = await cache.insert('commands', payload)
			const handshake: proto.Command = { payload }

			await fetch.get({ endpoint: '/refresh-auth' })

			commuter.postMessage({
				type: SocketCommandType.OPEN,
				respliceWsUrl: config.respliceWsUrl,
				cryptoKeys: session.cryptoKeys,
				handshake
			})
		}
	}
}

export default contextProtocolFactory
