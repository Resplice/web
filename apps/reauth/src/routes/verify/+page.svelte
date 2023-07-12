<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStatus } from '$lib/store'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'
	import { RespliceWideIcon } from '@resplice/components'
	import VerifyForm from './VerifyForm.svelte'

	const config = useConfig()
	const protocol = useProtocol()
	const currentStatus = [
		AuthStatus.PENDING_EMAIL_VERIFICATION,
		AuthStatus.PENDING_PHONE_VERIFICATION
	]

	$: {
		if (browser)
			switch ($store.status) {
				case AuthStatus.UNRECOGNIZED:
					goto('/')
					break
				case AuthStatus.PENDING_ACCOUNT_CREATION:
					goto('/create-account')
					break
				case AuthStatus.PENDING_SESSION:
					protocol.redirectToApp(config.respliceAppUrl, {
						email: $store.email,
						phone: $store.phone,
						accessToken: $store.accessToken
					})
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
