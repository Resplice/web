<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { Avatar } from '@resplice/components'
	import inviteStores from '$modules/invite/invite.store'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/invite/components/Header.svelte'
	import InviteAttribute from '$modules/invite/components/InviteAttribute.svelte'

	const inviteStore = inviteStores.invites

	export let params: { 'value-id': string }
	$: valueId = params['value-id']
	$: invite = $inviteStore.get(valueId)

	$: {
		if (!invite) pop()
	}
</script>

<svelte:head>
	<title>{invite?.name}</title>
</svelte:head>

{#if !!invite}
	<Page>
		<Header {invite} />
		<main
			class="bg-white rounded-t-3xl rounded-b-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto mb-4"
		>
			<div class="w-full flex flex-col items-center justify-center space-y-2 my-8">
				<Avatar seed={invite.id} src="" size="xl" />
				<h2 class="w-full overflow-auto truncate text-4xl font-bold text-center">
					{invite.name}
				</h2>
			</div>
			<InviteAttribute {invite} />
		</main>
	</Page>
{/if}
