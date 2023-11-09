<script lang="ts">
	// import { createVirtualizer } from '@tanstack/svelte-virtual'
	import { push } from 'svelte-spa-router'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type { Connection } from '$modules/connection/connection.types'

	export let connections: Connection[] = []
	let virtualListEl: HTMLDivElement

	// $: virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
	// 	count: connections.length,
	// 	getScrollElement: () => virtualListEl,
	// 	estimateSize: () => 64,
	// 	overscan: 10
	// })
</script>

<!-- TODO: Implement Alphabet slider -->
{#if connections.length}
	<div bind:this={virtualListEl} class="w-full relative">
		<div class="p-4">
			<h2 class="text-3xl text-gray-700 font-semibold px-2 my-2 capitalize">Connections</h2>
		</div>

		{#each connections as connection}
			<ConnectionItem
				{connection}
				on:click={() => {
					push(`/connection/${connection.id}/details`)
				}}
			/>
		{/each}
	</div>
{/if}
