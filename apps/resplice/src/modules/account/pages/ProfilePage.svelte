<script lang="ts">
	import { onMount } from 'svelte'
	import { UserAvatar } from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'
	import accountStore from '$modules/account/account.store'
	import Header from '$modules/account/components/Header.svelte'
	// import Handle from '$modules/account/components/Handle.svelte'
	import AttributeList from '$modules/account/components/AttributeList.svelte'
	import Page from '$common/layouts/Page.svelte'

	const protocol = useProtocol()

	$: account = $accountStore

	let scrollEl: HTMLDivElement
	let showUserOnHeader = false

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			showUserOnHeader = !entry.isIntersecting
		})
		if (scrollEl) observer.observe(scrollEl)
		return () => observer.disconnect()
	})

	async function uploadAvatar(image: Blob) {
		await protocol.account.uploadAvatar(image)
	}
</script>

<Page title={account.name}>
	<Header {account} showBack showUser={showUserOnHeader} />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white">
		<UserAvatar
			uuid={account.uuid}
			avatarUrl={account.avatarUrl}
			on:crop={(e) => uploadAvatar(e.detail)}
		/>
		<div class="w-full mb-4 text-center">
			<h1 class="w-full truncate text-4xl text-gray-700 font-bold mt-2 text-center">
				{account.name}
			</h1>
			<!-- <Handle handle={account.handle} /> -->
		</div>
		<div bind:this={scrollEl} id="scrollIntersection" class="absolute top-1/4" />
		<AttributeList />
	</main>
</Page>
