<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { type AttributeTypeConfig, type Attribute } from '@resplice/utils'
	import { AttributeItem, TextField } from '@resplice/components'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'
	const dispatch = createEventDispatcher()

	export let attributeTypeConfig: AttributeTypeConfig
	export let attribute: Attribute
	let newName = attribute.name

	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!attribute.name) formErrs.name = 'A name is required'

		if (!Object.keys(formErrs).length) {
			dispatch('save', newName)
		}
	}
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
	<div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
		<h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
		<AttributeItem itemType="disabled" {attribute} />
	</div>
	<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
		<div class="w-full flex flex-col space-y-6 mb-4">
			<TextField name="attribute-name" label="Name" bind:value={newName} error={formErrs.name} />
		</div>
		<FormButtons on:save={onSave} />
	</form>
</div>
