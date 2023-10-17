<script lang="ts">
	// import FilterList from '$modules/connection/components/FilterList.svelte'
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

<div class="w-full h-full flex flex-col overflow-auto bg-white">
	<!-- <FilterList bind:selectedFilter /> -->
	<div class="mt-2 px-2">
		<h2 class="text-3xl text-gray-700 font-semibold px-2 my-2 capitalize">Connections</h2>
	</div>
	<ConnectionList {connections} />
</div>
