<script lang="ts">
	import Link from '$lib/Link.svelte'
	import LinkPreview from '$lib/LinkPreview.svelte'
	import type { SocialValue } from '@resplice/utils'

	export let value: SocialValue
</script>

<div class="w-full pb-2">
	{#if value.url}
		<p class="w-full truncate h-6">
			<Link useNewWindow href={value.url}>{value.handle}</Link>
		</p>
		<LinkPreview url={value.url} />
	{:else}
		<p class="w-full truncate h-6">{value.handle}</p>
	{/if}
</div>
