<script lang="ts">
	import { AttributeItem, Modal } from '@resplice/components'
	import AttributeContext from '$modules/connection/components/AttributeContext.svelte'
	import type { ConnectionAttribute } from '$modules/connection/connection.types'

	export let attributes: ConnectionAttribute[]
	let selectedAttribute: ConnectionAttribute | null = null
</script>

<div class="flex-1 flex flex-col space-y-4 w-full p-4">
	{#each attributes as attribute}
		<AttributeItem
			itemType="connection"
			{attribute}
			on:click={() => (selectedAttribute = attribute)}
		/>
	{/each}
</div>

{#if selectedAttribute}
	<Modal
		initialY={window.innerHeight - window.innerHeight / 2}
		on:close={() => {
			selectedAttribute = null
		}}
	>
		<AttributeContext attribute={selectedAttribute} />
	</Modal>
{/if}
