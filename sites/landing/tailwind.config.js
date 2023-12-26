import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,md,mdx,svelte}',
		'../../node_modules/@resplice/components/**/*.{html,svelte}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: { primary: '#1BBC9B', 'primary-dark': '#079275' },
				gray: colors.slate,
				indigo: colors.indigo
			}
		}
	},
	plugins: []
}
