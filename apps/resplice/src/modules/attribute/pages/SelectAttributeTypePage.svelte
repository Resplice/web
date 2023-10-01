<script lang="ts">
	import { replace, pop } from 'svelte-spa-router'
	import { AttributeType, attributeTypes } from '@resplice/utils'
	import { IconButton, BackIcon } from '@resplice/components'
	import TypeItem from '$modules/attribute/components/TypeItem.svelte'

	// Filter types to only supported types for now
	$: typeConfigs = Object.entries(attributeTypes).filter(([type, config]) => {
		return [
			AttributeType.ADDRESS,
			AttributeType.CREDENTIAL,
			AttributeType.EMAIL,
			AttributeType.PHONE,
			AttributeType.SOCIAL
		].includes(type as AttributeType)
	})
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 w-full max-w-xl m-auto overflow-auto">
		<div class="w-full p-4">
			<h2 class="text-xl font-semibold mb-4">Select an Attribute Type</h2>
			<div class="flex flex-col space-y-4">
				{#each typeConfigs as [type, config]}
					<TypeItem
						attributeTypeConfig={config}
						on:click={() => replace(`/attribute/add/${type.toLowerCase()}`)}
					/>
				{/each}
			</div>
		</div>
	</main>
</div>
