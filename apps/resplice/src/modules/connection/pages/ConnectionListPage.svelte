<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import {
		Button,
		ConnectionEmptyIcon,
		CameraIcon,
		QRCodeIcon,
		PeopleIcon
	} from '@resplice/components'
	import connectionStore from '$modules/connection/connection.store'
	import inviteStores from '$modules/invite/invite.store'
	import { sortRecordsByName } from '$common/utils'
	import SearchHeader from '$common/components/SearchHeader.svelte'
	import ConnectionList from '$modules/connection/components/ConnectionList.svelte'
	import PendingConnectionList from '$modules/invite/components/PendingConnectionList.svelte'
	import InviteList from '$modules/invite/components/InviteList.svelte'

	let scrollEl: HTMLDivElement

	const inviteStore = inviteStores.invites
	const pendingConnectionStore = inviteStores.pendingConnections
	$: connections = sortRecordsByName(Array.from($connectionStore.values()))
	$: invites = sortRecordsByName(Array.from($inviteStore.values()))
	$: pendingConnections = sortRecordsByName(Array.from($pendingConnectionStore.values()))

	onMount(() => {
		// Get scroll position
		const scrollPosition = sessionStorage.getItem('connection-list-scroll')
		if (scrollPosition) {
			scrollEl.scrollTop = parseInt(scrollPosition, 10)
			sessionStorage.removeItem('connection-list-scroll')
		}

		return () => {
			sessionStorage.setItem('connection-list-scroll', scrollEl.scrollTop.toString())
		}
	})
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<div class="h-full w-full max-w-xl m-auto flex flex-col">
	<SearchHeader />

	<div
		bind:this={scrollEl}
		class="w-full flex-1 flex flex-col overflow-auto bg-white rounded-t-3xl"
	>
		{#if !connections.length && !invites.length && !pendingConnections.length}
			<div class="w-full h-full flex flex-col justify-center items-center">
				<div class="rounded-full overflow-hidden w-48">
					<ConnectionEmptyIcon width={192} height={144} />
				</div>
				<h3 class="px-8 text-lg font-semibold text-center mt-8">Add some connections</h3>
				<div class="w-full flex flex-col justify-center items-center space-y-4">
					<p class="text-center px-8 py-2">
						You can invite others to Resplice even if they don't have an account!
					</p>
					<Button
						color="brand-light"
						class="flex items-center justify-center w-56"
						on:click={() => push('/invite/contacts')}
					>
						<PeopleIcon width={24} height={24} />
						<span class="ml-2">Import Contacts</span>
					</Button>
				</div>

				<div class="w-full flex flex-col justify-center items-center mt-8 space-y-4">
					<p class="text-center px-8 py-2">
						Open your own or scan a friend's QR code to connect and share!
					</p>
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
			<PendingConnectionList {pendingConnections} />
			<ConnectionList {connections} />
			<InviteList {invites} />
		{/if}
	</div>
</div>
