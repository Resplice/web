<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { isValidPhoneNumber, parsePhoneNumber, type CountryCode } from 'libphonenumber-js'
	import { Button, TextField, PhoneField, PeopleIcon, toast } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'

	const protocol = useProtocol()

	let name = ''
	let phone = {
		value: '',
		countryCode: 'US' as CountryCode
	}
	let formErrs: Record<string, string> = {}
	let isLoading = false

	async function onInvite(_e: Event) {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!name) errs.name = 'Please enter your full name'
		if (!isValidPhoneNumber(phone.value, phone.countryCode))
			errs.phone = 'Please enter a valid phone number'
		if (Object.keys(errs).length) {
			formErrs = errs
			return
		}

		const { number } = parsePhoneNumber(phone.value, phone.countryCode)
		try {
			isLoading = true
			await protocol.invite.create({ name, value: { $case: 'phone', phone: number } })
			toast.new({
				type: toast.type.SUCCESS,
				title: 'Invite Sent',
				message: `Your invite has been sent to ${number}`
			})

			pop()
			// name = ''
			// phone = {
			// 	value: '',
			// 	countryCode: 'US' as CountryCode
			// }
			// formErrs = {}
		} catch (err) {
			isLoading = false
			console.error(err)
			toast.new({
				type: toast.type.DANGER,
				title: 'Invite Failed',
				message: `Your invite failed to send to ${number}`
			})
		}
	}
</script>

<form
	class="flex-1 flex flex-col justify-between items-center space-y-8"
	on:submit|preventDefault={onInvite}
>
	<div class="flex flex-col space-y-4 w-full">
		<TextField
			name="name"
			label="Full Name"
			bind:value={name}
			Icon={PeopleIcon}
			error={formErrs.name}
		/>
		<PhoneField name="phone" label="Enter Phone" bind:phone error={formErrs.phone} />
	</div>

	<Button class="w-48" type="submit" {isLoading}>Send</Button>
</form>
