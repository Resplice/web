<script lang="ts">
	import { push } from 'svelte-spa-router'
	// import accountStore from '$modules/account/account.store'
	import { SearchIcon } from '@resplice/components'
</script>

<div class="flex-none flex justify-between w-full p-4 items-center space-x-4">
	<button
		class="flex items-center flex-1 rounded-2xl text-left h-12 text-gray-900 ring-2 ring-gray-600 focus:ring-gray-800 bg-white outline-none border-none"
		on:click={() => push('/search')}
	>
		<div class="mx-4 text-gray-600">
			<SearchIcon width={32} height={32} />
		</div>
		<p class="text-gray-500 font-semibold">Search</p>
	</button>
	<!-- <Avatar
		size="md"
		seed={$accountStore.uuid}
		src={$accountStore.avatarUrl}
		on:click={() => push('/profile')}
	/> -->
</div>
