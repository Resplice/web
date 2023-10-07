<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { validateEmail } from '@resplice/utils'
	import { TextField } from '@resplice/components'
	import AttributeNameField from '$modules/attribute/components/forms/AttributeNameField.svelte'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	const dispatch = createEventDispatcher()

	export let name = ''
	export let email = ''

	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!validateEmail(email)) formErrs.email = 'Please enter a valid email address'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
	<div class="w-full flex flex-col space-y-6">
		<AttributeNameField bind:name error={formErrs.name} />
		<TextField
			name="email"
			label="Email"
			autocomplete="email"
			bind:value={email}
			error={formErrs.email}
		/>
	</div>

	<FormButtons on:save={onSave} />
</form>
