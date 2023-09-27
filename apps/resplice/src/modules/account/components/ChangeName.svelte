<script lang="ts">
	import useProtocol from '$common/protocol/useProtocol'
	import accountStore from '$modules/account/account.store'
	import SettingsItem from '$modules/account/components/SettingsItem.svelte'
	import { Button, Modal, PeopleIcon, TextField } from '@resplice/components'

	const protocol = useProtocol()

	let showChangeName = false
	let name = $accountStore.name
	let formErrs: Record<string, string> = {}

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!name) errs.name = 'Your full name is required'
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}

	function changeName(closeFn: () => void) {
		if (!validate()) return

		protocol.account.changeName({ name })
		closeFn()
	}
</script>

<SettingsItem on:click={() => (showChangeName = true)}>Change Name</SettingsItem>

{#if showChangeName}
	<Modal
		let:close
		on:close={() => {
			showChangeName = false
		}}
	>
		<form
			class="w-full p-8 flex flex-col space-y-4"
			on:submit|preventDefault={() => changeName(close)}
		>
			<p class="text-lg font-semibold">Enter new name</p>
			<TextField
				name="full-name"
				label="Full Name"
				autocomplete="name"
				bind:value={name}
				Icon={PeopleIcon}
				error={formErrs.name}
			/>
			<Button class="w-full" color="brand" type="submit">Save</Button>
			<Button class="w-full" color="gray" on:click={close}>Cancel</Button>
		</form>
	</Modal>
{/if}
