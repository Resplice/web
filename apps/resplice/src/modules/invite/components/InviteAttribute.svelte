<script lang="ts">
	import { AttributeItem, Modal } from '@resplice/components'
	import AttributeContext from '$modules/connection/components/AttributeContext.svelte'
	import { InviteType, type Invite } from '$modules/invite/invite.types'
	import { AttributeType, type Attribute } from '@resplice/utils'

	export let invite: Invite
	let inviteAttribute = inviteToAttribute(invite)
	let showContext = false

	function inviteToAttribute(invite: Invite): Attribute {
		switch (invite.type) {
			case InviteType.EMAIL:
				return {
					id: 0,
					type: AttributeType.EMAIL,
					name: 'Invited Email',
					value: { email: invite.value },
					sortOrder: 0
				}
			case InviteType.PHONE:
				return {
					id: 0,
					type: AttributeType.PHONE,
					name: 'Invited Phone',
					value: { number: invite.value, smsEnabled: true },
					sortOrder: 0
				}
		}
	}
</script>

<div class="flex-1 flex flex-col space-y-4 w-full p-4">
	<AttributeItem
		itemType="connection"
		attribute={inviteAttribute}
		on:click={() => (showContext = true)}
	/>
</div>

{#if showContext}
	<Modal
		initialY={window.innerHeight - window.innerHeight / 2}
		on:close={() => {
			showContext = false
		}}
	>
		<AttributeContext attribute={inviteAttribute} />
	</Modal>
{/if}
