<script lang="ts">
	import AttributeResult from '$modules/search/components/AttributeResult.svelte'
	import connectionStore from '$modules/connection/connection.store'
	import type { ConnectionAttribute } from '$modules/connection/connection.types'

	export let results: ConnectionAttribute[]

	function getConnection(id: number) {
		return $connectionStore.get(id)!
	}
</script>

{#each results as attribute (attribute.id)}
	<AttributeResult connection={getConnection(attribute.connectionId)} {attribute} />
{/each}
