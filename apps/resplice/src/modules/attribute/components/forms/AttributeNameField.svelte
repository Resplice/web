<script lang="ts">
	import { TextField } from '@resplice/components'

	export let name: string
	export let error: string
	export let placeholder = ''
</script>

<TextField name="attribute-name" label="Description" bind:value={name} {placeholder} {error} />
