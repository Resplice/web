<script lang="ts">
	import { mocks } from '@resplice/proto'

	export let selectedCommand: string

	const commandOptions = Object.keys(mocks.commands).map((command) => ({
		label: command,
		value: command
	}))
</script>

<select id="commands" name="commands" bind:value={selectedCommand}>
	{#each commandOptions as { label, value }}
		<option {value}>{label}</option>
	{/each}
</select>
