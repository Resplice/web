<script lang="ts">
	import Router, { location, replace } from 'svelte-spa-router'
	import cx from 'clsx'
	import { Avatar, PeopleIcon } from '@resplice/components'
	import accountStore from '$modules/account/account.store'
	import NavItem from '$common/components/NavItem.svelte'
	import NavActions from '$common/components/NavActions.svelte'
	import ConnectionListPage from '$modules/connection/pages/ConnectionListPage.svelte'
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'

	$: isOnConnections = $location.includes('/home/connections')
	$: isOnProfile = $location.includes('/home/profile')

	const routes = {
		'/home/connections': ConnectionListPage,
		'/home/profile': ProfilePage
	}
</script>

<main class="flex flex-col w-full h-full bg-gray-100 overflow-auto">
	<div class="flex-1 overflow-auto">
		<Router {routes} />
	</div>
	<nav
		class="relative flex-none flex justify-around items-center p-2 border-t-2 border-slate-200 bg-white overflow-hidden"
		style="padding-bottom: calc(env(safe-area-inset-bottom) + 0.5rem)"
	>
		<NavItem isActive={isOnConnections} route="/home/connections">
			<PeopleIcon width={32} height={32} />
		</NavItem>
		<NavActions />
		<button
			class={cx(
				'w-12 h-12 flex items-center justify-center rounded-full no-highlight transform transition duration-75 ease-in-out active:scale-90',
				{
					'bg-brand-primary bg-opacity-20 text-brand-primary': isOnProfile,
					'bg-transparent text-slate-400': !isOnProfile
				}
			)}
			on:click={() => replace('/home/profile')}
		>
			<Avatar size="sm" seed={$accountStore.uuid} src={$accountStore.avatarUrl} />
		</button>
		<!-- <NavItem isActive={isOnChats} route="/home/chats">
			<ChatBubblesIcon width={32} height={32} />
		</NavItem> -->
	</nav>
</main>
