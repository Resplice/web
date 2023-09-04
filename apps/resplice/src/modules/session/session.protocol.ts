// import type { DB } from '$services/db'
import type { Session } from '$modules/session/session.types'
// import type { SessionStore } from '$modules/session/session.store'

export interface SessionProtocol {
	isValid(): Promise<boolean>
	loadCurrentSession(): Promise<Session | undefined>
}

// type Dependencies = {
// 	cache: DB
// 	store: SessionStore
// }
function sessionProtocolFactory(): SessionProtocol {
	return {
		async isValid() {
			// TODO
			return true
		},
		async loadCurrentSession() {
			// TODO
			return undefined
		}
	}
}

export default sessionProtocolFactory
