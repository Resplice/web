<script lang="ts">
	import { pop, replace } from 'svelte-spa-router'
	import { BackIcon, Button, EllipsisHorizontalIcon, IconButton, Modal } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import type { PendingConnection } from '$modules/invite/invite.types'

	const protocol = useProtocol()

	export let pendingConnection: PendingConnection
	let showContextMenu = false

	function removePendingConnection() {
		protocol.invite.declineInvite({
			connectionId: pendingConnection.connectionId,
			inviteId: pendingConnection.inviteId
		})
		replace('/home/connections')
	}
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<IconButton Icon={BackIcon} on:click={() => pop()} />
	<IconButton Icon={EllipsisHorizontalIcon} on:click={() => (showContextMenu = true)} />
</nav>

{#if showContextMenu && !!pendingConnection}
	<Modal on:close={() => (showContextMenu = false)}>
		<div class="w-full space-y-4 p-8">
			<Button class="w-full" color="danger-light" on:click={removePendingConnection}>
				Decline Invite
			</Button>
		</div>
	</Modal>
{/if}
