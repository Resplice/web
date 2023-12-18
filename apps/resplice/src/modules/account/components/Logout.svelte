<script lang="ts">
	import useTelemetry from '$services/telemetry'
	import useProtocol from '$common/protocol/useProtocol'
	import SettingsItem from '$modules/account/components/SettingsItem.svelte'
	import { Button, Modal } from '@resplice/components'

	const telemetry = useTelemetry()
	const protocol = useProtocol()

	let showLogoutConfirmation = false
	let isLoading = false

	async function logout() {
		isLoading = true
		telemetry.reset()
		await protocol.session.logout()
	}
</script>

<SettingsItem on:click={() => (showLogoutConfirmation = true)}>Logout</SettingsItem>

{#if showLogoutConfirmation}
	<Modal
		let:close
		on:close={() => {
			showLogoutConfirmation = false
		}}
	>
		<div class="w-full space-y-4 p-8">
			<p class="text-lg font-semibold">Are you sure you want to logout?</p>
			<Button class="w-full" color="danger-light" {isLoading} on:click={logout}>Logout</Button>
			<Button class="w-full" variant="secondary" color="gray" on:click={close}>Cancel</Button>
		</div>
	</Modal>
{/if}
