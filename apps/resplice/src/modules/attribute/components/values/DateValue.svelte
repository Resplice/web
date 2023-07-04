<script lang="ts">
	import { AttributeType, attributeTypes } from '@resplice/utils'
	import type { DateValue } from '$modules/attribute/attribute.types'

	export let value: DateValue

	const dateType = attributeTypes[AttributeType.DATE]

	$: formattedDate = dateType.valueToString(value)
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		{formattedDate}
	</span>
</div>
