import i18n, { type Config } from 'sveltekit-i18n'

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'auth',
			loader: async () => (await import('./locales/en.json')).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
