<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import accountStore from '$modules/account/account.store'
	import config from '$services/config'
	import useProtocol from '$common/protocol/useProtocol'
	import { ProgressBar, Skeleton } from '@resplice/components'
	import QrCode from '$modules/invite/components/QrCode.svelte'
	import Header from '$modules/account/components/Header.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'

	const protocol = useProtocol()

	let url: string
	let shares = new Set<number>()

	const TIMEOUT_SECONDS = 120
	let timer = TIMEOUT_SECONDS
	let interval: NodeJS.Timeout | undefined

	async function initQr() {
		const qrInvite = await protocol.invite.createQr(Array.from(shares))
		url = `${config.appUrl}/invite/qr/${qrInvite.uuid}`
		console.log(url)

		interval = setInterval(() => {
			timer--
		}, 1000)
	}

	function cleanup() {
		clearInterval(interval)
	}

	async function reset() {
		cleanup()
		url = ''
		timer = TIMEOUT_SECONDS
		await initQr()
	}

	function secondsToTime(t: number) {
		const m = Math.floor((t % 3600) / 60)
			.toString()
			.padStart(2, '0')
		const s = Math.floor(t % 60)
			.toString()
			.padStart(2, '0')

		return `${m}:${s}`
	}

	onMount(initQr)
	onDestroy(cleanup)

	$: {
		if (timer <= 0) reset()
	}
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
		{#if url}
			<div class="w-full mb-8">
				<h2 class="text-6xl w-full text-center mb-2">{secondsToTime(timer)}</h2>
				<ProgressBar value={(timer / TIMEOUT_SECONDS) * 100} />
			</div>
		{/if}
		<AttributeShareContext bind:selected={shares} initializeDefault />
	</main>
</div>
