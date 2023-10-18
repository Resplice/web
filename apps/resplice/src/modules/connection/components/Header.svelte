<script lang="ts">
	import { fade } from 'svelte/transition'
	import { pop, push } from 'svelte-spa-router'
	import { Avatar, BackIcon, IconButton } from '@resplice/components'
	import type { Connection } from '$modules/connection/connection.types'

	export let connection: Connection
	export let showContact = false
	export let backPath = ''
	// let showContextMenu = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<div class="flex items-center">
		<IconButton Icon={BackIcon} on:click={() => (backPath ? push(backPath) : pop())} />
		{#if showContact}
			<div class="flex items-center ml-4" transition:fade={{ delay: 50, duration: 150 }}>
				<Avatar seed={`${connection.id}`} src={connection.avatarUrl} size="sm" />
				<h2 class="ml-2 font-semibold text-xl">{connection.name}</h2>
			</div>
		{/if}
	</div>
	<!-- <IconButton Icon={EllipsisHorizontalIcon} on:click={() => (showContextMenu = true)} /> -->
	<!-- {#if showContextMenu && !!connection}
		<ContextMenu contactId={contact.id} on:close={() => (showContextMenu = false)} />
	{/if} -->
</nav>
