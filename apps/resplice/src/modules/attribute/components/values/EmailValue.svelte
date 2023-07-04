<script lang="ts">
	import type { EmailValue } from '$modules/attribute/attribute.types'

	export let value: EmailValue
</script>

<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
	{value.email}
</span>
