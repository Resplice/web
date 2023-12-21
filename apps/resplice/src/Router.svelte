<script lang="ts">
	import Router, { replace, type RouteLoadedEvent } from 'svelte-spa-router'
	import useTelemetry from '$services/telemetry'
	// Meta Pages
	import RootPage from '$common/pages/RootPage.svelte'
	import InstallPage from '$common/pages/InstallPage.svelte'
	import HomePage from '$common/pages/HomePage.svelte'
	import SearchPage from '$modules/search/pages/SearchPage.svelte'
	import AppEventPage from '$modules/_context/pages/AppEventPage.svelte'
	import NotFoundPage from '$common/pages/NotFoundPage.svelte'
	// Account Pages
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'
	import SettingsPage from '$modules/account/pages/SettingsPage.svelte'
	// Attribute Pages
	import SelectAttributeTypePage from '$modules/attribute/pages/SelectAttributeTypePage.svelte'
	import AddAttributePage from '$modules/attribute/pages/AddAttributePage.svelte'
	import ChangeAttributePage from '$modules/attribute/pages/ChangeAttributePage.svelte'
	// Invite Pages
	import InviteContactsPage from '$modules/invite/pages/InviteContactsPage.svelte'
	import CreateInvitePage from '$modules/invite/pages/CreateInvitePage.svelte'
	import InviteDetailPage from '$modules/invite/pages/InviteDetailPage.svelte'
	import QrInvitePage from '$modules/invite/pages/QrInvitePage.svelte'
	import ScanQrPage from '$modules/invite/pages/ScanQrPage.svelte'
	import QrConnectionDetailPage from '$modules/invite/pages/QrConnectionDetailPage.svelte'
	import PendingConnectionDetailPage from '$modules/invite/pages/PendingConnectionDetailPage.svelte'
	// Connection Pages
	import ConnectionDetailPage from '$modules/connection/pages/ConnectionDetailPage.svelte'
	import ChangeConnectionPage from '$modules/connection/pages/ChangeConnectionPage.svelte'
	// Moment Pages
	import CreateMomentPage from '$modules/moment/pages/CreateMomentPage.svelte'

	const telemetry = useTelemetry()

	export let initialUrl = ''

	function onRouteLoaded({ detail }: RouteLoadedEvent) {
		if (detail.querystring.includes('resplice-access-token')) return

		telemetry.capture('$pageview')
	}

	const routes = {
		'/': RootPage,
		'/install': InstallPage,
		'/app-events': AppEventPage,
		'/attribute/add': SelectAttributeTypePage,
		'/attribute/add/:type': AddAttributePage,
		'/attribute/:id/change': ChangeAttributePage,
		'/connection/:id/details': ConnectionDetailPage,
		'/connection/:id/change': ChangeConnectionPage,
		'/home/*': HomePage,
		'/invite/contacts': InviteContactsPage,
		'/invite/create/*': CreateInvitePage,
		'/invite/qr-scan': ScanQrPage,
		'/invite/qr': QrInvitePage,
		'/invite/qr/:uuid': QrConnectionDetailPage,
		'/invite/pending/:id/details': PendingConnectionDetailPage,
		'/invite/:invite-id/details': InviteDetailPage,
		'/moment/create': CreateMomentPage,
		'/profile': ProfilePage,
		'/search': SearchPage,
		'/settings': SettingsPage,
		'*': NotFoundPage
	}

	if (initialUrl) replace(initialUrl)
</script>

<Router {routes} on:routeLoaded={onRouteLoaded} />
