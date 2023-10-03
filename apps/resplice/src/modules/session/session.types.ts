export type Session = {
	id: number
	cryptoKeys: CryptoKeys
	persisted: boolean
	userAgent: string
	ipAddress: string
}

export type CryptoKeys = {
	client: CryptoKey
	server: CryptoKey
	accessKey: Uint8Array
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
