<script lang="ts">
	import { createVirtualizer } from '@tanstack/svelte-virtual'
	import { push } from 'svelte-spa-router'
	import contactStores from '$modules/contact/contact.store'
	import ContactItem from '$modules/contact/components/ContactItem.svelte'
	import type { Contact } from '$modules/contact/contact.types'

	const contacts = contactStores.contacts
	const shares = contactStores.contactShares
	export let attributeId: number
	let virtualListEl: HTMLDivElement

	function buildAttributeContacts(contacts: typeof $contacts, shares: typeof $shares) {
		const attributeShares = [...shares.values()].filter(
			(share) => share.attributeId === attributeId
		)
		const attributeContacts: Contact[] = []

		attributeShares.forEach((share) => {
			const attributeContact = contacts.get(share.contactId)
			if (!attributeContact) return
			attributeContacts.push(attributeContact)
		})

		return attributeContacts
	}

	$: attributeContacts = buildAttributeContacts($contacts, $shares)
	$: virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
		count: attributeContacts.length,
		getScrollElement: () => virtualListEl,
		estimateSize: () => 64,
		overscan: 10
	})
</script>

<div>
	<h2 class="text-2xl font-gray-700 my-2">Contacts</h2>
	<p class="text-gray-700 text-sm mb-4">Editing shares from an attribute is coming soon!</p>

	{#if attributeContacts.length}
		<div
			bind:this={virtualListEl}
			class="w-full relative"
			style="height: {$virtualizer.getTotalSize()}"
		>
			{#each $virtualizer.getVirtualItems() as row}
				<div
					class="absolute top-0 left-0 w-full"
					style="height: {row.size}px; transform: translateY({row.start}px)"
				>
					<ContactItem
						contact={attributeContacts[row.index]}
						on:click={() => {
							push(`/app/contact/${attributeContacts[row.index].id}/shares`)
						}}
					/>
				</div>
			{/each}
		</div>
	{:else}
		<p>This lonely attribute is not being shared with anyone.</p>
	{/if}
</div>
