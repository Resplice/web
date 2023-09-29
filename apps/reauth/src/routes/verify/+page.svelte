<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus } from '$lib/store'
	import { RespliceWideIcon } from '@resplice/components'
	import VerifyForm from './VerifyForm.svelte'

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.PENDING_VERIFY_PHONE:
					break
				case AuthStatus.PENDING_CREATE_ACCOUNT:
					goto('/create-account')
					break
				case AuthStatus.PENDING_START_SESSION:
					goto('/start-session')
					break
				default:
					goto('/')
			}
	}
</script>

<main class="w-full min-h-full max-w-lg m-auto p-8 flex flex-col overflow-auto bg-white">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.verify.header')}
		</p>
	</header>

	{#if [AuthStatus.PENDING_VERIFY_PHONE].includes($store.status)}
		<VerifyForm />
	{/if}
</main>
