<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { type AttributeTypeConfig, type Attribute } from '@resplice/utils'
	import { AttributeItem, LockClosedIcon, Spinner, TextField } from '@resplice/components'

	const dispatch = createEventDispatcher()
	const CODE_LENGTH = 6

	export let attributeTypeConfig: AttributeTypeConfig
	export let attribute: Attribute
	export let isLoading = false
	export let error = ''

	let phoneCode = ''

	$: {
		if (phoneCode.length >= CODE_LENGTH) {
			dispatch('code', parseInt(phoneCode, 10))
		}
	}
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
	<div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
		<h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
		<AttributeItem itemType="disabled" {attribute} />
	</div>

	<p class="mb-4">
		A code was sent to your <span class="lowercase">{attributeTypeConfig.name}</span>. Please enter
		it below:
	</p>
	<div class="w-full flex items-center">
		<div class="w-full mr-4">
			<TextField
				name="phone-code"
				label="Enter Code"
				autocomplete="one-time-code"
				inputmode="numeric"
				autofocus
				bind:value={phoneCode}
				disabled={phoneCode.length >= CODE_LENGTH && !error}
				Icon={LockClosedIcon}
				bind:error
			/>
		</div>
		{#if isLoading}
			<span class="text-brand-primary w-7 h-full pt-4">
				<Spinner />
			</span>
		{/if}
	</div>
</div>
