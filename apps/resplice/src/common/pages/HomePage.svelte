<script lang="ts">
	import Router, { location, push } from 'svelte-spa-router'
	import cx from 'clsx'
	import accountStore from '$modules/account/account.store'
	import NavItem from '$common/components/NavItem.svelte'
	import { Avatar, BalloonIcon } from '@resplice/components'
	// import NavActions from '$common/components/NavActions.svelte'
	import PartyShare from '$common/components/PartyShare.svelte'
	// import ConnectionListPage from '$modules/connection/pages/ConnectionListPage.svelte'
	import LaunchPartyInvite from '$common/components/LaunchPartyInvite.svelte'
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'

	$: isOnContacts = $location.includes('/home/party')
	$: isOnProfile = $location.includes('/home/profile')

	const routes = {
		'/home/party': LaunchPartyInvite,
		'/home/profile': ProfilePage
	}
</script>

<main class="flex flex-col w-full h-full bg-gray-100 overflow-auto">
	<div class="flex-1 overflow-auto">
		<Router {routes} />
	</div>
	<nav
		class="relative flex-none flex justify-around items-center p-2 border-t-2 border-gray-200 bg-white overflow-hidden"
		style="padding-bottom: calc(env(safe-area-inset-bottom) + 0.5rem)"
	>
		<NavItem isActive={isOnContacts} href="#/home/party">
			<BalloonIcon width={32} height={32} />
		</NavItem>
		<PartyShare />
		<!-- <NavActions /> -->
		<button
			class={cx(
				'w-12 h-12 flex items-center justify-center rounded-full no-highlight transform transition duration-75 ease-in-out active:scale-90',
				{
					'bg-brand-primary bg-opacity-20 text-brand-primary': isOnProfile,
					'bg-transparent text-gray-400': !isOnProfile
				}
			)}
			on:click={() => push('/home/profile')}
		>
			<Avatar size="sm" seed={$accountStore.uuid} src={$accountStore.avatarUrl} /></button
		>
		<!-- <NavItem isActive={isOnChats} href="#/home/chats">
			<ChatBubblesIcon width={32} height={32} />
		</NavItem> -->
	</nav>
</main>
