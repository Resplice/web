import config from '$services/config'
// import { fetchFactory } from '@resplice/utils'
import type proto from '@resplice/proto'
import stores from '$common/stores'
import db from '$services/db'
// import mockFetch from '$common/protocol/mockFetch'
import startSocketCommuter, {
	SocketEventType,
	SocketCommandType,
	type CryptoKeys,
	type SocketEvent
} from '$common/workers/socketCommuter'
import accountProtocolFactory, { type AccountProtocol } from '$modules/account/account.protocol'
import attributeProtocolFactory, {
	type AttributeProtocol
} from '$modules/attribute/attribute.protocol'
// import chatProtocolFactory, { type ChatProtocol } from '$modules/chat/chat.protocol'
// import contactProtocolFactory, { type ContactProtocol } from '$modules/contact/contact.protocol'
// import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
// import profileProtocolFactory, { type ProfileProtocol } from '$modules/user/profile.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'
import { SocketStatus } from '$modules/_context/context.types'

export interface RespliceProtocol {
	account: AccountProtocol
	attribute: AttributeProtocol
	// chat: ChatProtocol
	// contact: ContactProtocol
	// invite: InviteProtocol
	// profile: ProfileProtocol
	session: SessionProtocol
	openSocket: () => Promise<void>
}

function onSocketOpen() {
	stores.context.update((state) => ({
		socketStatus: SocketStatus.CONNECTED,
		error: null,
		events: [],
		settings: state.settings
	}))
}

function onSocketMessage(message: proto.Message) {
	if (message.payload.$case === 'event') {
		const event = message.payload.event
		stores.context.update((state) => ({
			...state,
			events: [event, ...state.events]
		}))
		return
	}

	if (message.payload.$case === 'stream') {
		const stream = message.payload.stream
		stores.context.update((state) => ({
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
	stores.context.update((state) => ({
		socketStatus: SocketStatus.DISCONNECTED,
		error: e.error,
		events: state.events,
		settings: state.settings
	}))
}

function onSocketClose() {
	stores.context.update((state) => ({
		socketStatus: SocketStatus.DISCONNECTED,
		error: state.error,
		events: state.events,
		settings: state.settings
	}))
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	// const fetch = config.respliceApiUrl ? fetchFactory(config.respliceApiUrl) : mockFetch

	const socketCommuter = startSocketCommuter()

	socketCommuter.messages$.subscribe((e) => {
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

	const protocol: RespliceProtocol = {
		account: accountProtocolFactory({ cache: db, store: stores.account, commuter: socketCommuter }),
		attribute: attributeProtocolFactory({
			cache: db,
			store: stores.attribute,
			commuter: socketCommuter
		}),
		session: sessionProtocolFactory(),
		async openSocket() {
			const { cryptoKeys } = await db.getById<{ cryptoKeys: CryptoKeys }>('context', 1)

			socketCommuter.postMessage({
				type: SocketCommandType.OPEN,
				respliceWsUrl: config.respliceWsUrl,
				cryptoKeys
			})
		}
	}

	socketCommuter.messages$.connect()

	return protocol
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
