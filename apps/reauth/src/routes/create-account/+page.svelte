<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStep } from '$lib/store'
	import useConfig from '$lib/hooks/useConfig'
	import { RespliceWideIcon } from '@resplice/components'
	import CreateAccountForm from './CreateAccountForm.svelte'

	const config = useConfig()

	$: {
		if (browser)
			switch ($store.step) {
				case AuthStep.START:
					goto('/')
					break
				case AuthStep.FINISHED:
					location.replace(config.respliceAppUrl)
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

	<CreateAccountForm />
</main>
