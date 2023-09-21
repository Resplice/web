<script lang="ts">
	import { AttributeAction } from '@resplice/components'
	import type { AttributeTypeConfig } from '@resplice/utils'

	export let attributeTypeConfig: AttributeTypeConfig

	const emptyAttributeValue = {
		type: attributeTypeConfig.type
	} as any
</script>

<button
	class="flex items-center w-full overflow-auto space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg"
	on:click
>
	<AttributeAction
		itemType="disabled"
		attribute={emptyAttributeValue}
		actionIdx={0}
		disableAction
	/>
	<span class="font-semibold text-gray-800 overflow-hidden text-ellipsis">
		{attributeTypeConfig.name}
	</span>
</button>
