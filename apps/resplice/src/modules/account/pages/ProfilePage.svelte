<script lang="ts">
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'
	// import attributeStore from '$modules/attribute/attribute.store'
	import accountStore from '$modules/account/account.store'
	import { UserAvatar } from '@resplice/components'
	import Header from '$modules/account/components/Header.svelte'
	// import AttributeList from '$modules/user/components/AttributeList.svelte'
	// import AddAttributeButton from '$modules/user/components/AddAttributeButton.svelte'
	// import { sortUserAttributes } from '$modules/attribute/attribute.helpers'

	// $: attributes = sortUserAttributes($attributeStore)

	$: account = $accountStore

	let scrollEl: HTMLDivElement
	let showUserOnHeader = false
	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			showUserOnHeader = !entry.isIntersecting
		})
		if (scrollEl) {
			observer.observe(scrollEl)
		}
		return () => observer.disconnect()
	})
</script>

<svelte:head>
	<title>{account?.name || 'Loading'}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header {account} showUser={showUserOnHeader} on:back={() => push('/app/home/contacts')} />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white">
		{#if !!account}
			<UserAvatar id={account.id} avatarUrl={account.avatarUrl} />
			<h1 class="w-full overflow-auto truncate text-4xl font-bold mt-2 text-center mb-4">
				{account.name}
			</h1>
			<div bind:this={scrollEl} id="scrollIntersection" class="absolute top-1/4" />
			<!-- <AttributeList {attributes} />
			<AddAttributeButton /> -->
		{/if}
	</main>
</div>
