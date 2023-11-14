<script lang="ts">
	import { AttributeActionIcon } from '@resplice/components'
	import { attributeTypes } from '@resplice/utils'
	import type { PendingConnectionAttribute } from '$modules/invite/invite.types'

	export let attributes: PendingConnectionAttribute[]
</script>

<div class="flex-1 flex flex-col space-y-4 w-full p-4">
	{#each attributes as attribute}
		<div class="w-full overflow-hidden flex items-center justify-between">
			<div
				class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-gray-400 text-gray-600"
			>
				<AttributeActionIcon attributeAction={attributeTypes[attribute.attributeType].actions[0]} />
			</div>
			<div
				class="flex flex-col items-start justify-start text-left mx-4 flex-1 overflow-hidden no-highlight"
			>
				<span class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6 w-full">
					{attribute.name}
				</span>
				<span class="text-sm italic text-gray-800 overflow-hidden text-ellipsis w-full">
					Connect to unlock
				</span>
			</div>
		</div>
	{/each}
</div>
