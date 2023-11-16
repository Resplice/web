<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { attributeTypes } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import attributeStore from '$modules/attribute/attribute.store'
	import { mapAttributeValue } from '$modules/attribute/attribute.state'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$common/components/Header.svelte'
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
				attributeId: id,
				name: attribute.name,
				value: mapAttributeValue(attribute.type, attribute.value)
			},
			attribute
		)
		pop()
	}

	function deleteAttribute() {
		protocol.attribute.remove({ attributeId: id })
		pop()
	}
</script>

<Page>
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
</Page>

{#if showAttributeContext}
	<Modal on:close={() => (showAttributeContext = false)}>
		<div class="w-full space-y-4 p-8">
			<Button class="w-full" color="danger-light" on:click={deleteAttribute}>
				Delete Attribute
			</Button>
		</div>
	</Modal>
{/if}
