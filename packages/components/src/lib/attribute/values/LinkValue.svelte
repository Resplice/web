<script lang="ts">
	import Link from '$lib/Link.svelte'
	// import LinkPreview from '$lib/LinkPreview.svelte'
	import type { LinkValue } from '@resplice/utils'

	export let value: LinkValue
	$: link = value.url.split('://')[1]
</script>

<p class="w-full truncate h-6">
	<Link useNewWindow href={value.url}>{link}</Link>
</p>
<!-- <LinkPreview url={value.url} /> -->
