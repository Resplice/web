<script lang="ts">
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { t } from '$lib/i18n'
	import store, { AuthStep } from '$lib/store'
	import { RespliceWideIcon } from '@resplice/components'
	import VerifyForm from './VerifyForm.svelte'

	onMount(() => {
		if ($store.step === AuthStep.START) goto('/')
	})
</script>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg overflow-auto">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.verify.header')}
		</p>
	</header>

	{#if [AuthStep.VERIFY_EMAIL, AuthStep.VERIFY_PHONE].includes($store.step)}
		<VerifyForm />
	{/if}
</main>
