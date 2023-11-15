<script lang="ts">
	import { onMount } from 'svelte'
	import { push, pop } from 'svelte-spa-router'
	import { Avatar } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import connectionStore from '$modules/connection/connection.store'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$modules/connection/components/Header.svelte'
	import ConnectionName from '$modules/connection/components/ConnectionName.svelte'
	import ConnectionAttributes from '$modules/connection/components/ConnectionAttributes.svelte'
	import AttributeShareContext from '$modules/attribute/components/AttributeShareContext.svelte'
	// import ChatFieldLink from '$modules/chat/components/ChatFieldLink.svelte'

	const protocol = useProtocol()

	export let params: { id: string }
	let selectedAttributes = new Set<number>()
	let showConnectionOnHeader = false
	let scrollEl: HTMLDivElement
	$: id = parseInt(params.id, 10)
	$: connection = $connectionStore.get(id)!

	$: {
		if (!connection) {
			pop()
		} else {
			selectedAttributes = new Set(connection.sharedAttributeIds)
		}
	}

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			showConnectionOnHeader = !entry.isIntersecting
		})
		if (scrollEl) observer.observe(scrollEl)
		return () => observer.disconnect()
	})

	function onAttributeToggle(id: number) {
		if (selectedAttributes.has(id))
			protocol.connection.removeShare({ connectionId: connection.id, attributeId: id })
		else protocol.connection.addShare({ connectionId: connection.id, attributeId: id })
	}
</script>

<svelte:head>
	<title>{connection.name}</title>
</svelte:head>

{#if !!connection}
	<Page>
		<Header {connection} showConnection={showConnectionOnHeader} backPath="/home/connections" />
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
			<div bind:this={scrollEl} id="scrollIntersection" class="absolute top-1/4" />
			<ConnectionAttributes attributes={connection.attributes} />
			<!-- <ChatFieldLink href={`/app/contact/${connection.id}/chat`} /> -->
		</main>
		<footer class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-none px-8 py-4">
			<AttributeShareContext
				selected={selectedAttributes}
				on:toggle={(e) => onAttributeToggle(e.detail)}
			/>
		</footer>
	</Page>
{/if}
