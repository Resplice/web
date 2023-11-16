<script lang="ts">
	import proto from '@resplice/proto'
	import db from '$services/db'
	import { AppLoading, CodeBlock } from '@resplice/components'

	let events: proto.Event[] = []
	async function loadEvents() {
		const result = await db.read<proto.Event>('events')
		events = result.events
		return true
	}

	const isLoading = loadEvents()

	function getEventType(event: proto.Event) {
		return event.payload!.$case
	}
</script>

{#await isLoading}
	<AppLoading />
{:then isLoaded}
	{#if isLoaded}
		<main class="w-full h-full flex flex-col space-y-4 p-8 bg-gray-100 overflow-auto">
			{#each events as event}
				<div class="shadow rounded p-4 bg-white">
					<h2 class="text-lg font-semibold mb-4">
						{getEventType(event)}
					</h2>
					<CodeBlock>
						{JSON.stringify(event, null, 2)}
					</CodeBlock>
				</div>
			{/each}
			{#if !events.length}
				<p>No events to display</p>
			{/if}
		</main>
	{/if}
{/await}
