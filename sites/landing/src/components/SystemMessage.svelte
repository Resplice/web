<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import cx from 'clsx'

	const dispatch = createEventDispatcher()

	export let message: string
	export let ctx: TypeCtx

	onMount(() => dispatch('mount'))
</script>


<div class={cx('flex space-x-4', {
		'justify-start': ctx === 'resplice',
		'justify-end': ctx === 'person'
	})}
>
<p class="text-sm indent-16 dark:text-zinc-500">{message}</p>
</div>
