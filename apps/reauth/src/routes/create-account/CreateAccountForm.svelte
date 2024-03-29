<script lang="ts">
	import { imageToDataUri } from '@resplice/utils'
	import store from '$lib/store'
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import { ErrorType, errorTypeToString } from '$lib/protocol'
	import { UserAvatar, TextField, PeopleIcon, Button, Link } from '@resplice/components'

	const protocol = useProtocol()

	let avatar: Blob | null = null
	let name = ''
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
		if (!name) errs.name = 'Your full name is required'
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}

	async function createAccount() {
		isLoading = true
		const avatarDataUri = await imageToDataUri(avatar)

		const { event, error } = await protocol.createAccount({
			phone: $store.phone,
			name,
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
			status: event.authStatus,
			accessToken: event.accessToken
		}))
	}
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-auto">
	<div>
		<UserAvatar
			uuid={Math.random().toString(36).substring(2, 5)}
			avatarUrl={avatar ? URL.createObjectURL(avatar) : null}
			on:crop={(e) => (avatar = e.detail)}
		/>
		<form class="mt-8 px-2 flex flex-col space-y-4" on:submit|preventDefault={handleSubmit}>
			<TextField
				name="full-name"
				label="Full Name"
				autocomplete="name"
				bind:value={name}
				Icon={PeopleIcon}
				error={formErrs.name}
			/>
		</form>
	</div>

	<div class="flex-none flex flex-col items-center p-2">
		<!-- <Link class="mb-4" href="/verify-account">I already have an account</Link> -->
		<Button {isLoading} on:click={() => handleSubmit()}>Continue</Button>
		{#if systemError}
			<p class="mt-4 text-red-600">{systemError}</p>
		{/if}
	</div>
</div>
