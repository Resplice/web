<script lang="ts">
	import { push } from 'svelte-spa-router'
	import InviteItem from '$modules/invite/components/InviteItem.svelte'
	import type { Invite } from '$modules/invite/invite.types'

	export let invites: Invite[]
</script>

{#if invites.length}
	<!-- TODO: Virtualization -->
	<div class="w-full relative">
		<div class="p-4">
			<h2 class="text-3xl text-gray-700 font-semibold px-2 my-2 capitalize">Invites</h2>
		</div>

		{#each invites as invite}
			<InviteItem
				{invite}
				on:click={() => {
					push(`/invite/${invite.id}/details`)
				}}
			/>
		{/each}
	</div>
{/if}
