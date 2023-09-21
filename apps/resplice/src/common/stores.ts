import context from '$modules/_context/context.store'
import account from '$modules/account/account.store'
import attribute from '$modules/attribute/attribute.store'
import session from '$modules/session/session.store'

const stores = {
	context,
	account,
	attribute,
	session
}

export type Stores = typeof stores

export default stores
