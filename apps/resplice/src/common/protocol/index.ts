import config from '$services/config'
import { fetchFactory } from '@resplice/utils'
import proto, { type AuthorizeSocket } from '@resplice/proto'
import stores from '$common/stores'
import db from '$services/db'
import mockFetch from '$common/protocol/mockFetch'
import startSocketCommuter, {
	SocketEventType,
	SocketCommandType
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
import { SocketStatus } from '$modules/app-event/app-event.types'

export interface RespliceProtocol {
	account: AccountProtocol
	attribute: AttributeProtocol
	// chat: ChatProtocol
	// contact: ContactProtocol
	// invite: InviteProtocol
	// profile: ProfileProtocol
	session: SessionProtocol
	openSocket: (payload: proto.auth.AuthorizeSocket) => Promise<void>
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	const fetch = config.respliceApiUrl ? fetchFactory(config.respliceApiUrl) : mockFetch

	const socketCommuter = startSocketCommuter()

	socketCommuter.messages$.subscribe((e) => {
		switch (e.type) {
			case SocketEventType.OPENED:
				stores.appEvent.set({ socketStatus: SocketStatus.CONNECTED, error: null, events: [] })
				break
			case SocketEventType.RECEIVED:
				stores.appEvent.update((state) => ({ ...state, events: [e.event, ...state.events] }))
				// TODO: Trigger toast on error events
				break
			case SocketEventType.ERRORED:
				// TODO: trigger toast
				stores.appEvent.update((state) => ({
					socketStatus: SocketStatus.DISCONNECTED,
					error: e.error,
					events: state.events
				}))
				break
			case SocketEventType.CLOSED:
				stores.appEvent.update((state) => ({
					socketStatus: SocketStatus.DISCONNECTED,
					error: state.error,
					events: state.events
				}))
				break
		}
	})

	const protocol = {
		account: accountProtocolFactory({ cache: db, store: stores.account, commuter: socketCommuter }),
		attribute: attributeProtocolFactory({
			cache: db,
			store: stores.attribute,
			commuter: socketCommuter
		}),
		session: sessionProtocolFactory({ cache: db, store: stores.session, fetch }),
		async openSocket(payload) {
			const params = {
				type: proto.CommandType.AUTHORIZE_SOCKET,
				payload
			}
			const [id] = await db.insert('commands', params)
			const handshake = { id, ...params } as AuthorizeSocket
			socketCommuter.postMessage({
				type: SocketCommandType.OPEN,
				handshake,
				respliceWsUrl: config.respliceWsUrl
			})
		}
	}

	socketCommuter.messages$.connect()

	return protocol
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
