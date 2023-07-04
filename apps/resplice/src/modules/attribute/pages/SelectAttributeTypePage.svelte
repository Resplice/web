<script lang="ts">
	import { push, pop } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import IconButton from '@resplice/components/package/IconButton.svelte'
	import BackIcon from '@resplice/components/package/icons/BackIcon.svelte'
	import TypeItem from '$modules/attribute/components/TypeItem.svelte'

	$: typeConfigs = Object.entries(attributeTypes)
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 overflow-auto">
		<div class="w-full p-4">
			<h2 class="text-xl font-semibold mb-4">Select an Attribute Type</h2>
			<div class="flex flex-col space-y-4">
				{#each typeConfigs as [type, config]}
					<TypeItem
						attributeTypeConfig={config}
						on:click={() => push(`/app/attribute/create/${type.toLowerCase()}`)}
					/>
				{/each}
			</div>
		</div>
	</main>
</div>
