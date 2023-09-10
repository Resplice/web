import config from '$services/config'
import { fetchFactory } from '@resplice/utils'
import stores from '$common/stores'
import db from '$services/db'
import mockFetch from '$common/protocol/mockFetch'
import startSocketCommuter from '$common/workers/socketCommuter'
import contextProtocolFactory, { type ContextProtocol } from '$modules/_context/context.protocol'
import accountProtocolFactory, { type AccountProtocol } from '$modules/account/account.protocol'
import attributeProtocolFactory, {
	type AttributeProtocol
} from '$modules/attribute/attribute.protocol'
// import contactProtocolFactory, { type ContactProtocol } from '$modules/contact/contact.protocol'
// import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'

export interface RespliceProtocol {
	ctx: ContextProtocol
	account: AccountProtocol
	attribute: AttributeProtocol
	// contact: ContactProtocol
	// invite: InviteProtocol
	session: SessionProtocol
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	const fetch = config.respliceApiUrl ? fetchFactory(config.respliceApiUrl) : mockFetch

	const socketCommuter = startSocketCommuter()

	const protocol: RespliceProtocol = {
		ctx: contextProtocolFactory({
			cache: db,
			store: stores.context,
			commuter: socketCommuter,
			fetch
		}),
		account: accountProtocolFactory({ cache: db, store: stores.account, commuter: socketCommuter }),
		attribute: attributeProtocolFactory({
			cache: db,
			store: stores.attribute,
			commuter: socketCommuter
		}),
		session: sessionProtocolFactory({ cache: db, store: stores.session})
	}

	socketCommuter.messages$.connect()

	return protocol
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
