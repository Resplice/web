import type { DB } from '$services/db'
import type { Session } from '$modules/session/session.types'
import type { SessionStore } from '$modules/session/session.store'

export interface SessionProtocol {
	load(): Promise<Session>
}

type Dependencies = {
	cache: DB
	store: SessionStore
}
function sessionProtocolFactory({ cache, store }: Dependencies): SessionProtocol {
	return {
		async load() {
			const session = await cache.getById<Session>('session', 1)
			store.set({ currentSession: session, sessions: [] })
			return session
		}
	}
}

export default sessionProtocolFactory
