<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { sortUserAttributes } from '$modules/attribute/attribute.helpers'
	import attributeStore from '$modules/attribute/attribute.store'
	import AttributeContext from '$modules/account/components/AttributeContext.svelte'
	import { AttributeItem, AddIcon, Modal, SkeletonList } from '@resplice/components'
	import type { Attribute } from '$modules/account/account.types'

	$: attributes = $attributeStore
	let selectedAttribute: Attribute | null = null
</script>

<div class="w-full flex flex-col p-4 space-y-4">
	{#if attributes}
		{#each sortUserAttributes(attributes) as attribute}
			<AttributeItem {attribute} itemType="user" on:click={() => (selectedAttribute = attribute)} />
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
	{:else}
		<SkeletonList count={5} width="100%" height="100%" />
	{/if}
</div>

{#if selectedAttribute}
	<Modal
		let:close
		initialY={window.innerHeight - window.innerHeight / 1.5}
		on:close={() => {
			selectedAttribute = null
		}}
	>
		<AttributeContext attribute={selectedAttribute} on:close={close} />
	</Modal>
{/if}
