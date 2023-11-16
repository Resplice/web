<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { Button, ConnectionEmptyIcon, CameraIcon, QRCodeIcon } from '@resplice/components'
	import connectionStore from '$modules/connection/connection.store'
	import inviteStores from '$modules/invite/invite.store'
	import SearchHeader from '$common/components/SearchHeader.svelte'
	import ConnectionList from '$modules/connection/components/ConnectionList.svelte'
	// import PendingConnectionList from '$modules/invite/components/PendingConnectionList.svelte'
	import InviteList from '$modules/invite/components/InviteList.svelte'

	// const pendingConnectionStore = inviteStores.pendingConnections
	const inviteStore = inviteStores.invites
	// let pendingConnections: PendingConnection[] = Array.from($pendingConnectionStore.values())
	$: connections = Array.from($connectionStore.values())
	$: invites = Array.from($inviteStore.values())
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<div class="h-full w-full max-w-xl m-auto flex flex-col">
	<SearchHeader />

	<div class="w-full flex-1 flex flex-col overflow-auto bg-white rounded-t-3xl">
		{#if !connections.length && !invites.length}
			<div class="w-full h-full flex flex-col justify-center items-center">
				<div class="rounded-full overflow-hidden w-48">
					<ConnectionEmptyIcon width={192} height={144} />
				</div>
				<h3 class="px-8 text-lg font-semibold text-center mt-8">Add some connections</h3>
				<!-- <p class="text-center px-8 py-2">
					You can invite others to Resplice even if they don't have an account!
				</p> -->
				<p class="text-center px-8 py-2">
					Open your own or scan a friend's QR code to connect and share!
				</p>
				<div class="w-full flex flex-col justify-center items-center mt-8 space-y-4">
					<!-- <Button
					color="brand-light"
					class="flex items-center justify-center w-56"
					on:click={() => push('/invite/bulk')}
				>
					<AddIcon width={24} height={24} />
					<span class="ml-2">Import Contacts</span>
				</Button> -->
					<Button
						color="brand-light"
						class="flex items-center justify-center w-56"
						on:click={() => push('/invite/qr')}
					>
						<QRCodeIcon width={24} height={24} />
						<span class="ml-2">Show QR Code</span>
					</Button>
					<Button
						color="brand-light"
						class="flex items-center justify-center w-56"
						on:click={() => push('/invite/qr-scan')}
					>
						<CameraIcon width={24} height={24} />
						<span class="ml-2">Scan a QR Code</span>
					</Button>
				</div>
			</div>
		{:else}
			<!-- <PendingConnectionList {pendingConnections} /> -->
			<ConnectionList {connections} />
			<InviteList {invites} />
		{/if}
	</div>
</div>
