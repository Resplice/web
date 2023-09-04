<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { IconButton, BackIcon } from '@resplice/components'

	export let title: string
</script>

<nav class="flex-none flex items-center justify-start p-4">
	<IconButton Icon={BackIcon} on:click={() => pop()} />
	<h1 class="ml-4 font-semibold text-xl">{title}</h1>
</nav>
