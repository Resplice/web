<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { TextField } from '@resplice/components'
	import AttributeNameField from '$modules/attribute/components/forms/AttributeNameField.svelte'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	const dispatch = createEventDispatcher()

	export let name = ''
	export let latitude = 0
	export let longitude = 0

	let strLat = ''
	let strLng = ''

	$: {
		latitude = Number(strLat)
	}

	$: {
		longitude = Number(strLng)
	}

	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!latitude) formErrs.latitude = 'Please enter a valid latitude value'
		if (!longitude) formErrs.longitude = 'Please enter a valid longitude value'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
	<div class="w-full flex flex-col space-y-6">
		<AttributeNameField bind:name error={formErrs.name} />
		<TextField name="latitude" label="Latitude" bind:value={strLat} error={formErrs.text} />
		<TextField name="longitude" label="Longitude" bind:value={strLng} error={formErrs.longitude} />
	</div>

	<FormButtons on:save={onSave} />
</form>
