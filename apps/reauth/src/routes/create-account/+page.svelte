<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus } from '$lib/store'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'
	import { RespliceWideIcon } from '@resplice/components'
	import CreateAccountForm from './CreateAccountForm.svelte'

	const config = useConfig()
	const protocol = useProtocol()

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.PENDING_CREATE_ACCOUNT:
					break
				case AuthStatus.PENDING_START_SESSION:
					if ($store.accessToken)
						protocol.redirectToApp(config.respliceAppUrl, {
							accessToken: $store.accessToken,
							persist: $store.persistSession
						})
					break
				default:
					goto('/')
			}
	}
</script>

<main class="w-full min-h-full max-w-lg m-auto p-8 flex flex-col overflow-auto bg-white">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg mt-4">
			{$t('auth.createAccount.header')}
		</p>
	</header>

	{#if $store.status === AuthStatus.PENDING_CREATE_ACCOUNT}
		<CreateAccountForm />
	{/if}
</main>
