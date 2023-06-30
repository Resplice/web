<script lang="ts">
	import { Button } from '@resplice/components'
	import { mocks, type Command } from '@resplice/proto'
	import CommandSelect from '$lib/CommandSelect.svelte'
	import EditableCodeBlock from '$lib/EditableCodeBlock.svelte'

	let commandName = 'startAuth'
	let command: Command

	$: command = mocks.commands[commandName]
</script>

<div class="flex-1">
	<h1 class="text-xl font-bold mb-8">Command</h1>
	<CommandSelect bind:selectedCommand={commandName} />

	<div class="my-4">
		<EditableCodeBlock code={JSON.stringify(command, null, 2)} />
	</div>

	<Button>Send Command</Button>
</div>
