<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes, type Attribute, AttributeType } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	// import attributeStore from '$modules/attribute/attribute.store'
	import {
		mapAttributeValue
		// verifiableAttributeType,
		// applyAttributeEvent
	} from '$modules/attribute/attribute.state'
	import { IconButton, BackIcon } from '@resplice/components'
	import AttributeForm from '$modules/attribute/components/forms/AttributeForm.svelte'
	// import VerifyAttributeForm from '$modules/attribute/components/forms/VerifyAttributeForm.svelte'

	const protocol = useProtocol()

	export let params: { type: string }
	const attributeType = params.type.toUpperCase() as AttributeType
	const attributeTypeConfig = attributeTypes[attributeType]

	let placeholderAttribute: Attribute = {
		id: 0,
		type: attributeType,
		name: '',
		value: {} as any,
		sortOrder: 0
	}
	// let showAttributeVerification = false
	// let attributeToVerify: Attribute | null = null
	// let isLoading = false
	// let verifyError = ''

	function saveAttribute(attribute: Attribute) {
		protocol.attribute.add({
			name: attribute.name,
			value: mapAttributeValue(attribute.type, attribute.value)
		})
		pop()
		// if (verifiableAttributeType(attribute.type)) {
		// 	showAttributeVerification = true
		// } else {
		// 	pop()
		// }
	}

	// async function verifyAttribute(attribute: Attribute, verifyCode: number) {
	// 	isLoading = true
	// 	const { event, error } = await protocol.attribute.verify({
	// 		id: attribute.id,
	// 		verifyCode,
	// 		value: mapAttributeValue(attribute.type, attribute.value)
	// 	})
	// 	if (error) {
	// 		isLoading = false
	// 		verifyError = 'Invalid Code. Please double check and try again.'
	// 	} else if (event) {
	// 		attributeStore.update((state) => applyAttributeEvent(state, event))
	// 		pop()
	// 	}
	// }
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 w-full max-w-xl m-auto overflow-auto">
		<AttributeForm
			attribute={placeholderAttribute}
			{attributeTypeConfig}
			on:save={(e) => saveAttribute(e.detail)}
		/>
		<!-- {#if showAttributeVerification && attributeToVerify}
			<VerifyAttributeForm
				attribute={attributeToVerify}
				{attributeTypeConfig}
				{isLoading}
				error={verifyError}
				on:code={(e) => verifyAttribute(attributeToVerify, e.detail)}
			/>
		{:else if showAttributeVerification}
			<div class="w-full h-full flex justify-center items-center">
				<Spinner />
			</div>
		{:else}
			<AttributeForm
				attribute={placeholderAttribute}
				{attributeTypeConfig}
				on:save={(e) => saveAttribute(e.detail)}
			/>
		{/if} -->
	</main>
</div>
