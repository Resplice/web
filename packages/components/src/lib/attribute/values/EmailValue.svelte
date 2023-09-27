<script lang="ts">
	import type { EmailValue } from '@resplice/utils'

	export let value: EmailValue
</script>

<p class="w-full truncate h-6">
	{value.email}
</p>
