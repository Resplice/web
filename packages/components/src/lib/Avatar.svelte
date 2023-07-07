<script lang="ts">
	import { createAvatar } from '@dicebear/core'
	import { thumbs } from '@dicebear/collection'
	export let seed: string
	export let src: string | null
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'

	const sizeMap = {
		xs: 24,
		sm: 36,
		md: 48,
		lg: 64,
		xl: 144,
		'2xl': 256
	}
	const svg = createAvatar(thumbs, { seed, size: sizeMap[size] })

	$: pixelSize = sizeMap[size]
</script>

<button class="bg-gray-100 rounded-full w-max overflow-clip" on:click>
	{#if src}
		<img
			class="rounded-full object-cover"
			style="width: {pixelSize}px; height: {pixelSize}px;"
			{src}
			loading="lazy"
			width={pixelSize}
			alt="User Avatar"
		/>
	{:else}
		{@html svg}
	{/if}
</button>
