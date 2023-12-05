<script lang="ts">
	import { push } from 'svelte-spa-router'
	import PendingConnectionItem from '$modules/invite/components/PendingConnectionItem.svelte'
	import { pendingConnectionKey } from '$modules/invite/invite.state'
	import type { PendingConnection } from '$modules/invite/invite.types'

	export let pendingConnections: PendingConnection[] = []

	function pendingConnDetailUrl(conn: PendingConnection) {
		const pendingIdUrl = encodeURIComponent(pendingConnectionKey(conn))
		return `/invite/pending/${pendingIdUrl}/details`
	}
</script>

{#if pendingConnections.length}
	<div class="w-full relative">
		<div class="p-4">
			<h2 class="text-3xl text-yellow-600 font-semibold px-2 my-2 capitalize">Pending</h2>
		</div>

		{#each pendingConnections as pendingConnection}
			<PendingConnectionItem
				{pendingConnection}
				on:click={() => {
					push(pendingConnDetailUrl(pendingConnection))
				}}
			/>
		{/each}
	</div>
{/if}
