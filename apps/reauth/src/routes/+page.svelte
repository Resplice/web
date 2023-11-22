<script lang="ts">
	import { onMount } from 'svelte'
	import { t } from '$lib/i18n'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import store, { AuthStatus, INITIAL_STORE } from '$lib/store'
	import { RespliceWideIcon } from '@resplice/components'
	import LoginForm from './LoginForm.svelte'

	onMount(() => store.set(INITIAL_STORE))

	$: {
		if (browser && $store.status === AuthStatus.PENDING_VERIFY_PHONE) goto('/verify')
	}
</script>

<main class="w-full min-h-full max-w-lg m-auto flex flex-col overlow-auto bg-white">
	<div class="flex-none">
		<header class="w-full p-4 bg-[#5E6FC5] rounded-b-3xl">
			<RespliceWideIcon width="100%" />
		</header>

		<p class="text-lg mt-4 px-8 py-4">
			{$t('auth.welcome')}
		</p>
	</div>

	<div class="w-full flex-1 px-8 py-4 flex">
		<LoginForm />
	</div>
</main>
