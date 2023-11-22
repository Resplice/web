<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte'
	import { Button } from '@resplice/components'

	// https://thomashunter.name/posts/2021-12-11-detecting-if-pwa-twa-is-installed
	// const ua = navigator.userAgent
	// const ios = ua.match(/iPhone|iPad|iPod/)
	// const standalone =
	// 	window.matchMedia('(display-mode: window-controls-overlay)').matches ||
	// 	window.matchMedia('(display-mode: standalone)').matches
	// const isInstalled = !!(standalone || (ios && !ua.match(/Safari/)))

	function registerPeriodicSync(swUrl: string, r: ServiceWorkerRegistration) {
		setInterval(
			async () => {
				if (!navigator.onLine) return

				const res = await fetch(swUrl, {
					cache: 'no-store',
					headers: {
						cache: 'no-store',
						'cache-control': 'no-cache'
					}
				})

				if (res.status === 200) await r.update()
			},
			60 * 60 * 1000 /* 1 hour */
		)
	}

	const { needRefresh, updateServiceWorker } = useRegisterSW({
		immediate: true,
		onRegisterError(error) {
			console.error('SW registration error', error)
		},
		onRegisteredSW(swUrl, r) {
			if (r?.active?.state === 'activated') registerPeriodicSync(swUrl, r)
			else if (r?.installing) {
				r.installing.addEventListener('statechange', (e) => {
					const sw = e.target as ServiceWorker
					if (sw.state === 'activated') registerPeriodicSync(swUrl, r)
				})
			}
		}
	})

	function close() {
		needRefresh.set(false)
	}
</script>

{#if $needRefresh}
	<div class="fixed bottom-0 left-0 w-full p-2 z-50 flex justify-center items-center" role="alert">
		<div
			class="w-full max-w-xl border-2 border-slate-300 shadow-lg rounded-lg p-4 flex flex-col space-y-4 bg-white"
			role="dialog"
		>
			<p class="text-lg">New Resplice update available!</p>
			<div class="w-full flex justify-between">
				<Button on:click={() => updateServiceWorker(true)}>Update</Button>
				<Button variant="secondary" color="gray" on:click={close}>Close</Button>
			</div>
		</div>
	</div>
{/if}
