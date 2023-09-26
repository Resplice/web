<script lang="ts">
	import Router, { location } from 'svelte-spa-router'
	import NavItem from '$common/components/NavItem.svelte'
	import { BalloonIcon, PersonIcon } from '@resplice/components'
	import NavActions from '$common/components/NavActions.svelte'
	// import ConnectionListPage from '$modules/connection/pages/ConnectionListPage.svelte'
	import LaunchPartyInvite from '$common/components/LaunchPartyInvite.svelte'
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'

	$: isOnContacts = $location.includes('/home/party')
	$: isOnChats = $location.includes('/home/profile')

	const routes = {
		'/home/party': LaunchPartyInvite,
		'/home/profile': ProfilePage
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto">
	<div class="flex-1 overflow-auto">
		<Router {routes} />
	</div>
	<nav
		class="relative flex-none flex justify-around items-center p-2 border-t-2 border-gray-200 overflow-hidden"
		style="padding-bottom: calc(env(safe-area-inset-bottom) + 0.5rem)"
	>
		<NavItem isActive={isOnContacts} href="#/home/party">
			<BalloonIcon width={32} height={32} />
		</NavItem>
		<NavActions />
		<NavItem isActive={isOnChats} href="#/home/profile">
			<PersonIcon width={32} height={32} />
		</NavItem>
	</nav>
</main>
