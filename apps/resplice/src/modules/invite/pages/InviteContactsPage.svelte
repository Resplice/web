<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { IconButton, BackIcon } from '@resplice/components'
	import Page from '$common/layouts/Page.svelte'
	import ContactProviders from '$modules/invite/components/ContactProviders.svelte'
	import BulkImportList from '$modules/invite/components/BulkImportList.svelte'
	import type { ProviderContact } from '$modules/invite/services/contactProviders'

	let contacts: ProviderContact[] = []

	function onImport(e: CustomEvent<ProviderContact[]>) {
		contacts = e.detail
	}
</script>

<Page>
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
	</nav>
	{#if !!contacts.length}
		<main class="bg-white rounded-t-3xl rounded-b-3xl flex-1 flex flex-col p-8 overflow-auto">
			<h1 class="text-2xl font-semibold mb-4">Import Contacts</h1>
			<p class="mb-4">Select an attribute from each contact to invite or ignore them:</p>
			<BulkImportList {contacts} />
		</main>
	{:else}
		<main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
			<h1 class="text-2xl font-semibold mb-4">Import Contacts</h1>
			<p>Choose where you would like to import contacts from:</p>
			<ContactProviders on:import={onImport} />
		</main>
	{/if}
</Page>
