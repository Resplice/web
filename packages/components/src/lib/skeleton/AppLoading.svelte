<script lang="ts">
	import { spring } from 'svelte/motion'
	import { useInterval } from '$lib/common/hooks'
	import RespliceRoundIcon from '$lib/icons/RespliceRoundIcon.svelte'

	const y = spring(0, {
		stiffness: 0.1,
		damping: 0.5
	})

	useInterval(() => {
		if ($y > 0) y.set(0)
		else y.set(100)
	}, 500)
</script>

<div class="w-full h-full flex items-center justify-center bg-white">
	<RespliceRoundIcon style="transform: translateY({$y}px)" />
</div>
