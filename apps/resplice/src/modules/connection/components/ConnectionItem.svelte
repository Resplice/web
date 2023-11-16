<script lang="ts">
	import { Avatar } from '@resplice/components'
	import type { ConnectionSummary } from '$modules/connection/connection.types'

	export let connection: ConnectionSummary
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<Avatar seed={`${connection.id}`} src={connection.avatarUrl} />
	<div class="flex flex-col">
		{#if !!connection.alias}
			<h4 class="font-semibold text-gray-900 text-left">{connection.alias}</h4>
			<p class="text-gray-700">{connection.name}</p>
		{:else}
			<h4 class="font-bold text-gray-900 text-left">{connection.name}</h4>
		{/if}
	</div>
</button>
