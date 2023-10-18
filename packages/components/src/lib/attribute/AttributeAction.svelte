<script lang="ts">
	import cx from 'clsx'
	import ActionIcon from '$lib/attribute/AttributeActionIcon.svelte'
	import { attributeTypes, getSocialNetworkFromUrl } from '@resplice/utils'
	import { type Attribute, AttributeType } from '@resplice/utils'

	export let itemType: 'connection' | 'user' | 'disabled'
	export let disableAction = false
	export let actionIdx: number
	export let attribute: Attribute

	const attributeAction = attributeTypes[attribute.type].actions[actionIdx]

	function onActionClick() {
		if (disableAction) return
		if (itemType === 'disabled') return

		attributeTypes[attribute.type].handleAction(attributeAction, attribute.value)
	}
</script>

<button
	type="button"
	class={cx('outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none', {
		'bg-brand-primary text-brand-primary': itemType === 'connection',
		'bg-indigo-400 text-indigo-600': itemType === 'user',
		'bg-gray-400 text-gray-600': itemType === 'disabled',
		'transform transition duration-75 ease-in-out active:scale-90': !disableAction
	})}
	on:click={onActionClick}
>
	{#if attribute.type === AttributeType.SOCIAL && attribute.value?.url}
		<ActionIcon
			{attributeAction}
			iconProps={{ network: getSocialNetworkFromUrl(attribute.value.url) }}
		/>
	{:else}
		<ActionIcon {attributeAction} />
	{/if}
</button>
