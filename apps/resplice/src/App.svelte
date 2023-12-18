<script lang="ts">
	import { setContext } from 'svelte'
	import { isRespliceSupported } from '@resplice/utils'
	import config from '$services/config'
	import { telemetryFactory, contextKey as telemetryContextKey } from '$services/telemetry'
	import protocolFactory, {
		contextKey as protocolContextKey,
		type RespliceProtocol
	} from '$common/protocol'
	import initializeIntl from '$common/i18n'
	import accountStore from '$modules/account/account.store'
	import { AppLoading, AppError, ToastProvider } from '@resplice/components'
	import ReloadPrompt from '$common/components/ReloadPrompt.svelte'
	import ConnectionStatus from '$modules/_context/components/ConnectionStatus.svelte'
	import Router from './Router.svelte'
	import './app.css'

	const telemetryContext = { telemetry: telemetryFactory() }
	setContext(telemetryContextKey, telemetryContext)

	const protocolContext = { protocol: {} as RespliceProtocol }
	setContext(protocolContextKey, protocolContext)

	async function loadApp(): Promise<boolean> {
		if (!isRespliceSupported()) throw new Error('Resplice is not supported on this device.')

		if (window.location.hash === '#/install') return true

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
	$: storesLoaded = window.location.hash === '#/install' ? true : !!$accountStore

	$: {
		if (!!$accountStore) {
			telemetryContext.telemetry.identify($accountStore.uuid, {
				name: $accountStore.name,
				env: config.env
			})
		}
	}
</script>

{#await loading}
	<AppLoading />
{:then loaded}
	{#if loaded && storesLoaded}
		<ConnectionStatus />
		<Router />
		<ToastProvider />
		<ReloadPrompt />
	{:else}
		<AppLoading />
	{/if}
{:catch error}
	<AppError {error} />
{/await}
