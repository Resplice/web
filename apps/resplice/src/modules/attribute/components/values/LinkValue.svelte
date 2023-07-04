<script lang="ts">
	import Link from '@resplice/components/package/Link.svelte'
	import LinkPreview from '@resplice/components/package/LinkPreview.svelte'
	import type { LinkValue } from '$modules/attribute/attribute.types'

	export let value: LinkValue
</script>

<div>
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		<Link useNewWindow>{value.url}</Link>
	</span>
	<LinkPreview url={value.url} />
</div>
