<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'

	const dispatch = createEventDispatcher()

	export let message: string

	onMount(() => dispatch('mount'))
</script>

<p class="text-sm dark:text-zinc-500">{message}</p>
