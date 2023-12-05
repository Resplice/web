<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { Avatar } from '@resplice/components'
	import inviteStores from '$modules/invite/invite.store'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/invite/components/PendingConnectionHeader.svelte'
	import PendingConnectionAttributes from '$modules/invite/components/PendingConnectionAttributes.svelte'

	const pendingConnectionStore = inviteStores.pendingConnections

	export let params: { id: string }
	$: pendingConnection = $pendingConnectionStore.get(decodeURIComponent(params['id']))

	$: {
		if (!pendingConnection) pop()
	}
</script>

<svelte:head>
	<title>{pendingConnection?.name}</title>
</svelte:head>

{#if !!pendingConnection}
	<Page>
		<Header {pendingConnection} />
		<main
			class="bg-white rounded-t-3xl rounded-b-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto mb-4"
		>
			<div class="w-full flex flex-col items-center justify-center space-y-2 my-8">
				<Avatar
					seed={`${pendingConnection.connectionId}`}
					src={pendingConnection.avatarUrl}
					size="xl"
				/>
				<h2 class="w-full overflow-auto truncate text-4xl font-bold text-center">
					{pendingConnection.name}
				</h2>
			</div>
			<PendingConnectionAttributes attributes={pendingConnection.pendingAttributes} />
		</main>
	</Page>
{/if}
