type ENV = 'local' | 'development' | 'production'

export type RespliceConfig = {
	env: ENV
	appUrl: string
	authUrl: string
	respliceApiUrl: string
	respliceWsUrl: string
	telemetryUrl: string
	recaptchaToken: string
	googleOAuthClientId: string
}

function getConfig(): RespliceConfig {
	const config: RespliceConfig = {
		env: import.meta.env.DEV ? 'local' : 'production',
		appUrl: import.meta.env.VITE_APP_URL,
		authUrl: import.meta.env.VITE_AUTH_URL,
		respliceApiUrl: import.meta.env.VITE_RESPLICE_API_ENDPOINT,
		respliceWsUrl: import.meta.env.VITE_RESPLICE_WS_ENDPOINT,
		telemetryUrl: import.meta.env.VITE_TELEMETRY_ENDPOINT,
		recaptchaToken: import.meta.env.VITE_RECAPTCHA_TOKEN,
		googleOAuthClientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
	}
	if (Object.values(config).includes(undefined))
		// TODO: Test when config throws
		throw new Error('Config is not defined or is missing properties')
	return config
}

export default getConfig()
