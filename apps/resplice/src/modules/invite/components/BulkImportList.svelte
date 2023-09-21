<script lang="ts">
	import { AttributeActionIcon, Button } from '@resplice/components'
	import { AttributeAction } from '@resplice/utils'
	import ConnectionItem from '$modules/connection/components/ConnectionItem.svelte'
	import type {
		ProviderContact,
		ProviderContactAttribute
	} from '$modules/invite/services/contactProviders'

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
</script>

{#if contacts.length}
	{#each contacts as contact}
		<div class="flex flex-col bg-white rounded-lg shadow-lg mb-4 divide-y-2">
			<div class="py-2 pr-4 flex items-center">
				<ConnectionItem
					connection={{
						id: contact.id,
						name: contact.name,
						alias: null,
						avatarUrl: contact.avatar
					}}
				/>
				<Button class="text-xs uppercase" color="gray">Ignore</Button>
			</div>
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
								<p class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6 capitalize">
									{attribute.name}
								</p>
								<p class="overflow-hidden text-ellipsis">{attribute.value}</p>
							</div>
						</div>
						<Button class="text-xs uppercase" color="brand-light">Invite</Button>
					</div>
				{/each}
			</div>
		</div>
	{/each}
{:else}
	<p>No Contacts were imported.</p>
{/if}
