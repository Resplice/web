<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import searchStores from '$modules/search/search.store'
	import SearchService from '$modules/search/search.service'
	import connectionStore from '$modules/connection/connection.store'
	import inviteStores from '$modules/invite/invite.store'
	import { SearchField, Spinner, IconButton, BackIcon } from '@resplice/components'
	import AttributeResults from '$modules/search/components/AttributeResults.svelte'
	import ConnectionResults from '$modules/search/components/ConnectionResults.svelte'
	import type { RespliceDocuments } from '$modules/search/search.types'
	import Page from '$common/layouts/Page.svelte'

	const query = searchStores.query
	const inviteStore = inviteStores.invites

	let searchService: SearchService | null = null
	let buildingIndex: Promise<void> = Promise.resolve()
	let searching: Promise<RespliceDocuments | null> = Promise.resolve(null)

	$: {
		if (searchService && $query) {
			searching = Promise.resolve(searchService.query($query))
		}
		if (!$query) {
			searching = Promise.resolve(null)
		}
	}

	onMount(() => {
		const connections = Array.from($connectionStore.values())
		searchService = new SearchService({
			attributes: connections.flatMap((connection) =>
				connection.attributes.map((attr) => ({ ...attr, connectionId: connection.id }))
			),
			connections: connections.map(({ attributes: _, ...connection }) => connection),
			invites: Array.from($inviteStore.values())
		})
	})
</script>

<Page>
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto rounded-t-3xl bg-white">
		<div class="flex items-center pl-2">
			<IconButton Icon={BackIcon} on:click={() => push('/home/connections')} />
			<SearchField name="search" label="Search" bind:query={$query} />
		</div>

		<div class="flex-1 overflow-auto pt-8 pb-4 px-4">
			{#await buildingIndex}
				<Spinner />
			{:then}
				{#await searching}
					<Spinner />
				{:then results}
					{#if results}
						<AttributeResults results={results.attributes} />
						<ConnectionResults results={results.connections} />
						<!-- <InviteResults results={results.invites} /> -->
					{/if}
				{/await}
			{/await}
		</div>
	</main>
</Page>
