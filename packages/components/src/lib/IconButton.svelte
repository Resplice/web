<script lang="ts">
	import type { IconComponent } from '$lib/common/types'
	export let Icon: IconComponent
	export let disabled: boolean = false
	export let width = 28
	export let height = 28
</script>

<button
	class="rounded-full bg-gray-200 text-gray-800 p-2 transform transition duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
	{disabled}
	on:click
	on:pointerdown
	on:pointerleave
	on:pointerup
	on:contextmenu={(e) => e.preventDefault()}
>
	<svelte:component this={Icon} {width} {height} />
</button>
