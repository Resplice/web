<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { sortUserAttributes } from '$modules/attribute/attribute.helpers'
	import attributeStore from '$modules/attribute/attribute.store'
	import AttributeContext from '$modules/attribute/components/AttributeContext.svelte'
	import { AttributeItem, AddIcon, Button, Modal, SkeletonList } from '@resplice/components'
	import type { Attribute } from '@resplice/utils'

	$: attributes = $attributeStore
	let selectedAttribute: Attribute | null = null
</script>

<div class="w-full flex flex-col p-4 space-y-4">
	{#if attributes}
		{#each sortUserAttributes(attributes) as attribute}
			<AttributeItem {attribute} itemType="user" on:click={() => (selectedAttribute = attribute)} />
		{/each}
	{:else}
		<SkeletonList count={5} width="100%" height="100%" />
	{/if}

	<div class="w-full flex items-center justify-center my-4">
		<Button color="brand-light" on:click={() => push('/attribute/create')}>
			<div class="flex items-center justify-center w-full">
				<AddIcon width={36} height={36} />
				<p class="ml-2">Add Attribute</p>
			</div>
		</Button>
	</div>
</div>

{#if selectedAttribute}
	<Modal
		initialY={window.innerHeight - window.innerHeight / 1.5}
		on:close={() => {
			selectedAttribute = null
		}}
	>
		<AttributeContext attribute={selectedAttribute} itemType="user" />
	</Modal>
{/if}
