<script lang="ts">
	import Avatar from '$lib/Avatar.svelte'

	export let profiles: { seed: string; source: string }[]
	export let size: 'sm' | 'md' | 'lg' = 'md'
</script>

<div class="isolate flex -space-x-3 overflow-hidden">
	{#each profiles as { seed, source }, idx}
		<div style="z-index: {profiles.length - idx}">
			<Avatar {seed} src={source} {size} />
		</div>
	{/each}
</div>
