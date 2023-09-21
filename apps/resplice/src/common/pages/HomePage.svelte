<script lang="ts">
	import Router, { location } from 'svelte-spa-router'
	import { wrap } from 'svelte-spa-router/wrap'
	import NavItem from '$common/components/NavItem.svelte'
	import { PeopleIcon, ChatBubblesIcon, ComingSoon } from '@resplice/components'
	import NavActions from '$common/components/NavActions.svelte'
	import SearchHeader from '$common/components/SearchHeader.svelte'
	import ConnectionListPage from '$modules/connection/pages/ConnectionListPage.svelte'

	$: isOnContacts = $location.includes('/home/connections')
	$: isOnChats = $location.includes('/home/chats')

	const routes = {
		'/home/connections': ConnectionListPage,
		'/home/chats': wrap({
			component: ComingSoon,
			props: { title: 'Chat' }
		})
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto">
	<SearchHeader />
	<div class="flex-1 overflow-auto">
		<Router {routes} />
	</div>
	<nav
		class="relative flex-none flex justify-around items-center p-2 border-t-2 border-gray-200 overflow-hidden"
		style="padding-bottom: calc(env(safe-area-inset-bottom) + 0.5rem)"
	>
		<NavItem isActive={isOnContacts} href="#/home/connections">
			<PeopleIcon width={32} height={32} />
		</NavItem>
		<NavActions />
		<NavItem isActive={isOnChats} href="#/home/chats">
			<ChatBubblesIcon width={32} height={32} />
		</NavItem>
	</nav>
</main>
