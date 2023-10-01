<script lang="ts">
	import type { AddressValue } from '@resplice/utils'

	export let value: AddressValue
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="w-full flex flex-col">
	<p class="w-full truncate h-6">{value.streetAddress1}</p>
	{#if !!value.streetAddress2}
		<p class="w-full truncate h-6">{value.streetAddress2}</p>
	{/if}
	<p class="w-full truncate h-6">
		{value.locality
			? `${value.locality}, ${value.region} ${value.postalCode}`
			: `${value.region} ${value.postalCode}`}
	</p>
	{#if !!value.country}
		<p class="w-full truncate h-6">{value.country}</p>
	{/if}
</div>
