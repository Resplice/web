<script lang="ts">
	import { setContext } from 'svelte'
	import { isRespliceSupported } from '@resplice/utils'
	import config from '$services/config'
	import initializeIntl from '$common/i18n'
	import respliceProtocolFactory, { contextKey } from '$common/protocol'
	import { AppLoading, AppError } from '@resplice/components'
	// import Router from './Router.svelte'
	import './app.css'

	let initialUrl = '/'

	async function loadApp(): Promise<void> {
		if (!isRespliceSupported()) throw new Error('Resplice is not supported on this device.')

		try {
			const urlData = getUrlData()
			const respliceProtocol = await respliceProtocolFactory()

			const session = await respliceProtocol.session.initialize(urlData.respliceAccessToken)

			if (!session) {
				// If session cannot be stored or started, redirect to auth flow
				location.href = config.authUrl
				return
			}

			setContext(contextKey, respliceProtocol)
			await initializeIntl()
			if (urlData.googleOAuthAccessToken)
				initialUrl = `/app/invite/bulk?access-token=${urlData.googleOAuthAccessToken}`
		} catch (err) {
			console.error(err)
			location.href = config.authUrl
		}
	}

	function getUrlData() {
		console.log(window.location.hash)
		const params = new URLSearchParams(window.location.hash.substring(1))
		return {
			googleOAuthAccessToken: params.get('google-access-token'),
			respliceAccessToken: params.get('access-key')
		} as {
			googleOAuthAccessToken?: string
			respliceAccessToken?: string
		}
	}

	const isLoading = loadApp()
</script>

{#await isLoading}
	<AppLoading />
{:then}
	<!-- <ToastProvider /> -->
	<p>Loaded</p>
	<!-- <Router {initialUrl} /> -->
{:catch error}
	<AppError {error} />
{/await}
