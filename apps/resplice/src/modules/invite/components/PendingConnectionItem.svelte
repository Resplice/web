<script lang="ts">
	import { Avatar } from '@resplice/components'
	import type { PendingConnection } from '$modules/invite/invite.types'

	export let pendingConnection: PendingConnection
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<Avatar seed={`${pendingConnection.connectionId}`} src={pendingConnection.avatarUrl} />
	<div class="flex flex-col">
		<h4 class="font-semibold text-slate-900 text-left">{pendingConnection.name}</h4>
		<p class="text-slate-600">Invited via {pendingConnection.inviteValue}</p>
	</div>
</button>
