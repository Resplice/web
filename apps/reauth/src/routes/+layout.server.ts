import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import { configSchema, type Config } from '$lib/config'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	const configResult = configSchema.safeParse({
		environment: env.ENV,
		recaptchaToken: env.RECAPTCHA_TOKEN,
		respliceEndpoint: env.RESPLICE_ENDPOINT
	})

	if (!configResult.success) {
		throw error(500, JSON.stringify(configResult.error.format()))
	}

	return {
		config: configResult.data satisfies Config
	}
}) satisfies LayoutServerLoad
