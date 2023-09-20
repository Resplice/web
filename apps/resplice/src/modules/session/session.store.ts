import { writable } from 'svelte/store'
import type { SessionState } from '$modules/session/session.types'

const sessionStore = writable<SessionState>({
	currentSession: null,
	sessions: []
})

export type SessionStore = typeof sessionStore

export default sessionStore
