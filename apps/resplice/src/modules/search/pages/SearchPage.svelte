<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import searchStores from '$modules/search/search.store'
	import SearchService from '$modules/search/search.service'
	import connectionStore from '$modules/connection/connection.store'
	import inviteStore from '$modules/invite/invite.store'
	import { SearchField, Spinner, IconButton, BackIcon } from '@resplice/components'
	import AttributeResults from '$modules/search/components/AttributeResults.svelte'
	import ConnectionResults from '$modules/search/components/ConnectionResults.svelte'
	import type { RespliceDocuments } from '$modules/search/search.types'

	const query = searchStores.query

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
			attributes: connections.flatMap((connection) => connection.attributes),
			connections: connections.map(({ attributes: _, ...connection }) => connection),
			invites: Array.from($inviteStore.values())
		})
	})
</script>

<main class="w-full h-full flex flex-col">
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
