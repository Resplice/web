<script lang="ts">
	import {
		attributeTypes,
		AttributeType,
		type DateTimeValue,
		formatDateTime,
		getLocalTimezone
	} from '@resplice/utils'

	export let value: DateTimeValue

	// Can potentially localize this format per country, will use US format for now
	$: dateTime = new Date(attributeTypes[AttributeType.DATE_TIME].valueToString(value))
	$: timezone = value.timezone || getLocalTimezone()
	$: formattedDate = formatDateTime(dateTime, timezone, "MMM do',' yyyy")
	$: formattedTime = formatDateTime(dateTime, timezone, "hh':'mm a z")
</script>

<div class="flex flex-col">
	<p class="w-full truncate h-6">{formattedDate}</p>
	<p class="w-full truncate h-6">{formattedTime}</p>
</div>
