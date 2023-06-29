<script lang="ts">
	import { createAvatar } from '@dicebear/core'
	import { thumbs } from '@dicebear/collection'
	export let uuid: string
	export let src: string | null
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'

	const widthMap = {
		xs: 24,
		sm: 36,
		md: 48,
		lg: 64,
		xl: 144,
		'2xl': 256
	}
	const svg = createAvatar(thumbs, { seed: uuid, size: widthMap[size] })
</script>

<button class="bg-gray-100 rounded-full w-max overflow-clip" on:click>
	{#if src}
		<img class="rounded-full" {src} loading="lazy" width={widthMap[size]} alt={uuid} />
	{:else}
		{@html svg}
	{/if}
</button>
