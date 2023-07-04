<script lang="ts">
	import type { TextValue } from '$modules/attribute/attribute.types'

	export let value: TextValue
</script>

<p>{value.text}</p>
