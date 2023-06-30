import config from '$services/config'
import { fetchFactory } from '@resplice/utils'
import stores from '$common/stores'
import db from '$services/db'
// import attributeProtocolFactory, {
// 	type AttributeProtocol
// } from '$modules/attribute/attribute.protocol'
// import chatProtocolFactory, { type ChatProtocol } from '$modules/chat/chat.protocol'
// import contactProtocolFactory, { type ContactProtocol } from '$modules/contact/contact.protocol'
// import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
// import profileProtocolFactory, { type ProfileProtocol } from '$modules/user/profile.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'

export interface RespliceProtocol {
	// attribute: AttributeProtocol
	// chat: ChatProtocol
	// contact: ContactProtocol
	// invite: InviteProtocol
	// profile: ProfileProtocol
	session: SessionProtocol
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	// TODO: Mock Fetch
	const fetch = fetchFactory(config.respliceApiUrl)

	return {
		session: sessionProtocolFactory({ cache: db, store: stores.session, fetch })
	}
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
