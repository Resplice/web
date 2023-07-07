export type Session = {
	id: number
	expiry: number
	accessToken: Uint8Array
}

export type SessionItem = {
	id: number
	device: string
	lastLocation: string
}

export type SessionState = {
	currentSession: Session | null
	sessions: SessionItem[]
}