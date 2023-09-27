<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes, type AttributeValue } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import Header from '$common/components/Header.svelte'
	import attributeStore from '$modules/attribute/attribute.store'
	import AttributeValueForm from '$modules/attribute/components/forms/AttributeValueForm.svelte'
	import { mapAttributeValue } from '$modules/attribute/attribute.state'
	import AttributeNameForm from '$modules/attribute/components/forms/AttributeNameForm.svelte'

	const protocol = useProtocol()

	export let params: { id: string; ctx: 'name' | 'value' }

	$: id = parseInt(params.id, 10)
	$: attribute = $attributeStore.get(id)
	$: attributeTypeConfig = attributeTypes[attribute.type]

	function changeName(name: string) {
		protocol.attribute.changeName({ id, name })
		pop()
	}

	function changeValue(value: AttributeValue) {
		protocol.attribute.changeValue({ id, value: mapAttributeValue(attribute.type, value) })
		pop()
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header title="Change Attribute" />
	<main class="bg-white rounded-t-3xl flex-1 w-full max-w-xl m-auto flex flex-col overflow-auto">
		{#if params.ctx === 'name'}
			<AttributeNameForm
				{attributeTypeConfig}
				{attribute}
				on:save={(event) => changeName(event.detail)}
			/>
		{:else}
			<AttributeValueForm
				{attribute}
				{attributeTypeConfig}
				on:save={(event) => changeValue(event.detail)}
			/>
		{/if}
	</main>
</div>
