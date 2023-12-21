import { fetchFactory } from '@resplice/utils'
import config from '$services/config'
import db from '$services/db'
import type { Telemetry } from '$services/telemetry'
import stores from '$common/stores'
import startSocketCommuter from '$common/workers/socket/socketCommuter'
import contextProtocolFactory, { type ContextProtocol } from '$modules/_context/context.protocol'
import accountProtocolFactory, { type AccountProtocol } from '$modules/account/account.protocol'
import attributeProtocolFactory, {
	type AttributeProtocol
} from '$modules/attribute/attribute.protocol'
import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'
import connectionProtocolFactory, {
	type ConnectionProtocol
} from '$modules/connection/connection.protocol'
import momentProtocolFactory, { type MomentProtocol } from '$modules/moment/moment.protocol'

export interface RespliceProtocol {
	ctx: ContextProtocol
	account: AccountProtocol
	attribute: AttributeProtocol
	invite: InviteProtocol
	connection: ConnectionProtocol
	moment: MomentProtocol
	session: SessionProtocol
}

async function respliceProtocolFactory(telemetry: Telemetry): Promise<RespliceProtocol> {
	const fetch = fetchFactory(config.respliceApiUrl)
	await db.open()
	const socketCommuter = startSocketCommuter()

	const protocol: RespliceProtocol = {
		ctx: contextProtocolFactory({
			cache: db,
			stores,
			commuter: socketCommuter
		}),
		account: accountProtocolFactory({ cache: db, store: stores.account, commuter: socketCommuter }),
		attribute: attributeProtocolFactory({
			fetch,
			cache: db,
			store: stores.attribute,
			commuter: socketCommuter
		}),
		invite: inviteProtocolFactory({
			fetch,
			cache: db,
			store: stores.invite,
			connectionStore: stores.connection,
			commuter: socketCommuter,
			telemetry
		}),
		connection: connectionProtocolFactory({
			cache: db,
			store: stores.connection,
			commuter: socketCommuter
		}),
		moment: momentProtocolFactory({ cache: db, store: stores.moment, commuter: socketCommuter }),
		session: sessionProtocolFactory({
			fetch,
			cache: db,
			store: stores.session,
			commuter: socketCommuter,
			telemetry
		})
	}

	socketCommuter.messages$.connect()

	return protocol
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
