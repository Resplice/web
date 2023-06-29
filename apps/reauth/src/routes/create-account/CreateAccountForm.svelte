<script lang="ts">
	import store, { AuthStep, type AuthStore } from '$lib/store'
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import { UserAvatar, TextField, PeopleIcon, Button, Link } from '@resplice/components'

	const protocol = useProtocol()

	const RAND_ID = Math.random().toString(36)

	let avatar: Blob | null = null
	let fullName = ''
	let formErrs: Record<string, string> = {}
	let systemError: string
	let isLoading = false

	async function handleSubmit() {
		const isValid = validate()
		if (!isValid) return

		return createAccount()
	}

	async function createAccount() {
		isLoading = true
		const { event, errors } = await protocol.createAccount({
			email: ($store as AuthStore).email,
			phone: ($store as AuthStore).phone,
			fullName,
			accessKey: ($store as AuthStore).accessKey
		})

		if (errors) {
			systemError = $t(`auth.errors.${errors[0]}`)
			isLoading = false
			return
		}

		store.set({
			step: AuthStep.FINISHED,
			accessKey: event.accessKey
		})
	}

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!fullName) errs.fullName = 'Full name is required'
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-auto">
	<div>
		<UserAvatar
			uuid={RAND_ID}
			avatarUrl={avatar ? URL.createObjectURL(avatar) : null}
			on:crop={(e) => (avatar = e.detail)}
		/>
		<form class="mt-8 px-2 flex flex-col space-y-4" on:submit|preventDefault={handleSubmit}>
			<TextField
				name="full-name"
				label="Full Name"
				autocomplete="name"
				bind:value={fullName}
				Icon={PeopleIcon}
				error={formErrs.fullName}
			/>
		</form>
	</div>

	<div class="flex-none flex flex-col items-center p-2">
		<Link class="mb-4" href="/verify-account">I already have an account</Link>
		<Button {isLoading} on:click={() => handleSubmit()}>Continue</Button>
		{#if systemError}
			<p class="mt-4 text-red-600">{systemError}</p>
		{/if}
	</div>
</div>
