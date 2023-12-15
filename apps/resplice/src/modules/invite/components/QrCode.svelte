<script lang="ts">
	import { onMount } from 'svelte'
	import QRCode from 'qrcode'

	export let data: string
	export let color: string
	let qrCode: string

	onMount(async () => {
		qrCode = await QRCode.toDataURL(data, {
			type: 'image/webp',
			errorCorrectionLevel: 'medium',
			scale: 8,
			color: {
				light: color
			}
		})
	})
</script>

<img class="w-full object-cover block h-auto" src={qrCode} alt="QR Code" />
