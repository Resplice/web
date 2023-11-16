<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { AttributeType, type Attribute } from '@resplice/utils'
	import { PartyBannerIcon, AttributeItem, BackIcon, IconButton } from '@resplice/components'

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
		name: 'The Burrow',
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
		name: 'Learn more about the party',
		value: {
			url: 'https://faq.resplice.com'
		},
		sortOrder: 0
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<div class="w-full flex-1 max-w-xl m-auto bg-white">
		<header class="w-full p-2 bg-[#5E6FC5] rounded-b-3xl">
			<PartyBannerIcon width="100%" />
		</header>

		<div class="flex items-center justify-start p-4">
			<IconButton Icon={BackIcon} on:click={() => pop()} />
			<p class="ml-4 font-semibold text-lg">Back To App</p>
		</div>

		<div class="w-full p-6 pt-2 space-y-4">
			<h2 class="text-2xl font-semibold">Launch Party</h2>
			<AttributeItem attribute={dateTime} itemType="connection" showSecondAction={false} />
			<AttributeItem attribute={location} itemType="connection" showSecondAction={false} />
			<AttributeItem attribute={link} itemType="connection" showSecondAction={false} />
		</div>

		<div class="w-full p-6 pt-2 space-y-4">
			<p>Thank you for signing up!</p>
			<br />
			<ul class="list-disc list-inside">
				<li>Your Resplice account is your ticket.</li>
				<li>One account is needed for each adult.</li>
				<li>Kids are welcome!</li>
			</ul>
			<br />
			<p>
				We are excited for you to be part of our journey to becoming the best sharing platform on
				the internet!
			</p>
		</div>
	</div>
</div>
