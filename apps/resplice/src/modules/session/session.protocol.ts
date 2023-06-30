import proto from '@resplice/proto'
import { executeHttpCommand } from '$services/protocol'
import { b64tob, type Fetch } from '@resplice/utils'
import type { DB } from '$services/db'
import type { Session } from '$modules/session/session.types'
import type { SessionStore } from '$modules/session/session.store'

export interface SessionProtocol {
	initialize(authToken?: string): Promise<Session | undefined>
	loadCurrentSession(): Promise<Session | undefined>
}

type Dependencies = {
	cache: DB
	store: SessionStore
	fetch: Fetch
}
function sessionProtocolFactory({ cache, store, fetch }: Dependencies): SessionProtocol {
	return {
		async initialize(authToken) {
			if (authToken) {
				const payload: proto.sessions.StartSession = {
					authCode: b64tob(authToken) as Uint8Array
				}
				const startSessionPromise = executeHttpCommand<proto.sessions.SessionStarted>(
					{ type: proto.CommandType.START_SESSION, payload },
					{ fetch }
				)
				const clearCachePromise = cache.clear()
				const [{ event, errors }] = await Promise.all([startSessionPromise, clearCachePromise])

				if (errors) {
					console.error(errors)
					return undefined
				}

				const session: Session = {
					id: event.sessionId,
					expiry: event.expirySeconds,
					authToken: event.authCode
				}

				await cache.insert('currentSession', session)
				store.set({ currentSession: session, sessions: [] })
				return session
			}

			const session = await cache.getById<Session>('currentSession', 1)
			if (session) {
				store.update((state) => ({ ...state, currentSession: session }))
			}
			return session
		},
		async loadCurrentSession() {
			const session = await cache.getById<Session>('currentSession', 1)
			if (session) {
				store.update((state) => ({ ...state, currentSession: session }))
			}
			return session
		}
	}
}

export default sessionProtocolFactory
