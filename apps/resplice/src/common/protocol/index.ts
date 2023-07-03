import config from '$services/config'
import { fetchFactory } from '@resplice/utils'
import proto from '@resplice/proto'
import stores from '$common/stores'
import db from '$services/db'
import mockFetch from '$common/protocol/mockFetch'
import startSocketCommuter, {
	SocketEventType,
	SocketCommandType
} from '$common/workers/socketCommuter'
// import attributeProtocolFactory, {
// 	type AttributeProtocol
// } from '$modules/attribute/attribute.protocol'
// import chatProtocolFactory, { type ChatProtocol } from '$modules/chat/chat.protocol'
// import contactProtocolFactory, { type ContactProtocol } from '$modules/contact/contact.protocol'
// import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
// import profileProtocolFactory, { type ProfileProtocol } from '$modules/user/profile.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'
import { SocketStatus } from '$modules/app-event/app-event.types'

export interface RespliceProtocol {
	// attribute: AttributeProtocol
	// chat: ChatProtocol
	// contact: ContactProtocol
	// invite: InviteProtocol
	// profile: ProfileProtocol
	session: SessionProtocol
	openSocket: (payload: proto.auth.AuthorizeSocket) => void
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	const fetch = config.respliceApiUrl ? fetchFactory(config.respliceApiUrl) : mockFetch

	const socketCommuter = startSocketCommuter()

	socketCommuter.events$.subscribe((e) => {
		switch (e.type) {
			case SocketEventType.OPENED:
				stores.appEvent.set({ socketStatus: SocketStatus.CONNECTED, error: null, events: [] })
				break
			case SocketEventType.RECEIVED:
				stores.appEvent.update((state) => ({ ...state, events: [e.event, ...state.events] }))
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

	return {
		session: sessionProtocolFactory({ cache: db, store: stores.session, fetch }),
		openSocket: (payload) => {
			// TODO: insert into `commands` cache to generate next command id
			socketCommuter.postMessage({
				type: SocketCommandType.OPEN,
				handshake: {
					id: 0,
					type: proto.CommandType.AUTHORIZE_SOCKET,
					payload
				},
				respliceWsUrl: config.respliceWsUrl
			})
		}
	}
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
