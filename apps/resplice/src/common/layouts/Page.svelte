<script lang="ts">
	export let title: string = 'Resplice'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
	<slot />
</div>
