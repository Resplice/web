import config from '$services/config'
import type { DB } from '$services/db'
import { sendCommand } from '$common/protocol/helpers'
import type { SocketCommuter } from '$common/workers/socketCommuter'
import type { Session } from '$modules/session/session.types'
import type { SessionStore } from '$modules/session/session.store'

export interface SessionProtocol {
	load(): Promise<Session>
	logout(): Promise<void>
}

type Dependencies = {
	cache: DB
	store: SessionStore
	commuter: SocketCommuter
}
function sessionProtocolFactory({ cache, store, commuter }: Dependencies): SessionProtocol {
	return {
		async load() {
			const session = await cache.getById<Session>('session', 1)
			store.set({ currentSession: { id: 0, ...session }, sessions: [] })
			return session
		},
		async logout() {
			const { phone } = await cache.getById<Session>('session', 1)
			sendCommand(commuter, {
				$case: 'endSession',
				endSession: {
					phone,
					sessionId: 0
				}
			})
			await cache.delete()
			window.open(config.authUrl)
		}
	}
}

export default sessionProtocolFactory
