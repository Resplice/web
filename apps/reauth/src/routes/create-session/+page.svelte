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
				case AuthStatus.UNRECOGNIZED:
					goto('/')
					break
				case AuthStatus.SESSION_AUTHORIZED:
					protocol.redirectToApp(config.respliceAppUrl, {
						email: $store.email,
						phone: $store.phone
					})
					break
			}
	}

	onMount(async () => {
		const { authInfo, error } = await protocol.createSession({
			email: $store.email,
			phone: $store.phone
		})

		if (error) {
			goto('/')
			return
		}

		store.update((state) => ({
			...state,
			status: authInfo.status
		}))
	})
</script>
