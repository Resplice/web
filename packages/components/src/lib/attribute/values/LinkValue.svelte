<script lang="ts">
	import Link from '$lib/Link.svelte'
	// import LinkPreview from '$lib/LinkPreview.svelte'
	import type { LinkValue } from '@resplice/utils'

	export let value: LinkValue
</script>

<p class="w-full truncate h-6">
	<Link useNewWindow href={value.url}>{value.url}</Link>
</p>
<!-- <LinkPreview url={value.url} /> -->
