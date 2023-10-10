<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import Header from '$common/components/Header.svelte'
	import attributeStore from '$modules/attribute/attribute.store'
	import { mapAttributeValue } from '$modules/attribute/attribute.state'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	import type { Attribute } from '$modules/account/account.types'
	import { Modal, Button } from '@resplice/components'

	const protocol = useProtocol()

	export let params: { id: string }
	let showAttributeContext = false

	$: id = parseInt(params.id, 10)
	$: attribute = $attributeStore.get(id)
	$: attributeTypeConfig = attribute ? attributeTypes[attribute.type] : null

	function changeAttribute(attribute: Attribute) {
		protocol.attribute.change(
			{
				id,
				name: attribute.name,
				value: mapAttributeValue(attribute.type, attribute.value)
			},
			attribute
		)
		pop()
	}

	function deleteAttribute() {
		protocol.attribute.remove({ id })
		pop()
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header title="Change Attribute" showContext on:context={() => (showAttributeContext = true)} />
	<main class="bg-white rounded-t-3xl flex-1 w-full max-w-xl m-auto flex flex-col overflow-auto">
		{#if attribute && attributeTypeConfig}
			<AttributeForm
				{attribute}
				{attributeTypeConfig}
				on:save={(event) => changeAttribute(event.detail)}
			/>
		{/if}
	</main>
</div>

{#if showAttributeContext}
	<Modal on:close={() => (showAttributeContext = false)}>
		<div class="w-full space-y-4 p-8">
			<Button class="w-full" color="danger-light" on:click={deleteAttribute}>
				Delete Attribute
			</Button>
		</div>
	</Modal>
{/if}
