import { getContext } from 'svelte'
import PostHog from 'posthog-js-lite'
import config from '$services/config'

export type Telemetry = {
	__posthog: PostHog
	capture: (eventName: string, properties?: Record<string, any>) => void
	identify: (userId: string, properties?: Record<string, any>) => void
	reset: () => void
}

const mockTelemetry: Telemetry = {
	__posthog: {} as PostHog,
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

	const posthog = new PostHog(config.productTelemetryApiKey, {
		persistence: 'localStorage',
		autocapture: true
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
