<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import useRespliceProtocol from '$common/hooks/useRespliceProtocol'
	import Header from '$common/components/Header.svelte'
	import attributeStore from '$modules/attribute/attribute.store'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	import type { Attribute } from '$modules/user/user.types'

	const protocol = useRespliceProtocol()

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
		await Promise.all([
			protocol.attribute.editName(attribute.id, attribute.name),
			protocol.attribute.editValue(attribute.id, attribute.value)
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
