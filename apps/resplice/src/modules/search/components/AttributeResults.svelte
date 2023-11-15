<script lang="ts">
	import { push } from 'svelte-spa-router'
	import AttributeResult from '$modules/search/components/AttributeResult.svelte'
	import connectionStore from '$modules/connection/connection.store'
	import type { ConnectionAttribute } from '$modules/connection/connection.types'

	export let results: (ConnectionAttribute & { connectionId: number })[]

	function getConnection(id: number) {
		return $connectionStore.get(id)!
	}
</script>

{#each results as attribute (attribute.id)}
	<AttributeResult
		connection={getConnection(attribute.connectionId)}
		{attribute}
		on:click={() => push(`/connection/${attribute.connectionId}/details`)}
	/>
{/each}
