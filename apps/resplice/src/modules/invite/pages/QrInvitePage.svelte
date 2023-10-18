<script lang="ts">
	import { onMount } from 'svelte'
	import accountStore from '$modules/account/account.store'
	import config from '$services/config'
	import useProtocol from '$common/protocol/useProtocol'
	import { Skeleton } from '@resplice/components'
	import QrCode from '$modules/invite/components/QrCode.svelte'
	import Header from '$modules/account/components/Header.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'

	const protocol = useProtocol()

	let url: string
	let shares = new Set<number>()

	async function fetchQr() {
		const qrInvite = await protocol.invite.createQr(Array.from(shares))
		url = `${config.appUrl}/invite/qr/${qrInvite.uuid}`
		console.log(url)
	}

	onMount(fetchQr)
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header account={$accountStore} showBack showUser showSettings={false} />
	<main
		class="bg-white w-full max-w-xl m-auto rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto"
	>
		<div class="w-full flex items-center justify-center mb-8 p-4 rounded-2xl bg-brand-primary">
			{#if url}
				<QrCode data={url} scale={9} />
			{:else}
				<Skeleton variant="rect" width="100%" height="333px" />
			{/if}
		</div>
		<AttributeShareContext bind:selected={shares} initializeDefault />
	</main>
</div>
