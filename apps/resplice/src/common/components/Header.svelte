<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { pop } from 'svelte-spa-router'
	import { IconButton, BackIcon, EllipsisHorizontalIcon } from '@resplice/components'

	const dispatch = createEventDispatcher()

	export let title: string = ''
	export let showContext = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<div class="flex items-center">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
		{#if title}
			<h1 class="ml-4 font-semibold text-xl">{title}</h1>
		{/if}
	</div>
	{#if showContext}
		<IconButton Icon={EllipsisHorizontalIcon} on:click={() => dispatch('context')} />
	{/if}
</nav>
