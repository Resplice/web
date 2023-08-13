<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus } from '$lib/store'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'
	import { RespliceWideIcon } from '@resplice/components'
	import CreateAccountForm from './CreateAccountForm.svelte'

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.UNRECOGNIZED:
					goto('/')
					break
				case AuthStatus.CREATE_SESSION:
					goto('/start-session')
					break
			}
	}
</script>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg overflow-auto">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.createAccount.header')}
		</p>
	</header>

	{#if $store.status === AuthStatus.CREATE_ACCOUNT}
		<CreateAccountForm />
	{/if}
</main>
