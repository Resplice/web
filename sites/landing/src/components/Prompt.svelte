<script lang="ts">
	export let prompt: string
	export let isSelected = false
</script>

{#if isSelected}
	<p class="p-4 ring-2 w-72 rounded-xl rounded-tr-none ring-brand-primary">{prompt}</p>
{:else}
	<button
		class="p-4 ring-2 w-72 rounded-xl dark:ring-zinc-700 dark:hover:ring-zinc-500 dark:hover:bg-zinc-700 transition"
		on:click
	>
		{prompt}
	</button>
{/if}
