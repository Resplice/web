<script lang="ts">
	import { push } from 'svelte-spa-router'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type { Connection } from '$modules/connection/connection.types'

	export let results: Omit<Connection, 'attributes'>[] = []
</script>

{#each results as connection (connection.id)}
	<ConnectionItem {connection} on:click={() => push(`/connection/${connection.id}/details`)} />
{/each}
