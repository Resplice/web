<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus } from '$lib/store'
	import { RespliceWideIcon } from '@resplice/components'
	import VerifyForm from './VerifyForm.svelte'

	const currentStatus = [AuthStatus.VERIFY_EMAIL, AuthStatus.VERIFY_PHONE]

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.UNRECOGNIZED:
					goto('/')
					break
				case AuthStatus.CREATE_ACCOUNT:
					goto('/create-account')
					break
				case AuthStatus.CREATE_SESSION:
					goto('/create-session')
					break
			}
	}
</script>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg overflow-auto">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.verify.header')}
		</p>
	</header>

	{#if currentStatus.includes($store.status)}
		<VerifyForm />
	{/if}
</main>
