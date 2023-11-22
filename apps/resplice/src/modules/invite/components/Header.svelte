<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { BackIcon, Button, EllipsisHorizontalIcon, IconButton, Modal } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import type { Invite } from '$modules/invite/invite.types'

	const protocol = useProtocol()

	export let invite: Invite
	let showContextMenu = false

	function deleteInvite() {
		protocol.invite.delete({ inviteId: invite.id })
		pop()
	}
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<IconButton Icon={BackIcon} on:click={() => pop()} />
	<IconButton Icon={EllipsisHorizontalIcon} on:click={() => (showContextMenu = true)} />
</nav>

{#if showContextMenu && !!invite}
	<Modal on:close={() => (showContextMenu = false)}>
		<div class="w-full space-y-4 p-8">
			<Button class="w-full" color="danger-light" on:click={deleteInvite}>Delete Invite</Button>
		</div>
	</Modal>
{/if}
