<script lang="ts">
	import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js'
	import { createEventDispatcher } from 'svelte'
	import TextField from '@resplice/components/package/form/TextField.svelte'
	import PhoneField from '@resplice/components/package/form/PhoneField.svelte'
	import Toggle from '@resplice/components/package/form/Toggle.svelte'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	import type { CountryCode } from 'libphonenumber-js'

	const dispatch = createEventDispatcher()

	export let name = ''
	export let number: number | undefined
	export let extension: number | undefined
	export let smsEnabled = true

	let phone = { countryCode: 'US' as CountryCode, value: number ? number.toString() : '' }
	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!isValidPhoneNumber(`+${number}`)) formErrs.phone = 'Please enter a valid phone number'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}

	$: {
		if (phone.value) {
			// Country code is not optional
			const ph = parsePhoneNumber(phone.value, phone.countryCode as CountryCode)
			if (ph) {
				number = parseInt(ph.number, 10)
				extension = ph.ext ? parseInt(ph.ext, 10) : undefined
			}
		} else {
			number = undefined
			extension = undefined
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
	<div class="w-full flex flex-col space-y-6">
		<TextField name="attribute-name" label="Name" bind:value={name} error={formErrs.name} />
		<PhoneField name="phone" label="Phone" bind:phone error={formErrs.phone} />
		<Toggle
			name="smsEnabled"
			label="Allow SMS"
			bind:isActive={smsEnabled}
			on:toggle={() => (smsEnabled = !smsEnabled)}
		/>
	</div>

	<FormButtons on:save={onSave} />
</form>
