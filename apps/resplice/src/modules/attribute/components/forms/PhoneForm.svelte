<script lang="ts">
	import parsePhoneNumber, { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js'
	import { createEventDispatcher } from 'svelte'
	import { TextField, PhoneField, Toggle } from '@resplice/components'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	const dispatch = createEventDispatcher()

	export let name = ''
	export let number = ''
	export let smsEnabled = true

	let phone = { countryCode: 'US' as CountryCode, value: number }
	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!isValidPhoneNumber(phone.value, phone.countryCode))
			formErrs.phone = 'Please enter a valid phone number'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}

	$: {
		if (phone.value) {
			// Country code is not optional
			const phoneNumber = parsePhoneNumber(phone.value, phone.countryCode)
			number = phoneNumber ? phoneNumber.number : ''
		} else {
			number = ''
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1" on:submit|preventDefault>
	<div class="w-full flex flex-col space-y-6">
		<TextField name="attribute-name" label="Label" bind:value={name} error={formErrs.name} />
		<PhoneField name="phone" label="Phone" bind:phone error={formErrs.phone} />
		<Toggle name="smsEnabled" label="Allow SMS" bind:isActive={smsEnabled} />
	</div>

	<FormButtons on:save={onSave} />
</form>
