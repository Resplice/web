import { z } from 'zod'

export const configSchema = z.object({
	environment: z.enum(['local', 'development', 'production']),
	recaptchaToken: z.string()
})
export type Config = z.infer<typeof configSchema>
