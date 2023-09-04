<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import Header from '$common/components/Header.svelte'
	import attributeStore from '$modules/attribute/attribute.store'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	import { mapAttributeValue } from '$modules/attribute/attribute.state'
	import type { Attribute } from '$modules/account/account.types'

	const protocol = useProtocol()

	export let params: { id: string }
	let editingAttribute: Attribute

	$: id = parseInt(params.id, 10)
	$: attribute = $attributeStore.get(id)
	$: attributeTypeConfig = attribute && attributeTypes[attribute.type]

	$: {
		if (attribute) {
			editingAttribute = {
				...attribute,
				value: { ...attribute.value }
			} as Attribute
		}
	}

	async function editAttribute(attribute: Attribute) {
		// TODO: These should be different forms
		await Promise.all([
			protocol.attribute.changeName({ id: attribute.id, name: attribute.name }),
			protocol.attribute.changeValue({
				id: attribute.id,
				value: mapAttributeValue(attribute.type, attribute.value)
			})
		])
		push(`/app/attribute/${id}/detail`)
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header title="Edit Attribute" />
	<main class="bg-white rounded-t-3xl flex-1 flex flex-col overflow-auto">
		{#if editingAttribute}
			<AttributeForm
				attribute={editingAttribute}
				{attributeTypeConfig}
				on:save={() => editAttribute(editingAttribute)}
			/>
		{:else}
			<div class="flex-1 flex items-center justify-center">
				<h2 class="font-semibold text-lg">Attribute not found</h2>
			</div>
		{/if}
	</main>
</div>
