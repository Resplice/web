<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import { Avatar, Button } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import ConnectionAttributes from '$modules/connection/components/ConnectionAttributes.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'
	import ConnectionDetailSkeleton from '$modules/connection/pages/ConnectionDetailSkeleton.svelte'
	import type { QrConnection } from '$modules/invite/invite.types'

	const protocol = useProtocol()

	export let params: { uuid: string }
	let selectedAttributes = new Set<number>()
	let showConnectionOnHeader = false
	let scrollEl: HTMLDivElement
	let qrConnectionPromise: Promise<QrConnection> = protocol.invite.openQr({ qrCode: params.uuid })
	let attributeIds: Set<number> = new Set()

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			showConnectionOnHeader = !entry.isIntersecting
		})
		if (scrollEl) observer.observe(scrollEl)
		return () => observer.disconnect()
	})

	function onAttributeToggle(id: number) {
		if (selectedAttributes.has(id)) selectedAttributes.delete(id)
		else selectedAttributes.add(id)
	}

	async function onConnect() {
		const connectionId = await protocol.invite.connectViaQr({
			qrCode: params.uuid,
			attributeIds: [...selectedAttributes]
		})
		push(`/connection/${connectionId}/details`)
	}
</script>

{#await qrConnectionPromise}
	<ConnectionDetailSkeleton />
{:then qrConnection}
	<div class="flex flex-col w-full h-full bg-gray-100">
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
			<!-- <ConnectionAttributes attributes={connection.attributes} /> -->
			<div>
				<Button on:click={onConnect}>Connect</Button>
			</div>
		</main>
		<footer class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-none px-8 py-4">
			<AttributeShareContext
				selected={selectedAttributes}
				initializeDefault
				on:toggle={(e) => onAttributeToggle(e.detail)}
			/>
		</footer>
	</div>
{:catch error}
	<p>We are sorry, something went wrong.</p>
	<p>{error.message}</p>
{/await}
