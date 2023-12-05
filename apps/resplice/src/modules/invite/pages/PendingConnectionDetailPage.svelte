<script lang="ts">
	import { pop, replace } from 'svelte-spa-router'
	import { Avatar, Button, toast } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import inviteStores from '$modules/invite/invite.store'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/invite/components/PendingConnectionHeader.svelte'
	import PendingConnectionAttributes from '$modules/invite/components/PendingConnectionAttributes.svelte'

	const protocol = useProtocol()

	const pendingConnectionStore = inviteStores.pendingConnections

	export let params: { id: string }
	let isConnecting = false
	$: pendingConnection = $pendingConnectionStore.get(parseInt(params.id, 10))

	async function onConnect() {
		if (!pendingConnection) return
		try {
			isConnecting = true
			const connectionId = await protocol.invite.acceptInvite({
				connectionId: pendingConnection.connectionId,
				inviteId: pendingConnection.inviteId
			})
			replace(`/connection/${connectionId}/details`)
		} catch (e) {
			isConnecting = false
			toast.new({
				type: toast.type.DANGER,
				title: 'Unable to connect',
				message: (e as Error).message
			})
			console.error(e)
		}
	}
</script>

<svelte:head>
	<title>{pendingConnection?.name}</title>
</svelte:head>

{#if !!pendingConnection}
	<Page>
		<Header {pendingConnection} />
		<main
			class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto"
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
			<div class="mb-4">
				<Button isLoading={isConnecting} on:click={onConnect}>Connect</Button>
			</div>
		</main>
	</Page>
{/if}
