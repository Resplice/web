<script lang="ts">
	import { Avatar } from '@resplice/components'
	import { InviteType, type Invite } from '$modules/invite/invite.types'

	export let invite: Invite

	function renderValue(invite: Invite) {
		switch (invite.type) {
			case InviteType.EMAIL:
				return invite.value
			case InviteType.PHONE:
				return invite.value
			default:
				return ''
		}
	}
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<Avatar seed={`${invite.id}`} src={null} />
	<div class="flex flex-col">
		<h4 class="text-left font-bold text-gray-900">{invite.name}</h4>
		<p class="text-gray-700">{renderValue(invite)}</p>
	</div>
</button>
