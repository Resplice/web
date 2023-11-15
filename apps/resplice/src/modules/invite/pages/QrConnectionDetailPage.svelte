<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import { Avatar, Button } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import PendingConnectionAttributes from '$modules/invite/components/PendingConnectionAttributes.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'
	import ConnectionDetailSkeleton from '$modules/connection/pages/ConnectionDetailSkeleton.svelte'
	import type { QrConnection } from '$modules/invite/invite.types'

	const protocol = useProtocol()

	export let params: { uuid: string }
	let selectedAttributes = new Set<number>()
	let showConnectionOnHeader = false
	let scrollEl: HTMLDivElement
	let qrConnectionPromise: Promise<QrConnection> = protocol.invite.openQr({ qrCode: params.uuid })
	let isConnecting = false

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			showConnectionOnHeader = !entry.isIntersecting
		})
		if (scrollEl) observer.observe(scrollEl)
		return () => observer.disconnect()
	})

	async function onConnect() {
		isConnecting = true
		const connectionId = await protocol.invite.acceptQrInvite({
			qrCode: params.uuid,
			attributeIds: Array.from(selectedAttributes)
		})
		push(`/connection/${connectionId}/details`)
	}
</script>

{#await qrConnectionPromise}
	<ConnectionDetailSkeleton />
{:then qrConnection}
	<Page>
		<Header
			connection={{ ...qrConnection, id: qrConnection.connectionId }}
			showConnection={showConnectionOnHeader}
		/>
		<main
			class="bg-white rounded-t-3xl rounded-b-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto mb-4"
		>
			<div class="w-full flex flex-col items-center justify-center space-y-2 my-8">
				<Avatar seed={`${qrConnection.connectionId}`} src={qrConnection.avatarUrl} size="xl" />
				<ConnectionName connection={qrConnection} />
			</div>
			<div bind:this={scrollEl} id="scrollIntersection" class="absolute top-1/4" />
			<PendingConnectionAttributes attributes={qrConnection.pendingAttributes} />
			<div>
				<Button isLoading={isConnecting} on:click={onConnect}>Connect</Button>
			</div>
		</main>
		<footer class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-none px-8 py-4">
			<AttributeShareContext bind:selected={selectedAttributes} initializeDefault />
		</footer>
	</Page>
{:catch error}
	<div class="p-4">
		<p>We are sorry, something went wrong.</p>
		<p>{error.message}</p>
		<Button on:click={() => push('/')}>Back To App</Button>
	</div>
{/await}
