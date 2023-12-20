<script lang="ts">
	import { eachDayOfInterval, lastDayOfWeek, format, getWeek } from 'date-fns'
	import { momentsByWeekStore } from '$modules/moment/moment.store'
	import AgendaDay from '$modules/moment/components/AgendaDay.svelte'

	export let week: Date
	$: moments = $momentsByWeekStore.get(getWeek(week)) || []

	const firstDay = week
	const lastDay = lastDayOfWeek(week)
	const days = eachDayOfInterval({ start: firstDay, end: lastDay })

	function formattedWeek() {
		const start = format(firstDay, 'MMMM dd')
		const end =
			firstDay.getMonth() === lastDay.getMonth()
				? format(lastDay, 'dd')
				: format(lastDay, 'MMMM dd')

		return `${start} - ${end}`
	}

	function getMomentsOnDay(day: Date) {
		return moments.filter((moment) => moment.startDatetime.getDate() === day.getDate())
	}
</script>

<div class="px-4 py-2">
	<p class="text-xs uppercase text-slate-600 pl-8">{formattedWeek()}</p>
	{#each days as day}
		<AgendaDay {day} moments={getMomentsOnDay(day)} />
	{/each}
</div>
