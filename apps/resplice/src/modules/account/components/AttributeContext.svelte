<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { attributeTypes, capitalize } from '@resplice/utils'
	import { AttributeItem, AttributeActionIcon, EditIcon } from '@resplice/components'
	// import Verified from '$modules/attribute/components/Verified.svelte'
	import type { Attribute } from '$modules/account/account.types'

	export let attribute: Attribute
	$: attributeTypeConfig = attributeTypes[attribute.type]
</script>

<div class="w-full p-4">
	<div class="space-y-4">
		<AttributeItem {attribute} itemType="user" disableActions />
		<!-- <Verified {attribute} /> -->
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
		{#if attribute.id !== 1}
			<button
				class="flex items-center transform transition duration-75 ease-in-out active:scale-95"
				on:click={() => push(`/attribute/${attribute.id}/change`)}
			>
				<div
					class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none"
				>
					<EditIcon width={24} height={24} />
				</div>
				<p class="ml-4">Edit</p>
			</button>
		{/if}
	</div>
</div>
