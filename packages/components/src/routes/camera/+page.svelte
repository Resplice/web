<script lang="ts">
	import { onDestroy } from 'svelte'
	import { Camera, CloseIcon, IconButton } from '$lib'
	import { browser } from '$app/environment'

	let streamInterval: number

	async function onVideoStream(e: CustomEvent<HTMLVideoElement>) {
		const stream = e.detail
		const canvasEl = document.createElement('canvas')
		const canvas = canvasEl.getContext('2d')

		// Maybe use requestAnimationFrame here instead of interval
		streamInterval = window.setInterval(async () => {
			// if (qrCode) return
			if (stream.readyState !== stream.HAVE_ENOUGH_DATA) return
			const { videoWidth: width, videoHeight: height } = stream
			console.log(stream)
			canvasEl.height = height
			canvasEl.width = width
			if (!canvas) return

			canvas.drawImage(stream, 0, 0, width, height)
			// Might need to make these dimensions smaller for performance
			const imageData = canvas.getImageData(0, 0, width, height)
			console.log(imageData)
			// const code = QR(imageData.data, imageData.width, imageData.height, {
			// 	inversionAttempts: 'dontInvert'
			// })
			// if (code) {
			// 	clearInterval(streamInterval)
			// 	qrCode = code
			// }
		}, 500)
	}

	onDestroy(() => {
		clearInterval(streamInterval)
	})
</script>

<main
	class="h-full w-full bg-zinc-800 rounded-t-3xl rounded-b-3xl flex-1 flex flex-col justify-center items-center"
>
	{#if browser}
		<Camera hideControls on:stream={onVideoStream} />
	{/if}

	<div class="absolute bottom-0 z-10 flex items-center justify-center w-full p-4">
		<IconButton Icon={CloseIcon} />
	</div>

	<div
		class="border-4 border-brand-primary bg-transparent w-5/6 h-1/2 z-10 rounded-2xl flex justify-center items-center"
	/>
</main>
