<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { push } from 'svelte-spa-router'
	import { ChevronRightIcon } from '@resplice/components'

	const dispatch = createEventDispatcher()

	export let linkTo = ''
	export let url = ''

	function handleSettingClick() {
		if (url) {
			window.open(url)
		} else if (linkTo) {
			push(linkTo)
		} else {
			dispatch('click')
		}
	}
</script>

<button
	class="flex justify-between text-gray-800 font-semibold rounded-lg p-1 active:bg-gray-100"
	on:click={handleSettingClick}
>
	<slot />
	<ChevronRightIcon width={24} height={24} />
</button>
