<script lang="ts">
	import { AttributeItem } from '@resplice/components'
	import { AttributeType, type Attribute } from '@resplice/utils'
	import type { Moment } from '$modules/moment/moment.types'

	export let moment: Moment

	const dateTimeAttribute: Attribute = {
		id: 0,
		type: AttributeType.DATE_TIME,
		name: 'Date & Time',
		value: {
			year: moment.startDatetime.getFullYear(),
			month: moment.startDatetime.getMonth(),
			day: moment.startDatetime.getDate(),
			hour: moment.startDatetime.getHours(),
			minute: moment.startDatetime.getMinutes(),
			timezone: moment.timezone
		},
		sortOrder: 0
	}
	const locationAttribute: Attribute = {
		id: 0,
		type: AttributeType.ADDRESS,
		name: 'Location',
		value: moment.location,
		sortOrder: 0
	}
</script>

<div class="space-y-4">
	<AttributeItem itemType="user" attribute={dateTimeAttribute} />
	<AttributeItem itemType="user" attribute={locationAttribute} />
</div>
