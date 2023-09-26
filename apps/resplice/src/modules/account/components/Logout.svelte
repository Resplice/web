<script lang="ts">
	import useProtocol from '$common/protocol/useProtocol'
	import SettingsItem from '$modules/account/components/SettingsItem.svelte'
	import { Button, Modal } from '@resplice/components'

	const protocol = useProtocol()

	let showLogoutConfirmation = false
	let isLoading = false

	async function logout() {
		isLoading = true
		await protocol.session.logout()
	}
</script>

<SettingsItem on:click={() => (showLogoutConfirmation = true)}>Logout</SettingsItem>

{#if showLogoutConfirmation}
	<Modal
		on:close={() => {
			showLogoutConfirmation = false
		}}
	>
		<div class="space-y-4 p-4">
			<p>Are you sure you want to logout?</p>
			<Button class="w-full" color="danger-light" {isLoading} on:click={logout}>Logout</Button>
			<Button class="w-full" color="gray" on:click={() => (showLogoutConfirmation = false)}>
				Cancel
			</Button>
		</div>
	</Modal>
{/if}
