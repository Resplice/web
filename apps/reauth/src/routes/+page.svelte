<script lang="ts">
	import { t } from '$lib/i18n'
	import { RespliceWideIcon } from '@resplice/components'
	import LoginForm from './LoginForm.svelte'
</script>

<main class="w-full h-full p-8 flex flex-col m-auto max-w-lg">
	<header class="flex-none w-full mb-8">
		<RespliceWideIcon width="100%" />
		<p class="text-lg font-semibold mt-4">
			{$t('auth.welcome')}
		</p>
	</header>

	<LoginForm />
</main>
