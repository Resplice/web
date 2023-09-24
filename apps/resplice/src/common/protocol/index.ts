import proto from '@resplice/proto'
import stores from '$common/stores'
import db from '$services/db'
import startSocketCommuter from '$common/workers/socketCommuter'
import contextProtocolFactory, { type ContextProtocol } from '$modules/_context/context.protocol'
import accountProtocolFactory, { type AccountProtocol } from '$modules/account/account.protocol'
import attributeProtocolFactory, {
	type AttributeProtocol
} from '$modules/attribute/attribute.protocol'
import inviteProtocolFactory, { type InviteProtocol } from '$modules/invite/invite.protocol'
import sessionProtocolFactory, { type SessionProtocol } from '$modules/session/session.protocol'
import { applyAccountEvent, type AccountAggregate } from '$modules/account/account.state'
import { applyAttributeEvent, type AttributeAggregate } from '$modules/attribute/attribute.state'

export interface RespliceProtocol {
	ctx: ContextProtocol
	account: AccountProtocol
	attribute: AttributeProtocol
	invite: InviteProtocol
	session: SessionProtocol
	loadCache: () => Promise<void>
}

async function respliceProtocolFactory(): Promise<RespliceProtocol> {
	await db.open()

	const socketCommuter = startSocketCommuter()

	const protocol: RespliceProtocol = {
		ctx: contextProtocolFactory({
			cache: db,
			store: stores.context,
			commuter: socketCommuter
		}),
		account: accountProtocolFactory({ cache: db, store: stores.account, commuter: socketCommuter }),
		attribute: attributeProtocolFactory({
			cache: db,
			store: stores.attribute,
			commuter: socketCommuter
		}),
		invite: inviteProtocolFactory({ cache: db, store: stores.invite, commuter: socketCommuter }),
		session: sessionProtocolFactory({ cache: db, store: stores.session }),
		async loadCache() {
			const { events } = await db.read<proto.Message>('events')

			let accountAggregate: AccountAggregate | null = null
			let attributeAggregate: AttributeAggregate = new Map()

			events.forEach((event) => {
				accountAggregate = applyAccountEvent(accountAggregate, event)
				attributeAggregate = applyAttributeEvent(attributeAggregate, event)
			})

			console.log(accountAggregate, attributeAggregate)

			stores.account.set(accountAggregate)
			stores.attribute.set(attributeAggregate)
		}
	}

	socketCommuter.messages$.connect()

	return protocol
}

export const contextKey = 'resplice-protocol'

export default respliceProtocolFactory
