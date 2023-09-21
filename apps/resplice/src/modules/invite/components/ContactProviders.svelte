<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { isSupported } from '@resplice/utils'
	import { getGoogleContacts } from '$modules/invite/services/contactProviders'
	import { ButtonAlt as Button, GoogleIcon, PhonePortraitIcon } from '@resplice/components'
	const dispatch = createEventDispatcher()

	const [isContactPickerSupported] = isSupported(['contacts'])

	let isLoading = false
	async function onGoogleProviderClick() {
		isLoading = true
		const contacts = await getGoogleContacts()
		console.log(contacts)
		dispatch('import', contacts)
	}
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div class="flex flex-col my-8 space-y-4">
	{#if isContactPickerSupported}
		<Button>
			<PhonePortraitIcon width={24} height={24} />
			<p>Import from contacts</p>
		</Button>
	{/if}
	<Button {isLoading} on:click={onGoogleProviderClick}>
		<GoogleIcon width={24} height={24} />
		<p>Import from Google</p>
	</Button>

	<!-- <button
	class="w-full flex space-x-4 rounded-full border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none"
>
	<AppleIcon width={24} height={24} />
	<p>Import from Apple</p>
</button> -->
</div>
<div>
	<p class="text-sm text-gray-600">Contact provider not shown?</p>
	<p class="text-sm text-gray-600">
		Invite someone via
		<a
			class="underline underline-offset-4 decoration-brand-primary decoration-2"
			href="#/app/invite/create/phone"
		>
			phone
		</a>
		<!-- or
		<a
			class="underline underline-offset-4 decoration-brand-primary decoration-2"
			href="#/app/invite/create/email"
		>
			email
		</a> -->
	</p>
</div>
