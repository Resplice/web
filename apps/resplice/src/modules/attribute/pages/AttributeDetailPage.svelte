<script lang="ts">
	import { push } from 'svelte-spa-router'
	import {
		attributeTypes,
		formatRespliceDatetime,
		formatRespliceDatetimeDistance,
		getRespliceNow
	} from '@resplice/utils'
	import attributeStore from '$modules/attribute/attribute.store'
	import useRespliceProtocol from '$common/hooks/useRespliceProtocol'
	import AttributeItem from '@resplice/components/package/attribute/AttributeItem.svelte'
	import IconButton from '@resplice/components/package/IconButton.svelte'
	import BackIcon from '@resplice/components/package/icons/BackIcon.svelte'
	import EllipsisHorizontalIcon from '@resplice/components/package/icons/EllipsisHorizontalIcon.svelte'
	import ShieldCheckmarkIcon from '@resplice/components/package/icons/ShieldCheckmarkIcon.svelte'
	import Button from '@resplice/components/package/Button.svelte'
	import ShieldHalfIcon from '@resplice/components/package/icons/ShieldHalfIcon.svelte'
	import ContextMenu from '$modules/attribute/components/ContextMenu.svelte'
	import Contacts from '$modules/attribute/components/Contacts.svelte'
	import Verify from '$modules/attribute/components/Verify.svelte'
	import type { Attribute as UserAttribute } from '$modules/user/user.types'

	const protocol = useRespliceProtocol()

	export let params: { id: string }
	$: id = parseInt(params.id, 10)
	let attribute: UserAttribute

	$: {
		const userAttribute = $attributeStore.get(id)
		// TODO: Handle invalid state better, maybe redirect?
		if (!userAttribute) throw new Error('Attribute not found')
		attribute = userAttribute
	}
	$: attributeType = attributeTypes[attribute.type]

	let showContextMenu = false
	let sendingVerification = false
	let showVerification = false

	async function sendAttributeVerification() {
		sendingVerification = true
		await protocol.attribute.sendVerification(attribute.id)
		sendingVerification = false
		showVerification = true
	}
</script>

<svelte:head>
	<title>{attribute.name}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-between p-4">
		<IconButton Icon={BackIcon} on:click={() => push('/app/profile')} />
		<IconButton Icon={EllipsisHorizontalIcon} on:click={() => (showContextMenu = true)} />
		{#if showContextMenu}
			<ContextMenu attributeId={attribute.id} on:close={() => (showContextMenu = false)} />
		{/if}
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 flex flex-col overflow-auto space-y-4 p-8">
		<AttributeItem {attribute} itemType="user" disableActions />

		{#if attributeType.verifiable}
			<div class="flex space-x-2 items-center">
				{#if attribute.verifiedAt}
					<div class="text-brand-primary">
						<ShieldCheckmarkIcon />
					</div>
				{:else}
					<div class="text-red-500">
						<ShieldHalfIcon />
					</div>
				{/if}
				<div>
					<h4 class="text-lg">
						{#if attribute.verifiedAt}
							Verified
						{:else}
							Unverified
						{/if}
					</h4>
					{#if attribute.verifiedAt}
						<p class="text-gray-700 text-sm">
							on {formatRespliceDatetime(attribute.verifiedAt, "MMMM do',' yyyy")}
						</p>
					{/if}
				</div>
			</div>

			<div class="w-full flex flex-col space-y-2">
				{#if attribute.verifyExpiry}
					<p class="text-gray-700 text-sm">
						Expiring in {formatRespliceDatetimeDistance(getRespliceNow(), attribute.verifyExpiry)}
					</p>
				{/if}
				<Button
					variant="secondary"
					isLoading={sendingVerification}
					on:click={sendAttributeVerification}>Re-Verify</Button
				>
			</div>
		{/if}

		<Contacts attributeId={attribute.id} />
	</main>
</div>

{#if showVerification}
	<Verify attributeId={attribute.id} on:close={() => (showVerification = false)} />
{/if}
