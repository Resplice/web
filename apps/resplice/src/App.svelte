<script lang="ts">
	import { setContext } from 'svelte'
	import { isRespliceSupported } from '@resplice/utils'
	import config from '$services/config'
	import initializeIntl from '$common/i18n'
	import protocolFactory, { contextKey, type RespliceProtocol } from '$common/protocol'
	import accountStore from '$modules/account/account.store'
	import { AppLoading, AppError, ToastProvider } from '@resplice/components'
	import ConnectionStatus from '$modules/_context/components/ConnectionStatus.svelte'
	import Router from './Router.svelte'
	import './app.css'

	const protocolContext = { protocol: {} as RespliceProtocol }
	setContext(contextKey, protocolContext)

	async function loadApp(): Promise<boolean> {
		if (!isRespliceSupported()) throw new Error('Resplice is not supported on this device.')

		try {
			const protocol = await protocolFactory()
			protocolContext.protocol = protocol

			const session = await protocol.session.load()

			if (!session) {
				// If session cannot be retrieved, redirect to auth flow
				location.replace(config.authUrl)
				return false
			}

			await initializeIntl()
			await protocol.ctx.loadCache()
			await protocol.ctx.openSocket(session)

			return true
		} catch (err) {
			console.error(err)
			// If error, redirect to auth flow
			location.replace(config.authUrl)
			return false
		}
	}

	const loading = loadApp()

	// Can do additional store checks here
	$: accountLoaded = !!$accountStore
</script>

{#await loading}
	<AppLoading />
{:then loaded}
	{#if loaded && accountLoaded}
		<ConnectionStatus />
		<Router />
		<ToastProvider />
	{:else}
		<AppLoading />
	{/if}
{:catch error}
	<AppError {error} />
{/await}
