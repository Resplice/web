<script lang="ts">
	import Button from '$lib/Button.svelte'
	import ProgressBar from '$lib/ProgressBar.svelte'
</script>

<main class="w-full h-full p-8 flex flex-col space-y-8 overflow-auto">
	<div><Button>Click me</Button></div>
	<ProgressBar value={65} />
</main>
