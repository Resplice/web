import context from '$modules/_context/context.store'
import account from '$modules/account/account.store'
import attribute from '$modules/attribute/attribute.store'
import invite from '$modules/invite/invite.store'
import connection from '$modules/connection/connection.store'
import session from '$modules/session/session.store'

const stores = {
	context,
	account,
	attribute,
	invite,
	connection,
	session
}

export type Stores = typeof stores

export default stores
