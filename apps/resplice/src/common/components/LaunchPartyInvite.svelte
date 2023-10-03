<script lang="ts">
	import { AttributeType, type Attribute } from '@resplice/utils'
	import { PartyBannerIcon, AttributeItem, Link } from '@resplice/components'
	import Rsvp from '$common/components/Rsvp.svelte'

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
			streetAddress1: '7053 10th St N',
			streetAddress2: '',
			locality: 'Oakdale',
			region: 'MN',
			postalCode: '55128',
			country: ''
		},
		sortOrder: 0
	}
	const link: Attribute = {
		id: 3,
		type: AttributeType.LINK,
		name: 'The Burrow',
		value: {
			url: 'https://www.theburrowmn.com'
		},
		sortOrder: 0
	}
</script>

<div class="w-full min-h-full max-w-xl m-auto bg-white">
	<header class="w-full p-2 bg-[#5E6FC5] rounded-b-3xl">
		<PartyBannerIcon width="100%" />
	</header>

	<div class="w-full p-6 space-y-4">
		<h2 class="text-2xl font-semibold">Launch Party</h2>
		<AttributeItem attribute={dateTime} itemType="contact" />
		<AttributeItem attribute={location} itemType="contact" />
		<AttributeItem attribute={link} itemType="contact" />

		<p class="pt-2">
			Want to learn more about the app?
			<Link href="https://www.resplice.com">Check out Resplice.com</Link>
		</p>
	</div>

	<Rsvp />
</div>
