<script lang="ts">
	import { onMount } from 'svelte'
	import { Html5Qrcode, type Html5QrcodeResult } from 'html5-qrcode'
	import { CloseIcon, IconButton } from '$lib'

	function getScanBox(width: number, height: number) {
		const constraint = Math.min(width, height)
		const size = Math.min(constraint - 48, 512)
		return { width: size, height: size }
	}

	async function onScan(data: string, _result: Html5QrcodeResult) {
		console.log(data, _result)
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

	// async function handleQr(qrData: string | null) {
	// 	if (!qrData) return

	// 	const url = new URL(qrData)

	// 	replace(url.hash.replace('#', ''))
	// }

	// $: handleQr(qrCode?.data)

	// async function onVideoStream(e: CustomEvent<HTMLVideoElement>) {
	// 	// TODO: Look into Screen Wake Lock API
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
	// 	const stream = e.detail
	// 	const canvasEl = document.createElement('canvas')
	// 	const canvas = canvasEl.getContext('2d')

	// 	// Maybe use requestAnimationFrame here instead of interval
	// 	streamInterval = window.setInterval(async () => {
	// 		if (qrCode) return
	// 		if (stream.readyState !== stream.HAVE_ENOUGH_DATA) return
	// 		const { videoWidth: width, videoHeight: height } = stream
	// 		canvasEl.height = height
	// 		canvasEl.width = width
	// 		if (!canvas) return

	// 		canvas.drawImage(stream, 0, 0, width, height)
	// 		// Might need to make these dimensions smaller for performance
	// 		const imageData = canvas.getImageData(0, 0, width, height)
	// 		const code = QR(imageData.data, imageData.width, imageData.height, {
	// 			inversionAttempts: 'dontInvert'
	// 		})
	// 		if (code) {
	// 			clearInterval(streamInterval)
	// 			qrCode = code
	// 		}
	// 	}, 500)
	// }
</script>

<main class="relative h-full w-full bg-zinc-800 flex-1 flex flex-col justify-center items-center">
	<div id="camera" class="w-full top-0 left-0" />

	<div class="absolute bottom-0 z-10 flex items-center justify-center w-full p-4">
		<IconButton Icon={CloseIcon} />
	</div>

	<!-- <div
		class="border-4 border-brand-primary bg-transparent w-5/6 h-1/2 z-10 rounded-2xl flex justify-center items-center"
	/> -->
</main>
