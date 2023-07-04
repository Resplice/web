<script lang="ts">
	import type { CoordinateValue } from '$modules/attribute/attribute.types'

	export let value: CoordinateValue
</script>

<p>{value.latitude},{value.longitude}</p>
