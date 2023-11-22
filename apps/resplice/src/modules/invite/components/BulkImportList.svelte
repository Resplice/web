<script lang="ts">
	import {
		AttributeActionIcon,
		Button,
		CheckmarkIcon,
		SendIcon,
		CloseIcon,
		toast
	} from '@resplice/components'
	import { AttributeAction } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import inviteStores from '$modules/invite/invite.store'
	import {
		connectionAttributeValuesStore,
		type ConnectionAttributeValue
	} from '$modules/connection/connection.store'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type {
		ProviderContact,
		ProviderContactAttribute,
		InviteState
	} from '$modules/invite/services/contactProviders'
	import { InviteType, type Invite } from '$modules/invite/invite.types'

	const protocol = useProtocol()
	const inviteStore = inviteStores.invites

	export let contacts: ProviderContact[]

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

	function setInviteState(contactIdx: number, state: InviteState) {
		contacts[contactIdx].inviteState = state
		contacts = [...contacts]
	}

	async function invite(contact: ProviderContact, attribute: ProviderContactAttribute) {
		try {
			const inviteType = InviteType[attribute.type.toUpperCase() as keyof typeof InviteType]
			switch (inviteType) {
				case InviteType.EMAIL:
					await protocol.invite.create({
						name: contact.name,
						value: { $case: 'email', email: attribute.value }
					})
					break
				case InviteType.PHONE:
					await protocol.invite.create({
						name: contact.name,
						value: { $case: 'phone', phone: attribute.value }
					})
					break
			}
		} catch (err) {
			console.error(err)
			toast.new({
				type: toast.type.DANGER,
				title: 'Invite Failed',
				message: `Your invite failed to send to ${attribute.value}. Please try again later or select a different attribute.`
			})
		}
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
					{#if contact.attributes.length}
						{#each contact.attributes as attribute}
							<div class="flex justify-between items-center w-full">
								<div class="flex items-start flex-1 overflow-hidden">
									<div
										class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-gray-400 text-gray-600"
									>
										<AttributeActionIcon attributeAction={providerAttributeToAction(attribute)} />
									</div>
									<div class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight">
										<p class="font-semibold text-gray-800 truncate h-6 capitalize">
											{attribute.name}
										</p>
										<p class="truncate">{attribute.value}</p>
									</div>
								</div>
								<Button
									class="text-xs uppercase"
									color="brand-light"
									on:click={() => invite(contact, attribute)}>Invite</Button
								>
							</div>
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
