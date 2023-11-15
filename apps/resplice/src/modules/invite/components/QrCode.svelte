<script lang="ts">
	import { onMount } from 'svelte'
	import QRCode from 'qrcode'

	export let data: string
	let qrCode: string

	onMount(async () => {
		qrCode = await QRCode.toDataURL(data, {
			errorCorrectionLevel: 'medium',
			scale: 8,
			color: {
				light: '#1BBC9B'
			}
		})
	})
</script>

<img class="w-full object-cover block h-auto" src={qrCode} alt="QR Code" />
