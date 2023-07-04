<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Button from '@resplice/components/package/Button.svelte'

	const dispatch = createEventDispatcher()
</script>

<div
	class="flex flex-col items-center space-y-4 w-full mt-4"
	style="padding-bottom: env(safe-area-inset-bottom)"
>
	<Button class="w-40" on:click={() => dispatch('save')}>Save</Button>
</div>
