<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus, INITIAL_STORE } from '$lib/store'
	import { RespliceWideIcon } from '@resplice/components'
	import LoginForm from './LoginForm.svelte'

	onMount(() => store.set(INITIAL_STORE))

	$: {
		if (browser && $store.status === AuthStatus.PENDING_VERIFY_PHONE) goto('/verify')
	}
</script>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg overflow-auto">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.welcome')}
		</p>
	</header>

	<LoginForm />
</main>
