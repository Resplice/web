<script lang="ts">
	import { validateEmail } from '@resplice/utils'
	import { Button, TextField, MailIcon, PeopleIcon, toast } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'

	const protocol = useProtocol()

	let name = ''
	let email = ''
	let formErrs: Record<string, string> = {}

	async function onInvite(_e: Event) {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!name) errs.name = 'Please enter your full name'
		if (!validateEmail(email)) errs.email = 'Please enter a valid email address'
		if (Object.keys(errs).length) {
			formErrs = errs
			return
		}

		try {
			await protocol.invite.create({ name, value: { $case: 'email', email } })
			toast.new({
				type: toast.type.SUCCESS,
				title: 'Invite Sent',
				message: `Your invite has been sent to ${email}`
			})

			name = ''
			email = ''
			formErrs = {}
		} catch (err) {
			console.error(err)
			toast.new({
				type: toast.type.DANGER,
				title: 'Invite Failed',
				message: `Your invite failed to send to ${email}`
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
		<TextField
			name="email"
			label="Enter Email"
			bind:value={email}
			Icon={MailIcon}
			error={formErrs.email}
		/>
	</div>

	<Button class="w-48" type="submit">Send</Button>
</form>
