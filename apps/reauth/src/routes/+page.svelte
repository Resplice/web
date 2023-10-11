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
		name: 'Open House (6 hrs)',
		value: {
			year: 2023,
			month: 11,
			day: 16,
			hour: 16,
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
			streetAddress1: 'Somewhere fun! (RSVP for details)',
			streetAddress2: '',
			locality: 'Oakdale',
			region: 'MN',
			postalCode: '',
			country: ''
		},
		sortOrder: 0
	}
	const link: Attribute = {
		id: 3,
		type: AttributeType.LINK,
		name: 'Learn more about Resplice',
		value: {
			url: 'https://www.resplice.com'
		},
		sortOrder: 0
	}

	$: {
		if (browser && $store.status === AuthStatus.PENDING_VERIFY_PHONE) goto('/verify')
	}
</script>

<main class="w-full min-h-full max-w-lg m-auto overlow-auto bg-white">
	<header class="w-full p-2 bg-[#5E6FC5] rounded-b-3xl">
		<PartyBannerIcon width="100%" />
	</header>

	<div class="w-full p-6 space-y-4">
		<h2 class="text-2xl font-semibold">Launch Party</h2>
		<AttributeItem attribute={dateTime} itemType="user" disableActions />
		<AttributeItem attribute={location} itemType="user" />
		<AttributeItem attribute={link} itemType="user" />
	</div>

	<div class="w-full px-8 py-4 flex flex-col">
		<p class="font-semibold mb-4">RSVP</p>
		<LoginForm />
	</div>
</main>
