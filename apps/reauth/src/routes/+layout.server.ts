import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import { configSchema, type Config } from '$lib/config'

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const configResult = configSchema.safeParse({
		environment: env.PUBLIC_ENV,
		recaptchaSiteKey: env.PUBLIC_RECAPTCHA_SITE_KEY,
		respliceEndpoint: env.PUBLIC_RESPLICE_ENDPOINT,
		respliceAppUrl: env.PUBLIC_RESPLICE_APP_URL
	})

	if (!configResult.success) {
		throw error(500, JSON.stringify(configResult.error.format()))
	}

	return {
		config: configResult.data satisfies Config
	}
}
