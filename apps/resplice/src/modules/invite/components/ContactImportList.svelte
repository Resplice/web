<script lang="ts">
	import { Button, CheckmarkIcon, SendIcon, CloseIcon } from '@resplice/components'
	import inviteStores from '$modules/invite/invite.store'
	import {
		connectionAttributeValuesStore,
		type ConnectionAttributeValue
	} from '$modules/connection/connection.store'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type { ProviderContact, InviteState } from '$modules/invite/services/contactProviders'
	import { type Invite } from '$modules/invite/invite.types'
	import ContactImportAttribute from '$modules/invite/components/ContactImportAttribute.svelte'

	const inviteStore = inviteStores.invites

	export let contacts: ProviderContact[]

	function setInviteState(contactIdx: number, state: InviteState) {
		contacts[contactIdx].inviteState = state
		contacts = [...contacts]
	}

	function deriveInviteState(
		contact: ProviderContact,
		connectionAttributeValues: ConnectionAttributeValue[],
		invites: Invite[]
	) {
		const matchingConnection = contact.attributes.find((attribute) =>
			connectionAttributeValues.some((connValue) => connValue.value === attribute.value)
		)
		if (matchingConnection) return 'connected'

		const matchingInvite = contact.attributes.find((attribute) =>
			invites.some((invite) => invite.value === attribute.value)
		)
		if (matchingInvite) return 'invited'

		return contact.inviteState
	}

	$: {
		const connectionAttributeValues = $connectionAttributeValuesStore
		const invites = [...$inviteStore.values()]

		contacts = contacts.map((contact) => ({
			...contact,
			inviteState: deriveInviteState(contact, connectionAttributeValues, invites)
		}))
	}
</script>

{#if contacts.length}
	{#each contacts as contact, idx}
		<div class="flex flex-col bg-white rounded-lg shadow-lg mb-4 divide-y-2">
			<div class="w-full py-2 pr-4 flex items-center">
				<div class="flex-1 overflow-hidden">
					<ConnectionItem
						connection={{
							id: idx,
							name: contact.name,
							alias: null,
							avatarUrl: contact.avatar
						}}
					/>
				</div>
				{#if contact.inviteState === 'invited'}
					<div class="flex-none flex items-center space-x-2">
						<p>Invited</p>
						<div class="p-2 bg-brand-primary bg-opacity-20 text-brand-primary-dark rounded-full">
							<SendIcon height={18} width={18} />
						</div>
					</div>
				{:else if contact.inviteState === 'connected'}
					<div class="flex-none flex items-center space-x-2">
						<p>Connected</p>
						<div class="p-2 bg-brand-primary bg-opacity-20 text-brand-primary-dark rounded-full">
							<CheckmarkIcon height={18} width={18} />
						</div>
					</div>
				{:else if contact.inviteState === 'ignored'}
					<div class="flex-none flex items-center space-x-2">
						<p>Ignored</p>
						<div class="p-2 bg-gray-200 text-gray-700 rounded-full">
							<CloseIcon height={18} width={18} />
						</div>
					</div>
				{:else}
					<Button
						class="flex-none text-xs uppercase"
						variant="secondary"
						color="gray"
						on:click={() => setInviteState(idx, 'ignored')}>Ignore</Button
					>
				{/if}
			</div>
			{#if !contact.inviteState}
				<div class="flex-none flex flex-col space-y-4 p-4">
					{#if contact.attributes.filter((a) => a.type === 'phone').length}
						{#each contact.attributes.filter((a) => a.type === 'phone') as attribute}
							<ContactImportAttribute {contact} {attribute} />
						{/each}
					{:else}
						<p class="text-gray-800">No phone numbers found for {contact.name}.</p>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
{:else}
	<p>No Contacts were imported.</p>
{/if}
