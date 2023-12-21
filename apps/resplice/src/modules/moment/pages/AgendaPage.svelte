<script lang="ts">
	import { onMount } from 'svelte'
	import { add, eachWeekOfInterval, sub, isSameWeek } from 'date-fns'
	import { createVirtualizer } from '@tanstack/svelte-virtual'
	import AgendaWeek from '$modules/moment/components/AgendaWeek.svelte'

	const now = new Date()
	const start = sub(now, { months: 6 })
	const end = add(now, { months: 6 })
	// const start = sub(now, { years: 10 })
	// const end = add(now, { years: 10 })

	const weeks = eachWeekOfInterval({ start, end })
	const nowWeekIndex = weeks.findIndex((week) => isSameWeek(week, new Date()))

	let virtualListEl: HTMLDivElement
	let agendaWeekEls: HTMLDivElement[] = []

	$: virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
		count: weeks.length,
		getScrollElement: () => virtualListEl,
		estimateSize: () => 144,
		overscan: 5
	})
	$: vItems = $virtualizer.getVirtualItems()

	$: {
		if (agendaWeekEls.length) agendaWeekEls.forEach((el) => $virtualizer.measureElement(el))
	}

	onMount(() => {
		// Somehow wrapping this in a setTimeout fixes the initial scroll issue
		setTimeout(() => {
			$virtualizer.scrollToIndex(nowWeekIndex, { align: 'start' })
		}, 0)
	})
</script>

<svelte:head>
	<title>Agenda</title>
</svelte:head>

<div class="h-full w-full max-w-xl m-auto flex flex-col space-y-4">
	<nav class="bg-white rounded-b-3xl flex-none px-8 py-4">Navigation</nav>
	<div class="flex-1 w-full overflow-auto bg-white rounded-t-3xl py-4" bind:this={virtualListEl}>
		<div class="relative w-full" style="height: {$virtualizer.getTotalSize()}px;">
			<div
				class="absolute top-0 left-0 w-full"
				style="transform: translateY({vItems[0] ? vItems[0].start : 0}px);"
			>
				{#each vItems as row (row.index)}
					<div bind:this={agendaWeekEls[row.index]} data-index={row.index}>
						<AgendaWeek week={weeks[row.index]} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
