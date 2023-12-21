<script lang="ts">
	import { format, isSameDay } from 'date-fns'
	import AgendaItem from '$modules/moment/components/AgendaItem.svelte'
	import type { Moment } from '$modules/moment/moment.types'

	export let day: Date
	export let moments: Moment[]

	const date = day.toISOString().split('T')[0]
	const isToday = isSameDay(day, new Date())
</script>

{#if moments.length || isToday}
	<div class="flex space-x-2 py-2">
		<time class="sticky flex flex-col items-center w-9 overflow-hidden flex-none" datetime={date}>
			<p class="text-slate-600 text-xs tracking-wide uppercase">{format(day, 'EE')}</p>
			<p class="text-slate-800">{format(day, 'dd')}</p>
		</time>
		<div class="w-full">
			{#if isToday}
				<div class="w-full relative flex items-start">
					<div class="w-2 h-2 rounded-full bg-indigo-400"></div>
					<div class="w-full h-[2px] bg-indigo-400 mt-[2.5px]"></div>
				</div>
			{/if}
			<div class="flex-1 flex flex-col space-y-2">
				{#if moments.length}
					{#each moments as moment}
						<AgendaItem {moment} />
					{/each}
				{:else}
					<p class="text-sm text-slate-600 p-2">Nothing planned today</p>
				{/if}
			</div>
		</div>
	</div>
{/if}
