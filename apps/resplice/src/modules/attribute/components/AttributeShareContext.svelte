<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { sortUserAttributes } from '$modules/attribute/attribute.helpers'
	import {
		AttributeItem,
		Button,
		Toggle,
		Modal,
		Skeleton,
		AttributeAction,
		AddIcon
	} from '@resplice/components'
	import attributeStore from '$modules/attribute/attribute.store'

	export let selected: Set<number>
	export let initializeDefault = false
	let isEditing = false

	$: attributes = $attributeStore
	$: sortedAttributes = attributes ? sortUserAttributes(attributes) : []

	$: {
		// TODO: Find a better way to set initial shares
		if (sortedAttributes.length && initializeDefault) {
			selected = new Set([sortedAttributes[0].id])
		}
	}

	function toggle(id: number) {
		const newSelected = new Set(selected)
		if (newSelected.has(id)) newSelected.delete(id)
		else newSelected.add(id)
		selected = newSelected
	}
</script>

<section class="w-full flex-1 flex flex-col space-y-2">
	<div class="w-full flex justify-between items-center mb-2">
		<h2 class="font-semibold text-xl">Sharing</h2>
		<Button class="text-sm uppercase" color="brand-light" on:click={() => (isEditing = true)}>
			Edit
		</Button>
	</div>

	{#if attributes}
		<div class="w-full flex-1 flex space-x-4 overflow-scroll">
			{#each [...selected] as id}
				<AttributeAction
					itemType="user"
					attribute={attributes.get(id)}
					actionIdx={0}
					disableAction
				/>
			{/each}
			<button
				type="button"
				class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-brand-primary text-brand-primary-dark"
				on:click={() => (isEditing = true)}
			>
				<AddIcon height={24} width={24} />
			</button>
		</div>
	{:else}
		<Skeleton variant="rect" width="100%" height="2.5em" />
		<Skeleton variant="rect" width="100%" height="2.5em" />
	{/if}
</section>

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
				<Button class="w-64" color="gray" on:click={close}>Close</Button>
			</div>
		</div>
	</Modal>
{/if}
