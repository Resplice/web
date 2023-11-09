<script lang="ts">
	import { formatDistance } from 'date-fns'
	import { respliceDateTimeToDateTime } from '@resplice/utils'
	import { Avatar } from '@resplice/components'
	import type { PendingConnection } from '$modules/invite/invite.types'

	export let pendingConnection: PendingConnection

	$: expiryDistance = formatDistance(
		new Date(),
		respliceDateTimeToDateTime(pendingConnection.expiresAt)
	)
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<Avatar seed={`${pendingConnection.id}`} src={pendingConnection.avatarUrl} />
	<div class="flex flex-col">
		<h4 class="font-semibold text-gray-900 text-left">{pendingConnection.name}</h4>
		<p class="text-yellow-600">Expires in {expiryDistance}</p>
	</div>
</button>
