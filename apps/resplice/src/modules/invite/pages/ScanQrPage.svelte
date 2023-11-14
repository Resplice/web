<script lang="ts">
	import { onDestroy } from 'svelte'
	import QR, { type QRCode } from 'jsqr'
	import { push, pop } from 'svelte-spa-router'
	import { Camera, CloseIcon, IconButton, Spinner } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'

	const protocol = useProtocol()

	let qrCode: QRCode
	let streamInterval: number
	let isLoading = false

	async function handleQr(qrData: string | null) {
		if (!qrData) return

		isLoading = true
		const url = new URL(qrData)
		console.log(url)
		const paths = url.pathname.split('/')
		const idx = paths.findIndex((p) => p === 'qr') + 1
		const [id, code] = atob(paths[idx]).split('|')
		const qrInviteId = parseInt(id, 10)
		const accessCode = parseInt(code, 10)

		const pendingContact = await protocol.invite.openQr({ qrCode })

		// push(`/app/pending/contact/${pendingContact.id}`)
	}

	$: handleQr(qrCode?.data)

	async function onVideoStream(e: CustomEvent<HTMLVideoElement>) {
		const stream = e.detail
		const canvasEl = document.createElement('canvas')
		const canvas = canvasEl.getContext('2d')

		// Maybe use requestAnimationFrame here instead of interval
		streamInterval = window.setInterval(async () => {
			if (qrCode) return
			if (stream.readyState !== stream.HAVE_ENOUGH_DATA) return
			const { videoWidth: width, videoHeight: height } = stream
			canvasEl.height = height
			canvasEl.width = width
			if (!canvas) return

			canvas.drawImage(stream, 0, 0, width, height)
			// Might need to make these dimensions smaller for performance
			const imageData = canvas.getImageData(0, 0, width, height)
			const code = QR(imageData.data, imageData.width, imageData.height, {
				inversionAttempts: 'dontInvert'
			})
			if (code) {
				console.log(code)
				clearInterval(streamInterval)
				qrCode = code
			}
		}, 500)
	}

	onDestroy(() => {
		clearInterval(streamInterval)
	})
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<main
		class="bg-zinc-800 rounded-t-3xl rounded-b-3xl flex-1 flex flex-col justify-center items-center"
	>
		<Camera hideControls on:stream={onVideoStream} on:close={() => push('/app/list/contacts')} />

		<div class="absolute bottom-0 z-10 flex items-center justify-center w-full p-4">
			<IconButton Icon={CloseIcon} on:click={() => pop()} />
		</div>

		<div
			class="border-4 border-brand-primary w-3/4 h-1/2 z-10 rounded-2xl flex justify-center items-center"
		>
			{#if isLoading}
				<Spinner />
			{/if}
		</div>
	</main>
</div>
