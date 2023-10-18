<script lang="ts">
	import { onMount } from 'svelte'
	import QRCode from 'qrcode'

	let canvas: HTMLCanvasElement
	export let data: string
	export let scale: number

	onMount(async () => {
		await QRCode.toCanvas(canvas, data, {
			errorCorrectionLevel: 'medium',
			scale,
			color: {
				light: '#1BBC9B'
			}
		})
	})
</script>

<canvas bind:this={canvas}>Canvas not supported</canvas>
