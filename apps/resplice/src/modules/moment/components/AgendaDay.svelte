<script lang="ts">
	import { format } from 'date-fns'
	import AgendaItem from '$modules/moment/components/AgendaItem.svelte'
	import type { Moment } from '$modules/moment/moment.types'

	export let day: Date
	export let moments: Moment[]

	const date = day.toISOString().split('T')[0]
</script>

{#if moments.length}
	<div class="flex space-x-2 py-2">
		<time class="sticky flex flex-col items-center w-9 overflow-hidden flex-none" datetime={date}>
			<p class="text-slate-600 text-xs tracking-wide uppercase">{format(day, 'EE')}</p>
			<p class="text-slate-800">{format(day, 'dd')}</p>
		</time>
		<div class="flex-1 flex flex-col space-y-2">
			{#each moments as moment}
				<AgendaItem {moment} />
			{/each}
		</div>
	</div>
{/if}
