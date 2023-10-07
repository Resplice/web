<script lang="ts">
	import { TextField } from '@resplice/components'

	export let name: string
	export let error: string
</script>

<TextField name="attribute-name" label="Description" bind:value={name} {error} />
