<script lang="ts">
	import cx from 'clsx'
	import Spinner from '$lib/skeleton/Spinner.svelte'

	export let isLoading = false
	export let disabled = false
</script>

<button
	class={cx(
		$$props.class,
		'w-full flex space-x-4 rounded-full border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none'
	)}
	disabled={disabled || isLoading}
	on:click
>
	{#if isLoading}
		<div
			class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-gray-400 bg-opacity-60 rounded-lg"
		>
			<Spinner width={24} />
		</div>
	{/if}
	<slot>Button</slot>
</button>
