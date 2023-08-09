<script lang="ts">
	import store from '$lib/store'
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import { ErrorType, errorTypeToString } from '$lib/protocol'
	import { UserAvatar, TextField, PeopleIcon, Button, Link } from '@resplice/components'

	const protocol = useProtocol()

	const RAND_ID = Math.random()

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
		const avatarBytes = avatar ? new Uint8Array(await avatar.arrayBuffer()) : new Uint8Array()
		const { authInfo, error } = await protocol.createAccount({
			email: $store.email,
			phone: $store.phone,
			fullName,
			avatar: avatarBytes
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.INVALID_SESSION].includes(error.type))
				location.replace('/')
			const errorString = errorTypeToString(error.type)
			systemError = $t(`auth.errors.${errorString}`)
			isLoading = false
			return
		}

		store.update((state) => ({
			...state,
			status: authInfo.status
		}))
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
			id={RAND_ID}
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
