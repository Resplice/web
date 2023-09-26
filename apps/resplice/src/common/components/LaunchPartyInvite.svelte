<script lang="ts">
	import { AttributeType, type Attribute } from '@resplice/utils'
	import { PartyBannerIcon, AttributeItem } from '@resplice/components'

	const dateTimeAttribute: Attribute = {
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
	const locationAttribute: Attribute = {
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
</script>

<header class="flex-none w-full h-56 mb-2 bg-[#5E6FC5] rounded-b-3xl">
	<PartyBannerIcon width="100%" />
</header>

<div class="flex-none w-full px-8 space-y-4">
	<h2 class="text-2xl font-semibold mt-4">Resplice Launch Party Invite</h2>
	<AttributeItem attribute={dateTimeAttribute} itemType="contact" />
	<AttributeItem attribute={locationAttribute} itemType="disabled" disableActions />
</div>
