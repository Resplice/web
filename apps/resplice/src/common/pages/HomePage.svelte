<script lang="ts">
	import Router, { location } from 'svelte-spa-router'
	import { CalendarIcon, PeopleIcon } from '@resplice/components'
	import NavItem from '$common/components/NavItem.svelte'
	import NavActions from '$common/components/NavActions.svelte'
	import ConnectionListPage from '$modules/connection/pages/ConnectionListPage.svelte'
	import AgendaPage from '$modules/moment/pages/AgendaPage.svelte'

	$: isOnConnections = $location.includes('/home/connections')
	$: isOnAgenda = $location.includes('/home/agenda')

	const routes = {
		'/home/connections': ConnectionListPage,
		'/home/agenda': AgendaPage
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
		<NavItem isActive={isOnAgenda} route="/home/agenda">
			<CalendarIcon width={32} height={32} />
		</NavItem>
	</nav>
</main>
