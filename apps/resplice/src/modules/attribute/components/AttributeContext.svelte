<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { attributeTypes, capitalize, type Attribute } from '@resplice/utils'
	import { AttributeValue, AttributeActionIcon, Button } from '@resplice/components'

	export let attribute: Attribute
	export let itemType: 'contact' | 'user' | 'disabled'
	$: attributeTypeConfig = attributeTypes[attribute.type]
</script>

<div class="w-full p-4">
	<div class="flex flex-col overflow-hidden">
		<span class="font-semibold text-gray-800 overflow-hidden text-ellipsis text-lg">
			{attribute.name}
		</span>
		<AttributeValue {attribute} />
	</div>
	{#if itemType === 'user'}
		<div class="flex space-x-4 mt-4">
			{#each [{ name: 'Details', value: 'detail' }, { name: 'Edit', value: 'edit' }] as action}
				<Button
					class="justify-center"
					on:click={() => push(`/app/attribute/${attribute.id}/${action.value}`)}
				>
					{action.name}
				</Button>
			{/each}
		</div>
	{/if}
	<div class="flex flex-col space-y-4 mt-4">
		{#each attributeTypeConfig.actions as action}
			<button
				class="flex items-center transform transition duration-75 ease-in-out active:scale-95"
				on:click={() => attributeTypeConfig.handleAction(action, attribute.value)}
			>
				<div
					class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none"
				>
					<AttributeActionIcon attributeAction={action} />
				</div>
				<p class="ml-4">{capitalize(action.toLowerCase())}</p>
			</button>
		{/each}
	</div>
</div>
