<script lang="ts">
	import { push } from 'svelte-spa-router'
	import connectionStore from '$modules/connection/connection.store'

	import { Avatar } from '@resplice/components'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import ConnectionAttributes from '$modules/connection/components/ConnectionAttributes.svelte'
	// import ChatFieldLink from '$modules/chat/components/ChatFieldLink.svelte'

	export let params: { id: string }
	$: id = parseInt(params.id, 10)
	$: connection = $connectionStore.get(id)
</script>

{#if !!connection}
	<div class="flex flex-col w-full h-full bg-gray-100">
		<Header {connection} />
		<main
			class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto"
		>
			<button
				class="w-full flex flex-col items-center justify-center space-y-2 my-8"
				on:click={() => push(`/connection/${connection.id}/edit`)}
			>
				<Avatar seed={`${connection.id}`} src={connection.avatarUrl} size="xl" />
				<ConnectionName {connection} />
			</button>
			<ConnectionAttributes attributes={connection.attributes} />
			<!-- <ChatFieldLink href={`/app/contact/${connection.id}/chat`} /> -->
		</main>
	</div>
{/if}
