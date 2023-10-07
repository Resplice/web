<script lang="ts">
	import type { CredentialValue } from '@resplice/utils'
	import IconButton from '$lib/IconButton.svelte'
	import EyeIcon from '$lib/icons/EyeIcon.svelte'
	import EyeOffIcon from '$lib/icons/EyeOffIcon.svelte'

	export let value: CredentialValue
	let showPasscode = false

	function toggle(e: PointerEvent | MouseEvent) {
		e.preventDefault()
		e.stopPropagation()
		e.stopImmediatePropagation()
		showPasscode = !showPasscode
	}
</script>

<div class="w-full flex flex-col">
	<p class="w-full truncate h-6">{value.identity}</p>
	<div class="flex justify-between items-center">
		{#if showPasscode}
			<p class="flex-1 text-sm font-semibold text-gray-700 overflow-auto whitespace-nowrap">
				{value.passcode}
			</p>
		{:else}
			<p class="pl-1 text-sm filter blur-sm">
				{Array(value.passcode.length).fill('*').join('')}
			</p>
		{/if}
		<IconButton
			Icon={showPasscode ? EyeOffIcon : EyeIcon}
			width={18}
			height={18}
			on:click={toggle}
		/>
	</div>
</div>
