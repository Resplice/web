<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { push } from 'svelte-spa-router'
	import { sortUserAttributes } from '$modules/attribute/attribute.helpers'
	import {
		AttributeItem,
		Button,
		Toggle,
		Modal,
		AttributeAction,
		AddIcon
	} from '@resplice/components'
	import attributeStore from '$modules/attribute/attribute.store'

	const dispatch = createEventDispatcher()

	export let selected: Set<number>
	export let initializeDefault = false
	let isEditing = false

	$: attributes = $attributeStore
	$: sortedAttributes = attributes ? sortUserAttributes(attributes) : []

	$: {
		// TODO: Find a better way to set initial shares
		if (sortedAttributes.length && initializeDefault) {
			const id = sortedAttributes[0].id
			selected = new Set([id])
			dispatch('toggle', id)
		}
	}

	function toggle(id: number) {
		const newSelected = new Set(selected)
		if (newSelected.has(id)) newSelected.delete(id)
		else newSelected.add(id)
		selected = newSelected
		dispatch('toggle', id)
	}

	function getAttribute(id: number) {
		return attributes.get(id)!
	}
</script>

<button class="w-full flex-1 flex flex-col space-y-2" on:click={() => (isEditing = true)}>
	<div class="w-full flex justify-between items-center mb-2">
		<h2 class="font-semibold text-xl">Sharing</h2>
		<Button class="text-sm uppercase" color="brand-light">Change</Button>
	</div>

	<div class="w-full flex-1 flex flex-nowrap space-x-4 overflow-scroll">
		{#if selected.size}
			{#each [...selected] as id}
				<div class="text-center w-12">
					<AttributeAction
						itemType="user"
						attribute={getAttribute(id)}
						actionIdx={0}
						disableAction
					/>
					<p class="w-full whitespace-nowrap overflow-hidden text-ellipsis">
						{getAttribute(id).name}
					</p>
				</div>
			{/each}
		{:else}
			<div class="text-center">
				<button
					type="button"
					class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-brand-primary text-brand-primary-dark"
					on:click={() => (isEditing = true)}
				>
					<AddIcon height={24} width={24} />
				</button>
				<p>Share</p>
			</div>
		{/if}
	</div>
</button>

{#if isEditing}
	<Modal let:close on:close={() => (isEditing = false)} initialY={56}>
		<div class="flex-1 w-full px-4 overflow-scroll" style="padding-bottom: 76px">
			<h2 class="font-semibold text-xl mb-4">Sharing</h2>
			<div class="w-full flex flex-col space-y-4">
				{#each sortedAttributes as attribute}
					<div class="flex justify-between w-full">
						<AttributeItem itemType="user" {attribute} disableActions />
						<Toggle
							name="attribute-{attribute.id}-toggle"
							isActive={selected.has(attribute.id)}
							on:toggle={() => toggle(attribute.id)}
						/>
					</div>
				{/each}
				<button
					type="button"
					class="outline-none border-none flex space-x-4 items-center"
					on:click={() => push('/attribute/add')}
				>
					<div
						class="p-3 rounded-lg focus:outline-none bg-brand-primary text-brand-primary-dark bg-opacity-20"
					>
						<AddIcon height={24} width={24} />
					</div>

					<p>New Attribute</p>
				</button>
			</div>
			<div class="w-full flex justify-center mt-4">
				<Button class="w-64" variant="secondary" color="gray" on:click={close}>Close</Button>
			</div>
		</div>
	</Modal>
{/if}
