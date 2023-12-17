<script lang="ts">
	import { AttributeActionIcon, Button, toast } from '@resplice/components'
	import { AttributeAction } from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import type {
		ProviderContact,
		ProviderContactAttribute
	} from '$modules/invite/services/contactProviders'
	import { InviteType } from '$modules/invite/invite.types'

	const protocol = useProtocol()

	export let contact: ProviderContact
	export let attribute: ProviderContactAttribute
	let isInviting = false

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

	async function invite(contact: ProviderContact, attribute: ProviderContactAttribute) {
		try {
			isInviting = true
			const inviteType = InviteType[attribute.type.toUpperCase() as keyof typeof InviteType]
			switch (inviteType) {
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
			isInviting = false
		}
	}
</script>

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
		isLoading={isInviting}
		on:click={() => invite(contact, attribute)}
	>
		Invite
	</Button>
</div>
