<script lang="ts">
	import SearchHeader from '$common/components/SearchHeader.svelte'
	import ConnectionList from '$modules/connection/components/ConnectionList.svelte'
	import connectionStore from '$modules/connection/connection.store'
	import type { Connection } from '$modules/connection/connection.types'

	let connections: Connection[] = Array.from($connectionStore.values())
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<div class="h-full w-full max-w-xl m-auto flex flex-col">
	<SearchHeader />

	<div class="w-full flex-1 flex flex-col overflow-auto bg-white rounded-t-3xl">
		<ConnectionList {connections} />
	</div>
</div>
