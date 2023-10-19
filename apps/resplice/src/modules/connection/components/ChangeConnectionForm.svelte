<script lang="ts">
	import useProtocol from '$common/protocol/useProtocol'
	import { Button, TextField } from '@resplice/components'
	import type { Connection } from '$modules/connection/connection.types'

	const protocol = useProtocol()

	export let connection: Connection

	let alias = connection.alias || ''
	// let description = connection.description || ''

	async function onSubmit() {
		if (alias === connection.alias) return
		protocol.connection.changeAlias({ connectionId: connection.id, alias })
	}
</script>

<form
	class="w-full flex flex-col space-y-4 items-center justify-between flex-1"
	on:submit|preventDefault={onSubmit}
>
	<div class="flex-1 w-full px-8 flex flex-col space-y-4">
		<p class="text-sm text-gray-600 text-center">This info is only visible to you.</p>
		<TextField name="alias" label="Nickname" bind:value={alias} />
		<!-- <TextArea name="description" label="Description" bind:value={description} /> -->
	</div>
	<div class="flex-none flex flex-col p-8 space-y-4">
		<Button type="submit" class="w-40">Save</Button>
		<Button class="w-40" color="gray" on:click={() => window.history.back()}>Back</Button>
	</div>
</form>
