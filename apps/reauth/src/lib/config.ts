import { z } from 'zod'

export const configSchema = z.object({
	environment: z.enum(['local', 'development', 'production']),
	recaptchaSiteKey: z.string(),
	respliceEndpoint: z.string(),
	respliceAppUrl: z.string()
})
export type Config = z.infer<typeof configSchema>

export const contextKey = 'config'
