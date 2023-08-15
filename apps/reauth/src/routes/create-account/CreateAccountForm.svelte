<script lang="ts">
	import store from '$lib/store'
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import { ErrorType, errorTypeToString } from '$lib/protocol'
	import { UserAvatar, TextField, PeopleIcon, Button, Link } from '@resplice/components'

	const protocol = useProtocol()

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

	async function createAccount() {
		isLoading = true
		const avatarDataUri = await avatarImageToDataUri(avatar)
		console.log(avatarDataUri)

		const { event, error } = await protocol.createAccount({
			email: $store.email,
			phone: $store.phone,
			fullName,
			avatar: avatarDataUri
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.UNAUTHORIZED].includes(error.type))
				location.replace('/')
			const errorString = errorTypeToString(error.type)
			systemError = $t(`auth.errors.${errorString}`)
			isLoading = false
			return
		}

		store.update((state) => ({
			...state,
			status: event.status
		}))
	}

	function avatarImageToDataUri(image: Blob | null): Promise<string> {
		return new Promise<string>((resolve) => {
			if (!image) return resolve('')
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result as string)
			reader.readAsDataURL(image)
		})
	}
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-auto">
	<div>
		<UserAvatar
			id={Math.random()}
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
