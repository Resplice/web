<script lang="ts">
	import cx from 'clsx'
	import Spinner from '$lib/skeleton/Spinner.svelte'

	export let type: 'button' | 'reset' | 'submit' = 'button'
	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
	export let color:
		| 'brand'
		| 'brand-light'
		| 'success'
		| 'warning'
		| 'danger'
		| 'danger-light'
		| 'gray'
		| 'none' = 'brand'
	export let isLoading = false
	export let disabled = false
</script>

<button
	{type}
	class={cx(
		$$props.class,
		'relative text-lg font-semibold rounded-lg transform transition duration-75 ease-in-out focus:ring-4 focus:ring-green-200 focus:outline-none',
		{
			'bg-brand-primary text-white shadow-md': variant === 'primary' && color === 'brand',
			'bg-brand-primary text-brand-primary-dark bg-opacity-20':
				variant === 'primary' && color === 'brand-light',
			'bg-yellow-700 text-white shadow-md': variant === 'primary' && color === 'warning',
			'bg-red-700 text-white shadow-md': variant === 'primary' && color === 'danger',
			'bg-red-200 text-red-600': variant === 'primary' && color === 'danger-light',
			'bg-gray-300 text-gray-600': variant === 'primary' && color === 'gray',
			'border-2': variant === 'secondary',
			'border-brand-primary text-brand-primary':
				variant === 'secondary' && ['brand', 'brand-light'].includes(color),
			'border-yellow-700 text-yellow-700': variant === 'secondary' && color === 'warning',
			'border-red-700 text-red-700':
				variant === 'secondary' && ['danger', 'danger-light'].includes(color),
			'border-slate-800 text-slate-800': variant === 'secondary' && color === 'gray',
			'py-2 px-4': variant !== 'tertiary',
			'bg-transparent text-gray-800 px-2': variant === 'tertiary',
			'active:scale-90 active:shadow-none': !disabled && !isLoading,
			'opacity-75': disabled || isLoading
		}
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
