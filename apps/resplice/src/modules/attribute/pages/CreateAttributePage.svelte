<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes, type Attribute, AttributeType } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import { IconButton, BackIcon } from '@resplice/components'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	import { mapAttributeValue } from '$modules/attribute/attribute.state'

	const protocol = useProtocol()

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
			name: attribute.name,
			value: mapAttributeValue(attribute.type, attribute.value)
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
