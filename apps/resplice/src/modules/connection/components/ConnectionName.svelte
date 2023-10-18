<script lang="ts">
	import type { Connection } from '$modules/connection/connection.types'

	export let connection: Pick<Connection, 'alias' | 'name'>
</script>

{#if connection.alias}
	<div class="flex flex-col items-center">
		<h2 class="w-full overflow-auto truncate text-4xl font-bold text-center">{connection.alias}</h2>
		<p class="w-full overflow-auto truncate font-semibold text-xl text-gray-600">
			{connection.name}
		</p>
	</div>
{:else}
	<h2 class="w-full overflow-auto truncate text-4xl font-bold text-center">
		{connection.name}
	</h2>
{/if}
