<script lang="ts">
	import type { TextValue } from '@resplice/utils'

	export let value: TextValue
</script>

<!-- TODO: Markdown parsing -->
<p class="w-full">{value.text}</p>
