<script lang="ts">
	import { onMount } from 'svelte'
	import { Html5Qrcode, type Html5QrcodeResult } from 'html5-qrcode'
	import { replace, pop } from 'svelte-spa-router'
	import { CloseIcon, IconButton } from '@resplice/components'

	function getScanBox(width: number, height: number) {
		const constraint = Math.min(width, height)
		const size = Math.min(constraint - 48, 512)
		return { width: size, height: size }
	}

	async function onScan(data: string, _result: Html5QrcodeResult) {
		const url = new URL(data)
		replace(url.hash.replace('#', ''))
	}

	onMount(() => {
		const scanner = new Html5Qrcode('camera', { formatsToSupport: [0], verbose: false })

		scanner.start(
			{ facingMode: 'environment' },
			{ fps: 10, qrbox: getScanBox, aspectRatio: 0.5625 },
			onScan,
			() => {}
		)

		return () => scanner.stop()
	})
</script>

<main class="relative h-full w-full bg-zinc-800 flex-1 flex flex-col justify-center items-center">
	<div id="camera" class="w-full top-0 left-0" />

	<div class="absolute bottom-0 z-10 flex items-center justify-center w-full p-4">
		<IconButton Icon={CloseIcon} on:click={() => pop()} />
	</div>
</main>
