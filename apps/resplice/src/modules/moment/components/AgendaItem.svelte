<script lang="ts">
	import { format, formatDistance, addMinutes } from 'date-fns'
	import { push } from 'svelte-spa-router'
	import type { Moment } from '$modules/moment/moment.types'

	export let moment: Moment

	function formatTime() {
		const startFormatted = format(moment.startDatetime, 'hh:mm aa')
		const endDatetime = addMinutes(moment.startDatetime, moment.duration)
		const distanceFormatted = formatDistance(moment.startDatetime, endDatetime)
		return `${startFormatted} • ${distanceFormatted}`
	}
</script>

<button
	class="w-full overflow-hidden bg-brand-primary bg-opacity-20 rounded-md p-4 border-slate-600 text-left"
	on:click={() => push(`/moment/${moment.id}`)}
>
	<p class="font-semibold text-brand-primary-dark">{moment.name}</p>
	<time class="text-slate-800">{formatTime()} long</time>
</button>
