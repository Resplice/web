<script lang="ts">
	import { push } from 'svelte-spa-router'
	import PendingConnectionItem from '$modules/invite/components/PendingConnectionItem.svelte'
	import type { PendingConnection } from '$modules/invite/invite.types'

	export let pendingConnections: PendingConnection[] = []
</script>

{#if pendingConnections.length}
	<div class="w-full relative">
		<div class="p-4">
			<h2 class="text-3xl text-gray-700 font-semibold px-2 my-2 capitalize">Pending</h2>
		</div>

		{#each pendingConnections as pendingConnection}
			<PendingConnectionItem
				{pendingConnection}
				on:click={() => {
					push(`/invite/pending/${pendingConnection.connectionId}/details`)
				}}
			/>
		{/each}
	</div>
{/if}
