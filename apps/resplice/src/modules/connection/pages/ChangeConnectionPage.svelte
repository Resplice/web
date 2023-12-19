<script lang="ts">
	import connectionStore from '$modules/connection/connection.store'
	import { Avatar } from '@resplice/components'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import ChangeConnectionForm from '$modules/connection/components/ChangeConnectionForm.svelte'

	export let params: { id: string }
	$: id = parseInt(params.id, 10)
	$: connection = $connectionStore.get(id)!
</script>

{#if !!connection}
	<Page title={connection.name}>
		<Header {connection} />
		<main class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto space-y-4">
			<div class="w-full flex flex-col items-center justify-center space-y-2 mt-8">
				<Avatar seed={`${connection.id}`} src={connection.avatarUrl} size="xl" />
				<ConnectionName {connection} />
			</div>
			<h1 class="text-xl font-semibold text-gray-700 w-full px-8">Change Connection</h1>
			<ChangeConnectionForm {connection} />
		</main>
	</Page>
{/if}
