<script lang="ts">
	import Skeleton from './Skeleton.svelte'

	export let count: number
	export let width: string
	export let height: string

	let skellys = Array(count)
</script>

<div class="w-full flex flex-col space-y-4">
	{#each skellys as _}
		<Skeleton variant="rect" {width} {height} />
	{/each}
</div>
