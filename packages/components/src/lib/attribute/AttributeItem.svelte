<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { attributeTypes, type Attribute } from '@resplice/utils'
	import AttributeAction from '$lib/attribute/AttributeAction.svelte'
	import AttributeValue from '$lib/attribute/AttributeValue.svelte'

	export let attribute: Attribute
	export let itemType: 'connection' | 'user' | 'disabled'
	export let showSecondAction = true
	export let disableActions = false

	const dispatch = createEventDispatcher()

	const attributeType = attributeTypes[attribute.type]

	$: showValue = !!Object.values(attribute.value).length

	function onAttributeClick(e: MouseEvent | KeyboardEvent) {
		if (itemType === 'disabled' || disableActions) return
		if ((e.target as HTMLElement).localName && (e.target as HTMLElement).localName === 'a') return

		dispatch('click', e)
	}
</script>

<div class="w-full flex items-center justify-between">
	<AttributeAction {itemType} {attribute} actionIdx={0} disableAction={disableActions} />
	<button
		class="flex flex-col items-start justify-start text-left mx-4 flex-1 no-highlight"
		on:click={onAttributeClick}
		on:keypress={onAttributeClick}
	>
		<span class="font-semibold text-gray-800 truncate h-6 w-full">
			{attribute.name}
		</span>
		{#if showValue}
			<div class="w-full"><AttributeValue {attribute} /></div>
		{/if}
	</button>
	{#if itemType !== 'user' && showSecondAction && !!attributeType.actions[1]}
		<AttributeAction {itemType} {attribute} actionIdx={1} disableAction={disableActions} />
	{/if}
</div>
