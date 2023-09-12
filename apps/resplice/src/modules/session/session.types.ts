export type Session = {
	id: number
	email: string
	phone: string
	cryptoKeys: CryptoKeys
	persist: boolean
	initialCommandId: number
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
