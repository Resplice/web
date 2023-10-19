<script lang="ts">
	import { push, pop } from 'svelte-spa-router'
	import connectionStore from '$modules/connection/connection.store'

	import { Avatar } from '@resplice/components'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import ConnectionAttributes from '$modules/connection/components/ConnectionAttributes.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'
	// import ChatFieldLink from '$modules/chat/components/ChatFieldLink.svelte'

	export let params: { id: string }
	let selectedAttributes = new Set<number>()
	$: id = parseInt(params.id, 10)
	$: connection = $connectionStore.get(id)!

	$: {
		if (!connection) {
			pop()
		}
	}

	// TODO: Move this to connection protocol
	function onAttributeToggle(id: number) {
		const newSelected = new Set(selectedAttributes)
		if (newSelected.has(id)) newSelected.delete(id)
		else newSelected.add(id)

		selectedAttributes = newSelected
	}
</script>

{#if !!connection}
	<div class="flex flex-col w-full h-full bg-gray-100">
		<Header {connection} />
		<main
			class="bg-white rounded-t-3xl rounded-b-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto mb-4"
		>
			<button
				class="w-full flex flex-col items-center justify-center space-y-2 my-8"
				on:click={() => push(`/connection/${connection.id}/change`)}
			>
				<Avatar seed={`${connection.id}`} src={connection.avatarUrl} size="xl" />
				<ConnectionName {connection} />
			</button>
			<ConnectionAttributes attributes={connection.attributes} />
			<!-- <ChatFieldLink href={`/app/contact/${connection.id}/chat`} /> -->
		</main>
		<footer class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-none px-8 py-4">
			<AttributeShareContext
				selected={selectedAttributes}
				initializeDefault
				on:toggle={(e) => onAttributeToggle(e.detail)}
			/>
		</footer>
	</div>
{/if}
