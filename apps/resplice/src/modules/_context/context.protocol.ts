import proto, { errorToString, type ProtoMessage } from '@resplice/proto'
import { capitalize } from '@resplice/utils'
import { toast } from '@resplice/components'
import config from '$services/config'
import type { DB } from '$services/db'
import { type SocketCommuter } from '$common/workers/socket/socketCommuter'
import {
	SocketCommandType,
	SocketEventType,
	type SocketEvent
} from '$common/workers/socket/socket.types'
import { SocketStatus } from '$modules/_context/context.types'
import type { Stores } from '$common/stores'
import type { Session } from '$modules/session/session.types'
import { applyAccountEvent, type AccountAggregate } from '$modules/account/account.state'
import { applyAttributeEvent, type AttributeAggregate } from '$modules/attribute/attribute.state'
import { applyInviteEvent, type InviteAggregate } from '$modules/invite/invite.state'
import {
	applyConnectionEvent,
	type ConnectionAggregate
} from '$modules/connection/connection.state'

export interface ContextProtocol {
	loadCache: () => Promise<void>
	openSocket: (session: Session) => Promise<void>
}

type Dependencies = {
	cache: DB
	stores: Stores
	commuter: SocketCommuter
}
function contextProtocolFactory({ cache, stores, commuter }: Dependencies): ContextProtocol {
	let openAttempts = 0

	async function openSocket(session: Session) {
		const { events } = await cache.read<proto.Event>('events')
		const lastEventId = events.at(-1)?.id || 0

		const handshake: proto.Command['payload'] = {
			$case: 'authorizeSocket',
			authorizeSocket: {
				lastEventId
			}
		}

		commuter.postMessage({
			type: SocketCommandType.OPEN,
			respliceWsUrl: config.respliceWsUrl,
			cryptoKeys: session.cryptoKeys,
			persist: session.persisted,
			handshake
		})
	}

	function onSocketOpen() {
		openAttempts = 0
		stores.context.update((state) => ({
			socketStatus: SocketStatus.CONNECTED,
			error: null,
			events: [],
			settings: state.settings
		}))
	}

	function onSocketMessage({ error, state }: ProtoMessage) {
		if (error) {
			console.error(error)
			toast.new({
				type: toast.type.DANGER,
				title: 'Error',
				message: capitalize(errorToString(error))
			})
			stores.attribute.update((state) => {
				state.delete(0)
				return state
			})
			return
		}

		if (state && state.events && state.events.length) {
			const events = state.events

			stores.account.update((state) => {
				let aggregate: AccountAggregate = state
				events.forEach((event) => {
					aggregate = applyAccountEvent(aggregate, event)
				})
				return aggregate
			})

			stores.attribute.update((state) => {
				let aggregate: AttributeAggregate = state || new Map()
				events.forEach((event) => {
					aggregate = applyAttributeEvent(aggregate, event)
				})
				return aggregate
			})

			stores.invite.invites.update((state) => {
				let aggregate: InviteAggregate = state || new Map()
				events.forEach((event) => {
					aggregate = applyInviteEvent(aggregate, event)
				})
				return aggregate
			})

			stores.connection.update((state) => {
				let aggregate: ConnectionAggregate = state || new Map()
				events.forEach((event) => {
					aggregate = applyConnectionEvent(aggregate, event)
				})
				return aggregate
			})
		}
	}

	function onSocketError(e: Extract<SocketEvent, { type: SocketEventType.ERRORED }>) {
		// TODO: trigger toast
		console.error(e.error)
	}

	async function onSocketClose(code: number) {
		// Code 3000: Unauthorized
		if (code === 3000) {
			// TODO: trigger toast
			await cache.clear()
			location.replace(config.authUrl)
			return
		}

		tryReconnect()
	}

	function tryReconnect() {
		if (navigator.onLine && document.hasFocus() && openAttempts < 3) {
			reopen()
		} else {
			stores.context.update((state) => ({
				...state,
				socketStatus: SocketStatus.DISCONNECTED
			}))
			window.addEventListener('online', function handler() {
				openAttempts = 0
				reopen()
				window.removeEventListener('online', handler)
			})
			window.addEventListener('focus', function handler() {
				openAttempts = 0
				reopen()
				window.removeEventListener('focus', handler)
			})
		}
	}

	function reopen() {
		openAttempts++

		const unsubscribe = stores.session.subscribe(async (state) => {
			if (!state.currentSession) return
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
				onSocketClose(e.code)
				break
		}
	})

	return {
		openSocket,
		async loadCache() {
			const { events } = await cache.read<proto.Event>('events')

			let accountAggregate: AccountAggregate = {} as AccountAggregate
			let attributeAggregate: AttributeAggregate = new Map()
			let inviteAggregate: InviteAggregate = new Map()
			let connectionAggregate: ConnectionAggregate = new Map()

			events.forEach((event) => {
				accountAggregate = applyAccountEvent(accountAggregate, event)
				attributeAggregate = applyAttributeEvent(attributeAggregate, event)
				inviteAggregate = applyInviteEvent(inviteAggregate, event)
				connectionAggregate = applyConnectionEvent(connectionAggregate, event)
			})

			stores.account.set(accountAggregate)
			stores.attribute.set(attributeAggregate)
			stores.invite.invites.set(inviteAggregate)
			stores.connection.set(connectionAggregate)
		}
	}
}

export default contextProtocolFactory
