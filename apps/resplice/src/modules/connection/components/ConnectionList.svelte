<script lang="ts">
	// import { createVirtualizer } from '@tanstack/svelte-virtual'
	import { push } from 'svelte-spa-router'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type { Connection } from '$modules/connection/connection.types'

	export let connections: Connection[]
	let virtualListEl: HTMLDivElement

	// $: virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
	// 	count: connections.length,
	// 	getScrollElement: () => virtualListEl,
	// 	estimateSize: () => 64,
	// 	overscan: 10
	// })
</script>

<!-- TODO: Implement Alphabet slider -->
<div class="flex-1 overflow-auto">
	{#if connections.length}
		<!-- <div
			bind:this={virtualListEl}
			class="w-full relative"
			style="height: {$virtualizer.getTotalSize()}"
		>
			{#each $virtualizer.getVirtualItems() as row}
				<div
					class="absolute top-0 left-0 w-full"
					style="height: {row.size}px; transform: translateY({row.start}px)"
				>
					<ConnectionItem
						connection={connections[row.index]}
						on:click={() => {
							push(`/connection/${connections[row.index].id}/attributes`)
						}}
					/>
				</div>
			{/each}
		</div> -->
		<!-- TODO: Virtualization -->
		<div bind:this={virtualListEl} class="w-full relative">
			{#each connections as connection}
				<div class="absolute top-0 left-0 w-full">
					<ConnectionItem
						{connection}
						on:click={() => {
							push(`/connection/${connection.id}/attributes`)
						}}
					/>
				</div>
			{/each}
		</div>
	{:else}
		<p class="p-8">You have no connections :(</p>
	{/if}
</div>
