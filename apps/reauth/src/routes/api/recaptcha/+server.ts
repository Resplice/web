import { error, json } from '@sveltejs/kit'
import { z } from 'zod'
import { env } from '$env/dynamic/private'
import { configSchema } from '../config'
import type { RequestHandler } from './$types'

const requestSchema = z.object({ token: z.string() })
const responseSchema = z.object({ success: z.boolean(), score: z.number(), action: z.string() })

function getConfig() {
	const configResult = configSchema.safeParse({
		environment: env.ENV,
		recaptchaToken: env.RECAPTCHA_TOKEN,
		respliceEndpoint: env.RESPLICE_ENDPOINT
	})

	if (!configResult.success) {
		throw error(500, JSON.stringify(configResult.error.format()))
	}

	return configResult.data
}

export const POST = (async ({ request }) => {
	const config = getConfig()

	const requestResult = requestSchema.safeParse(await request.json())

	if (!requestResult.success) {
		throw error(400, JSON.stringify(requestResult.error.format()))
	}

	const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		body: JSON.stringify({
			secret: config.recaptchaToken,
			response: requestResult.data.token
		})
	})

	const responseResult = responseSchema.safeParse(await response.json())

	if (!responseResult.success) {
		throw error(500, JSON.stringify(responseResult.error.format()))
	}

	console.log("botResult", responseResult.data)

	const isBot = responseResult.data.score < 0.5

	return json(isBot)
}) satisfies RequestHandler
