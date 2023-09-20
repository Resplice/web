<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	import accountStore from '$modules/account/account.store'
	import { UserAvatar } from '@resplice/components'
	import Header from '$modules/account/components/Header.svelte'
	import Handle from '$modules/account/components/Handle.svelte'
	import AttributeList from '$modules/account/components/AttributeList.svelte'

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
</script>

<svelte:head>
	<title>{account.name}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header {account} showUser={showUserOnHeader} on:back={() => push('/home/contacts')} />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white">
		<UserAvatar uuid={account.uuid} avatarUrl={account.avatarUrl} />
		<div class="w-full mb-4 text-center">
			<h1 class="w-full truncate text-4xl font-bold mt-2 text-center">
				{account.name}
			</h1>
			<Handle handle={account.handle} />
		</div>
		<div bind:this={scrollEl} id="scrollIntersection" class="absolute top-1/4" />
		<AttributeList />
	</main>
</div>
