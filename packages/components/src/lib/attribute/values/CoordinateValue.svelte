<script lang="ts">
	import type { CoordinateValue } from '@resplice/utils'

	export let value: CoordinateValue
</script>

<p class="w-full truncate">{value.latitude},{value.longitude}</p>
