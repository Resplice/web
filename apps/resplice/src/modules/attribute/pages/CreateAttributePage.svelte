<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import useRespliceProtocol from '$common/hooks/useRespliceProtocol'
	import IconButton from '@resplice/components/package/IconButton.svelte'
	import BackIcon from '@resplice/components/package/icons/BackIcon.svelte'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	import type { Attribute, AttributeType } from '$modules/attribute/attribute.types'

	const protocol = useRespliceProtocol()

	export let params: { type: string }
	const attributeType = params.type.toUpperCase() as AttributeType
	const attributeTypeConfig = attributeTypes[attributeType]

	let newAttribute: Attribute = {
		id: 0,
		type: attributeType,
		name: '',
		value: {} as any,
		sortOrder: 0
	}

	async function saveAttribute(attribute: Attribute) {
		await protocol.attribute.add({
			type: attribute.type,
			name: attribute.name,
			value: attribute.value
		})
		pop()
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 overflow-auto">
		<AttributeForm
			attribute={newAttribute}
			{attributeTypeConfig}
			on:save={(e) => saveAttribute(e.detail)}
		/>
	</main>
</div>
