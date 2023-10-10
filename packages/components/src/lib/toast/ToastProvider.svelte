<script lang="ts">
	import { onDestroy } from 'svelte'
	import toast from '$lib/toast/toast.store'
	import ToastView from '$lib/toast/Toast.svelte'

	let toastTimeout: NodeJS.Timeout

	$: {
		if ($toast) {
			toastTimeout = setTimeout(clear, 4500)
		}
	}

	function clear() {
		clearTimeout(toastTimeout)
		toast.set(null)
	}

	onDestroy(clear)
</script>

{#if $toast}
	<div class="fixed w-full top-0 left-0 z-50">
		<div class="w-full max-w-xl m-auto">
			<ToastView toast={$toast} on:close={clear} />
		</div>
	</div>
{/if}
