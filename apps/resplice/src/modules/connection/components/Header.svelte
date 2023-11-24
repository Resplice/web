<script lang="ts">
	import { fade } from 'svelte/transition'
	import { pop, push, replace } from 'svelte-spa-router'
	import {
		Avatar,
		BackIcon,
		Button,
		EllipsisHorizontalIcon,
		IconButton,
		Modal
	} from '@resplice/components'
	import type { Connection } from '$modules/connection/connection.types'
	import useProtocol from '$common/protocol/useProtocol'

	const protocol = useProtocol()

	export let connection: Pick<Connection, 'id' | 'name' | 'avatarUrl'>
	export let showConnection = false
	export let showSettings = true
	export let backPath = ''
	let showContextMenu = false

	function removeConnection() {
		protocol.connection.remove({ connectionId: connection.id })
		replace('/home/connections')
	}
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<div class="flex items-center">
		<IconButton Icon={BackIcon} on:click={() => (backPath ? push(backPath) : pop())} />
		{#if showConnection}
			<div class="flex items-center ml-4" transition:fade={{ delay: 50, duration: 150 }}>
				<Avatar seed={`${connection.id}`} src={connection.avatarUrl} size="sm" />
				<h2 class="ml-2 font-semibold text-xl">{connection.name}</h2>
			</div>
		{/if}
	</div>
	{#if showSettings}
		<IconButton Icon={EllipsisHorizontalIcon} on:click={() => (showContextMenu = true)} />
	{/if}
</nav>

{#if showContextMenu && !!connection}
	<Modal on:close={() => (showContextMenu = false)}>
		<div class="w-full space-y-4 p-8">
			<Button class="w-full" color="danger-light" on:click={removeConnection}>
				Remove Connection
			</Button>
		</div>
	</Modal>
{/if}
