import { getContext } from 'svelte'
import posthog from 'posthog-js'
import config from '$services/config'

export type Telemetry = {
	__posthog: typeof posthog
	capture: (eventName: string, properties?: Record<string, any>) => void
	identify: (userId: string, properties?: Record<string, any>) => void
	reset: () => void
}

const mockTelemetry: Telemetry = {
	__posthog: {} as typeof posthog,
	capture(eventName, properties) {
		console.info(`Mock Telemetry: capture ${eventName}`, properties)
	},
	identify(userId, properties) {
		console.info(`Mock Telemetry: identify ${userId}`, properties)
	},
	reset() {
		console.info('Mock Telemetry: reset')
	}
}

export function telemetryFactory(): Telemetry {
	// if (config.env === 'local') return mockTelemetry

	posthog.init(config.productTelemetryApiKey, {
		persistence: 'localStorage',
		autocapture: true,
		cross_subdomain_cookie: false
	})

	return {
		__posthog: posthog,
		capture(eventName, properties) {
			posthog.capture(eventName, properties)
		},
		identify(userId, properties) {
			posthog.identify(userId, properties)
		},
		reset() {
			posthog.reset()
		}
	}
}

export const contextKey = 'resplice-telemetry'

function useTelemetry() {
	const context = getContext<{ telemetry: Telemetry }>(contextKey)
	if (!context || !context.telemetry) throw Error('Resplice Telemetry has not yet been initialized')
	return context.telemetry
}

export default useTelemetry
