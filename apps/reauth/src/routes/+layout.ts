import { loadTranslations, locale } from '$lib/i18n'
import type { LayoutLoad } from './$types'

export const load = (async () => {
	const defaultLocale = 'en' // get from cookie, user session, ...
	const initLocale = locale.get() || defaultLocale // set default if no locale already set
	await loadTranslations(initLocale) // keep this just before the `return`

	return {}
}) satisfies LayoutLoad
