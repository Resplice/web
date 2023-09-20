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
import type { ContextStore } from '$modules/_context/context.store'
import type { Session } from '$modules/session/session.types'

export interface ContextProtocol {
	openSocket: (session: Session) => Promise<void>
}

type Dependencies = {
	cache: DB
	store: ContextStore
	commuter: SocketCommuter
}
function contextProtocolFactory({ cache, store, commuter }: Dependencies): ContextProtocol {
	function onSocketOpen() {
		store.update((state) => ({
			socketStatus: SocketStatus.CONNECTED,
			error: null,
			events: [],
			settings: state.settings
		}))
	}

	function onSocketMessage(msg: ProtoMessage) {
		if (msg.error) {
			// TODO: trigger toast
			console.error(msg.error)
			return
		}

		const event = msg.event
		store.update((state) => ({
			...state,
			events: [event, ...state.events]
		}))
	}

	function onSocketError(e: Extract<SocketEvent, { type: SocketEventType.ERRORED }>) {
		// TODO: trigger toast
		console.log(e.error)
		store.update((state) => ({
			...state,
			socketStatus: SocketStatus.DISCONNECTED,
			error: e.error
		}))
	}

	function onSocketClose() {
		store.update((state) => ({
			...state,
			socketStatus: SocketStatus.DISCONNECTED
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

			const handshake: proto.Command['payload'] = {
				$case: 'authorizeSocket',
				authorizeSocket: {
					email: session.email,
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
	}
}

export default contextProtocolFactory
