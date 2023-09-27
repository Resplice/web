<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { push } from 'svelte-spa-router'
	import { attributeTypes, capitalize } from '@resplice/utils'
	import { AttributeItem, AttributeActionIcon, Button } from '@resplice/components'
	import Verified from '$modules/attribute/components/Verified.svelte'
	import type { Attribute } from '$modules/account/account.types'
	import useProtocol from '$common/protocol/useProtocol'

	const dispatch = createEventDispatcher()
	const protocol = useProtocol()

	export let attribute: Attribute
	let context: 'actions' | 'remove' = 'actions'
	$: attributeTypeConfig = attributeTypes[attribute.type]

	function remove() {
		protocol.attribute.remove({ id: attribute.id })
		dispatch('close')
	}
</script>

<div class="w-full p-4">
	<div class="space-y-4">
		<AttributeItem {attribute} itemType="user" disableActions />
		<Verified {attribute} />
	</div>

	{#if context === 'actions'}
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

		<div class="flex flex-col space-y-4 mt-4">
			<Button color="brand-light" on:click={() => push(`/attribute/${attribute.id}/change/name`)}>
				Change Name
			</Button>
			<Button color="brand-light" on:click={() => push(`/attribute/${attribute.id}/change/value`)}>
				Change Value
			</Button>
			<Button color="danger-light" on:click={() => (context = 'remove')}>Remove</Button>
		</div>
	{:else if context === 'remove'}
		<div class="w-full space-y-4 p-8">
			<p class="text-lg font-semibold">Are you sure you want to remove this attribute?</p>
			<Button class="w-full" color="danger-light" on:click={remove}>Remove</Button>
			<Button class="w-full" color="gray" on:click={() => (context = 'actions')}>Cancel</Button>
		</div>
	{/if}
</div>
