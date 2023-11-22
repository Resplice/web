<script lang="ts">
	import { Avatar } from '@resplice/components'
	import type { ConnectionSummary } from '$modules/connection/connection.types'

	export let connection: ConnectionSummary
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<div class="flex-none w-max">
		<Avatar seed={`${connection.id}`} src={connection.avatarUrl} />
	</div>
	<div class="flex-1 flex flex-col overflow-hidden">
		{#if !!connection.alias}
			<h4 class="w-full font-semibold text-gray-900 text-left truncate">{connection.alias}</h4>
			<p class="w-full text-gray-700">{connection.name}</p>
		{:else}
			<h4 class="w-full font-bold text-gray-900 text-left truncate">{connection.name}</h4>
		{/if}
	</div>
</button>
