<script lang="ts">
	import type { TextValue } from '@resplice/utils'

	export let value: TextValue
</script>

<!-- TODO: Markdown parsing -->
<p>{value.text}</p>
