<script lang="ts">
	import { setContext } from 'svelte'
	import { isRespliceSupported } from '@resplice/utils'
	import config from '$services/config'
	import initializeIntl from '$common/i18n'
	import protocolFactory, { contextKey } from '$common/protocol'
	import accountStore from '$modules/account/account.store'
	import { AppLoading, AppError } from '@resplice/components'
	import Router from './Router.svelte'
	import './app.css'

	let initialUrl = '/profile'

	const protocolContext = { protocol: null }
	setContext(contextKey, protocolContext)

	async function loadApp(): Promise<boolean> {
		if (!isRespliceSupported()) throw new Error('Resplice is not supported on this device.')

		try {
			const urlData = getUrlData()
			const protocol = await protocolFactory()

			const session = await protocol.session.load()

			if (!session) {
				// If session cannot be retrieved, redirect to auth flow
				location.replace(config.authUrl)
				return false
			}

			protocolContext.protocol = protocol
			await initializeIntl()
			if (urlData.googleOAuthAccessToken)
				initialUrl = `/app/invite/bulk?access-token=${urlData.googleOAuthAccessToken}`

			return true
		} catch (err) {
			console.error(err)
			location.replace(config.authUrl)
			return false
		}
	}

	function getUrlData() {
		const params = new URLSearchParams(window.location.search)
		return {
			googleOAuthAccessToken: params.get('google-access-token')
		} as {
			googleOAuthAccessToken?: string
		}
	}

	const loading = loadApp()

	// Can do additional store checks here
	$: accountLoaded = !!accountStore
</script>

{#await loading}
	<AppLoading />
{:then isValidSession}
	{#if isValidSession && accountLoaded}
		<Router {initialUrl} />
		<!-- <ToastProvider /> -->
	{/if}
{:catch error}
	<AppError {error} />
{/await}
