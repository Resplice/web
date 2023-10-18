<script lang="ts">
	// import { createVirtualizer } from '@tanstack/svelte-virtual'
	import { push } from 'svelte-spa-router'
	import { AddIcon, Button, ConnectionEmptyIcon, CameraIcon } from '@resplice/components'
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
	{:else}
		<div class="w-full h-full flex flex-col justify-center items-center">
			<div class="rounded-full overflow-hidden w-48">
				<ConnectionEmptyIcon width={192} height={144} />
			</div>
			<h3 class="px-8 text-lg font-semibold text-center mt-8">Add some connections</h3>
			<p class="text-center px-8 py-2">
				You can invite others to Resplice even if they don't have an account!
			</p>
			<div class="w-full flex flex-col justify-center items-center mt-8 space-y-4">
				<Button
					color="brand-light"
					class="flex items-center justify-center w-56"
					on:click={() => push('/invite/bulk')}
				>
					<AddIcon width={24} height={24} />
					<span class="ml-2">Invite Contacts</span>
				</Button>
				<Button
					color="brand-light"
					class="flex items-center justify-center w-56"
					on:click={() => push('/invite/qr/scan')}
				>
					<CameraIcon width={24} height={24} />
					<span class="ml-2">Scan a QR Code</span>
				</Button>
			</div>
		</div>
	{/if}
</div>
