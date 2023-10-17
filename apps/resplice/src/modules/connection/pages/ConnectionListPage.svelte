<script lang="ts">
	import SearchHeader from '$common/components/SearchHeader.svelte'
	import ConnectionList from '$modules/connection/components/ConnectionList.svelte'
	import connectionStore from '$modules/connection/connection.store'
	import type { Connection } from '$modules/connection/connection.types'

	let connections: Connection[] = Array.from($connectionStore.values())
	// let selectedFilter: 'all' | 'favorites' = 'all'

	// $: {
	//   if (selectedFilter === 'favorites') {
	//     connections = connections.filter((connection) => connection.isFavored)
	//   }
	// }
</script>

<svelte:head>
	<title>Contacts</title>
</svelte:head>

<div class="h-full w-full max-w-xl m-auto flex flex-col">
	<SearchHeader />

	<div class="w-full flex-1 flex flex-col overflow-auto bg-white rounded-t-3xl">
		<!-- <FilterList bind:selectedFilter /> -->
		<div class="mt-2 px-2">
			<h2 class="text-3xl text-gray-700 font-semibold px-2 my-2 capitalize">Connections</h2>
		</div>
		<ConnectionList {connections} />
	</div>
</div>
