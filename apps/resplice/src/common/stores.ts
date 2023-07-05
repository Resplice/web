import appEvent from '$modules/app-event/app-event.store'
import account from '$modules/account/account.store'
import attribute from '$modules/attribute/attribute.store'
import session from '$modules/session/session.store'
// import chat from '$modules/chat/chat.store'
// import contact from '$modules/contact/contact.store'
// import invite from '$modules/invite/invite.store'
// import profile from '$modules/user/profile.store'
// import search from '$modules/search/search.store'

const stores = {
	appEvent,
	account,
	attribute,
	session
	// chat,
	// contact,
	// invite,
	// profile,
	// search
}

export type Stores = typeof stores

export default stores
