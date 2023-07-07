import { type PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: '.',
	use: {
		baseURL: process.env.RESPLICE_APP_URL || 'http://localhost:5173'
	},
	projects: [
		{
			name: 'iPhone XR',
			use: {
				...devices['iPhone XR']
			}
		},
		{
			name: 'iPhone 13',
			use: {
				...devices['iPhone 13']
			}
		},
		{
			name: 'Pixel 5',
			use: {
				...devices['Pixel 5'],
				ignoreHTTPSErrors: true,
				video: 'off',
				colorScheme: 'dark',
				headless: false,
				launchOptions: {
					slowMo: 500
				}
			}
		}
	]
}

export default config
