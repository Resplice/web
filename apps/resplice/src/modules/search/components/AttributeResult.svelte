<script lang="ts">
	import { Avatar, AttributeValue } from '@resplice/components'
	import type { Connection, ConnectionAttribute } from '$modules/connection/connection.types'

	export let connection: Connection
	export let attribute: ConnectionAttribute
</script>

<button class="flex items-center space-x-2 w-full px-4 py-2" on:click>
	<Avatar seed={connection.id} src={connection.avatarUrl} />
	<div class="flex flex-col">
		{#if !!connection.alias}
			<h4 class="font-bold text-gray-900">{connection.alias}</h4>
			<p class="text-gray-700">{connection.name}</p>
		{:else}
			<h4 class="font-bold text-gray-900">{connection.name}</h4>
		{/if}
		<div class="mt-1">
			<AttributeValue {attribute} />
		</div>
	</div>
</button>
