<script lang="ts">
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import store, { AuthStatus } from '$lib/store'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'

	const config = useConfig()
	const protocol = useProtocol()

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.PENDING_START_SESSION:
					break
				case AuthStatus.AUTHORIZED:
					protocol.redirectToApp(config.respliceAppUrl, {
						phone: $store.phone,
						persist: $store.persistSession
					})
					break
				default:
					goto('/')
			}
	}

	onMount(async () => {
		if ($store.status !== AuthStatus.PENDING_START_SESSION) return

		const ipAddress = await protocol.getIpAddress()

		const { event, error } = await protocol.startSession({
			phone: $store.phone,
			persist: $store.persistSession,
			ipAddress,
			userAgent: navigator.userAgent
		})

		if (error) {
			goto('/')
			return
		}

		store.update((state) => ({
			...state,
			status: event.authStatus
		}))
	})
</script>

<!-- TODO: Show some splash screen -->
