<script lang="ts">
	import {
		attributeTypes,
		formatRespliceDateTime,
		formatRespliceDateTimeDistance,
		getRespliceNow
	} from '@resplice/utils'
	import { ShieldCheckmarkIcon, ShieldHalfIcon } from '@resplice/components'
	import type { Attribute } from '$modules/account/account.types'

	export let attribute: Attribute

	$: attributeType = attributeTypes[attribute.type]
</script>

{#if attributeType.verifiable}
	<div class="flex space-x-2 items-center">
		{#if attribute.verifiedAt}
			<div class="text-brand-primary">
				<ShieldCheckmarkIcon />
			</div>
		{:else}
			<div class="text-red-500">
				<ShieldHalfIcon />
			</div>
		{/if}
		<div>
			<h4 class="text-lg">
				{#if attribute.verifiedAt}
					Verified
				{:else}
					Unverified
				{/if}
			</h4>
			{#if attribute.verifiedAt}
				<p class="text-gray-700 text-sm">
					on {formatRespliceDateTime(attribute.verifiedAt, "MMMM do',' yyyy")}
				</p>
			{/if}
		</div>
	</div>

	{#if attribute.verifyExpiry}
		<div class="w-full flex flex-col space-y-2">
			<p class="text-gray-700 text-sm">
				Expiring in {formatRespliceDateTimeDistance(getRespliceNow(), attribute.verifyExpiry)}
			</p>
		</div>
	{/if}
{/if}
