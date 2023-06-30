<script lang="ts">
	import Command from '$lib/Command.svelte'
	import Event from '$lib/Event.svelte'
</script>

<div class="flex flex-col h-full w-full">
	<nav class="flex-none w-full px-8 py-4 border-b-2">
		<h1 class="text-2xl font-bold">Resplice Overseer</h1>
	</nav>
	<main class="flex-1 w-full p-8 flex space-x-8">
		<Command />
		<Event />
	</main>
</div>
