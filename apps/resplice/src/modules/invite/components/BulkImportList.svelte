<script lang="ts">
	import { AttributeActionIcon, Button, CheckmarkIcon, CloseIcon } from '@resplice/components'
	import { AttributeAction } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type {
		ProviderContact,
		ProviderContactAttribute
	} from '$modules/invite/services/contactProviders'
	import { InviteType } from '$modules/invite/invite.types'

	export let contacts: ProviderContact[]
	export let attributeIds: Set<number>

	const protocol = useProtocol()

	function providerAttributeToAction(value: ProviderContactAttribute): AttributeAction {
		switch (value.type) {
			case 'email':
				return AttributeAction.Email
			case 'phone':
				return AttributeAction.Call
			default:
				return AttributeAction.Copy
		}
	}

	function setInviteState(contactIdx: number, state: 'invited' | 'ignored') {
		contacts[contactIdx].inviteState = state
		contacts = [...contacts]
	}

	function invite(
		contact: ProviderContact,
		attribute: ProviderContactAttribute,
		contactIdx: number
	) {
		protocol.invite.create({
			type: InviteType[attribute.type.toUpperCase() as keyof typeof InviteType],
			name: contact.name,
			value: attribute.value,
			attributeIds: Array.from(attributeIds)
		})

		setInviteState(contactIdx, 'invited')
	}
</script>

{#if contacts.length}
	{#each contacts as contact, idx}
		<div class="flex flex-col bg-white rounded-lg shadow-lg mb-4 divide-y-2">
			<div class="py-2 pr-4 flex items-center">
				<ConnectionItem
					connection={{
						id: idx,
						name: contact.name,
						alias: null,
						avatarUrl: contact.avatar
					}}
				/>
				{#if contact.inviteState === 'invited'}
					<div class="flex items-center space-x-2">
						<div class="p-2 bg-brand-primary bg-opacity-20 text-brand-primary-dark rounded-full">
							<CheckmarkIcon height={24} width={24} />
						</div>
						<p>Invited</p>
					</div>
				{:else if contact.inviteState === 'ignored'}
					<div class="flex items-center space-x-2">
						<div class="p-2 bg-gray-200 text-gray-700 rounded-full">
							<CloseIcon height={24} width={24} />
						</div>
						<p>Ignored</p>
					</div>
				{:else}
					<Button
						class="text-xs uppercase"
						color="gray"
						on:click={() => setInviteState(idx, 'ignored')}>Ignore</Button
					>
				{/if}
			</div>
			{#if !contact.inviteState}
				<div class="flex flex-col space-y-4 p-4">
					{#each contact.attributes as attribute}
						<div class="flex justify-between items-center w-full">
							<div class="flex items-start flex-1 overflow-hidden">
								<div
									class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-gray-400 text-gray-600"
								>
									<AttributeActionIcon attributeAction={providerAttributeToAction(attribute)} />
								</div>
								<div class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight">
									<p
										class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6 capitalize"
									>
										{attribute.name}
									</p>
									<p class="overflow-hidden text-ellipsis">{attribute.value}</p>
								</div>
							</div>
							<Button
								class="text-xs uppercase"
								color="brand-light"
								on:click={() => invite(contact, attribute, idx)}>Invite</Button
							>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
{:else}
	<p>No Contacts were imported.</p>
{/if}
