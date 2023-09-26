<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import store, { AuthStatus, INITIAL_STORE } from '$lib/store'
	import { AttributeItem, PartyBannerIcon } from '@resplice/components'
	import LoginForm from './LoginForm.svelte'
	import { AttributeType, type Attribute } from '@resplice/utils'

	onMount(() => store.set(INITIAL_STORE))

	const dateTime: Attribute = {
		id: 1,
		type: AttributeType.DATE_TIME,
		name: 'Date & Time',
		value: {
			year: 2023,
			month: 11,
			day: 16,
			hour: 15,
			minute: 0,
			timezone: 'America/Chicago'
		},
		sortOrder: 0
	}
	const location: Attribute = {
		id: 2,
		type: AttributeType.ADDRESS,
		name: 'Location',
		value: {
			streetAddress1: 'Venue TBD',
			streetAddress2: '',
			locality: 'Minneapolis',
			region: 'MN',
			postalCode: '',
			country: 'USA'
		},
		sortOrder: 0
	}

	$: {
		if (browser && $store.status === AuthStatus.PENDING_VERIFY_PHONE) goto('/verify')
	}
</script>

<main class="w-full h-full flex flex-col">
	<header class="flex-none w-full h-56 mb-2 bg-[#5E6FC5] rounded-b-3xl">
		<PartyBannerIcon width="100%" />
	</header>

	<div class="flex-none w-full px-8 space-y-4">
		<h2 class="text-2xl font-semibold mt-4">Resplice Launch Party Invite</h2>
		<AttributeItem attribute={dateTime} itemType="user" disableActions />
		<AttributeItem attribute={location} itemType="user" disableActions />
	</div>

	<div class="flex-1 m-auto p-8 max-w-lg flex flex-col overflow-auto">
		<p class="font-semibold mb-4">Please enter your phone number to RSVP:</p>
		<LoginForm />
	</div>
</main>
