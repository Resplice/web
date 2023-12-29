<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { isSupported } from '@resplice/utils'
	import { getGoogleContacts, getNativeContacts } from '$modules/invite/services/contactProviders'
	import { ButtonAlt as Button, GoogleIcon, PhonePortraitIcon, toast } from '@resplice/components'

	const dispatch = createEventDispatcher()
	const isContactPickerSupported = isSupported('contacts')

	let isNativeLoading = false
	let isGoogleLoading = false

	async function onContactPickerClick() {
		try {
			isNativeLoading = true
			const contacts = await getNativeContacts()
			console.log(contacts)
			dispatch('import', contacts)
			isNativeLoading = false
		} catch (e) {
			isNativeLoading = false
			toast.new({
				type: toast.type.WARNING,
				title: 'Import Error',
				message: 'Could not import contacts from your device. Please try again.'
			})
			console.error(e)
		}
	}

	async function onGoogleProviderClick() {
		try {
			isGoogleLoading = true
			const contacts = await getGoogleContacts()
			dispatch('import', contacts)
			isGoogleLoading = false
		} catch (e) {
			isGoogleLoading = false
			toast.new({
				type: toast.type.WARNING,
				title: 'Import Error',
				message: 'Could not import contacts from Google. Please try again.'
			})
			console.error(e)
		}
	}
	// async function onGoogleProviderClick() {
	// 	toast.new({
	// 		type: toast.type.SUCCESS,
	// 		title: 'Coming Soon',
	// 		message:
	// 			'We are currently working on this feature but it will be coming soon! Please check back later.'
	// 	})
	// }
</script>

<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div class="flex flex-col my-8 space-y-4">
	{#if isContactPickerSupported}
		<Button isLoading={isNativeLoading} on:click={onContactPickerClick}>
			<PhonePortraitIcon width={24} height={24} />
			<p>Import from contacts</p>
		</Button>
	{/if}
	<Button isLoading={isGoogleLoading} on:click={onGoogleProviderClick}>
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
			href="#/invite/create/phone"
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
	<br />
	<p class="text-sm text-gray-600">
		On iOS? Follow
		<a
			class="underline underline-offset-4 decoration-brand-primary decoration-2"
			href="https://marcusv.me/blog/native-contact-picker-safari/"
		>
			these instructions
		</a>
		to import native contacts in Safari.
	</p>
</div>
