<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	import cx from 'clsx'
	import IconButton from '$lib/IconButton.svelte'
	import CloseIcon from '$lib/icons/CloseIcon.svelte'
	import { ToastType, type Toast } from '$lib/toast/toast.types'

	const dispatch = createEventDispatcher()

	export let toast: Toast
</script>

<div transition:fly={{ y: -100, delay: 50, duration: 150, opacity: 0.75 }} class="w-full p-4">
	<div class="shadow-lg rounded-lg bg-white">
		<div
			class={cx('rounded-t-lg px-4 py-2 flex justify-between items-center', {
				'bg-green-200 text-green-600': toast.type === ToastType.SUCCESS,
				'bg-red-200 text-red-600': toast.type === ToastType.DANGER
			})}
		>
			<h2 class="uppercase font-semibold">{toast.title}</h2>
			<IconButton Icon={CloseIcon} width={24} height={24} on:click={() => dispatch('close')} />
		</div>

		<p class="text-gray-700 p-4">{toast.message}</p>
	</div>
</div>
