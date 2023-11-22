<script lang="ts">
	import { attributeTypes, capitalize } from '@resplice/utils'
	import { AttributeItem, AttributeActionIcon } from '@resplice/components'
	import type { ConnectionAttribute } from '$modules/connection/connection.types'

	export let attribute: ConnectionAttribute
	$: attributeTypeConfig = attributeTypes[attribute.type]
</script>

<div class="w-full p-4">
	<div class="space-y-4">
		<AttributeItem {attribute} itemType="connection" disableActions />
	</div>

	<div class="flex flex-col space-y-4 mt-4">
		<h4 class="text-2xl font-semibold">Actions</h4>
		{#each attributeTypeConfig.actions as action}
			<button
				class="flex items-center transform transition duration-75 ease-in-out active:scale-95"
				on:click={() => attributeTypeConfig.handleAction(action, attribute.value)}
			>
				<div
					class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none"
				>
					<AttributeActionIcon attributeAction={action} />
				</div>
				<p class="ml-4">{capitalize(action.toLowerCase())}</p>
			</button>
		{/each}
	</div>
</div>
