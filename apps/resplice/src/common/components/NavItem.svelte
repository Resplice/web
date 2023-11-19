<script lang="ts">
	import { replace } from 'svelte-spa-router'
	import cx from 'clsx'
	export let isActive: boolean
	export let route: string
</script>

<button
	class={cx(
		'p-2 rounded-full no-highlight transform transition duration-75 ease-in-out active:scale-90',
		{
			'bg-brand-primary bg-opacity-20 text-brand-primary': isActive,
			'bg-transparent text-gray-400': !isActive
		}
	)}
	on:click={() => replace(route)}
>
	<slot />
</button>
