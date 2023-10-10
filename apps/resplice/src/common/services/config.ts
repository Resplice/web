type ENV = 'local' | 'preview' | 'production'

export type RespliceConfig = {
	env: ENV
	appUrl: string
	authUrl: string
	respliceApiUrl: string
	respliceWsUrl: string
	telemetryUrl: string
	googleOAuthClientId: string
}

function getConfig(): RespliceConfig {
	const config = {
		env: import.meta.env.DEV ? 'local' : import.meta.env.VITE_ENV,
		appUrl: import.meta.env.VITE_APP_URL,
		authUrl: import.meta.env.VITE_AUTH_URL,
		respliceApiUrl: import.meta.env.VITE_RESPLICE_API_ENDPOINT,
		respliceWsUrl: import.meta.env.VITE_RESPLICE_WS_ENDPOINT,
		telemetryUrl: import.meta.env.VITE_TELEMETRY_ENDPOINT,
		googleOAuthClientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
	}
	if (Object.values(config).includes(undefined))
		// TODO: Test when config throws
		throw new Error('Config is not defined or is missing properties')

	return config as RespliceConfig
}

export default getConfig()
