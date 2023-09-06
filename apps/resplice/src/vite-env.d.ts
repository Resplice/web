/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/svelte" />

interface ImportMetaEnv {
	readonly VITE_ENV?: 'preview' | 'production'
	readonly VITE_APP_URL?: string
	readonly VITE_AUTH_URL?: string
	readonly VITE_RESPLICE_API_ENDPOINT?: string
	readonly VITE_RESPLICE_WS_ENDPOINT?: string
	readonly VITE_TELEMETRY_ENDPOINT?: string
	readonly VITE_RECAPTCHA_TOKEN?: string
	readonly VITE_GOOGLE_OAUTH_CLIENT_ID?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
