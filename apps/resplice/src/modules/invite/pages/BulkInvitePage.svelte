<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { IconButton, BackIcon } from '@resplice/components'
	import Page from '$common/layouts/Page.svelte'
	import ContactProviders from '$modules/invite/components/ContactProviders.svelte'
	import BulkImportList from '$modules/invite/components/BulkImportList.svelte'
	import type { ProviderContact } from '$modules/invite/services/contactProviders'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'

	let contacts: ProviderContact[] = [
		{
			id: 'people/c7342918239664096439',
			name: 'Marcus Virginia',
			avatar:
				'https://lh3.googleusercontent.com/a-/ALV-UjVejmcHFe0LxIZpWDvTmcHNoDBoFEJUTTJm1hPnTh340bM=s100',
			attributes: [
				{
					type: 'phone',
					name: 'Phone 1',
					value: '+12185910657'
				},
				{
					type: 'email',
					name: 'Email 1',
					value: 'marcusvirg345@gmail.com'
				}
			]
		}
	]
	let selectedAttributes = new Set<number>()

	function onImport(e: CustomEvent<ProviderContact[]>) {
		contacts = e.detail
	}
</script>

<Page>
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => push('/home/connections')} />
	</nav>
	{#if !!contacts}
		<main class="bg-white rounded-t-3xl rounded-b-3xl flex-1 flex flex-col p-8 overflow-auto">
			<h1 class="text-2xl font-semibold mb-4">Import Contacts</h1>
			<p class="mb-4">Select an attribute from each contact to invite or ignore them:</p>
			<BulkImportList {contacts} attributeIds={selectedAttributes} />
		</main>
		<footer class="bg-white rounded-t-3xl mt-4 px-8 py-4">
			<AttributeShareContext bind:selected={selectedAttributes} initializeDefault />
		</footer>
	{:else}
		<main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
			<h1 class="text-2xl font-semibold mb-4">Import Contacts</h1>
			<p>Choose where you would like to import contacts from:</p>
			<ContactProviders on:import={onImport} />
		</main>
	{/if}
</Page>
