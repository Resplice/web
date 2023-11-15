<script lang="ts">
	import Router, { replace } from 'svelte-spa-router'
	// Meta Pages
	import RootPage from '$common/pages/RootPage.svelte'
	import HomePage from '$common/pages/HomePage.svelte'
	import SearchPage from '$modules/search/pages/SearchPage.svelte'
	import AppEventPage from '$modules/_context/pages/AppEventPage.svelte'
	import NotFoundPage from '$common/pages/NotFoundPage.svelte'
	import PartyPage from '$common/pages/PartyPage.svelte'
	// Account Pages
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'
	import SettingsPage from '$modules/account/pages/SettingsPage.svelte'
	// Attribute Pages
	import SelectAttributeTypePage from '$modules/attribute/pages/SelectAttributeTypePage.svelte'
	import AddAttributePage from '$modules/attribute/pages/AddAttributePage.svelte'
	import ChangeAttributePage from '$modules/attribute/pages/ChangeAttributePage.svelte'
	// Invite Pages
	import BulkInvitePage from '$modules/invite/pages/BulkInvitePage.svelte'
	import QrInvitePage from '$modules/invite/pages/QrInvitePage.svelte'
	import ScanQrPage from '$modules/invite/pages/ScanQrPage.svelte'
	import QrConnectionDetailPage from '$modules/invite/pages/QrConnectionDetailPage.svelte'
	// Connection Pages
	import ConnectionDetailPage from '$modules/connection/pages/ConnectionDetailPage.svelte'
	import ChangeConnectionPage from '$modules/connection/pages/ChangeConnectionPage.svelte'

	export let initialUrl = ''

	const routes = {
		'/': RootPage,
		'/app-events': AppEventPage,
		'/attribute/add': SelectAttributeTypePage,
		'/attribute/add/:type': AddAttributePage,
		'/attribute/:id/change': ChangeAttributePage,
		// '/connection/pending/:id': PendingContactDetailPage,
		'/connection/:id/details': ConnectionDetailPage,
		// '/connection/:id/chat': ContactChatPage,
		'/connection/:id/change': ChangeConnectionPage,
		// '/connection/:id/shares': ContactSharesPage,
		'/home/*': HomePage,
		// '/invite': SelectInviteMethodPage,
		'/invite/bulk': BulkInvitePage,
		// '/invite/create/*': CreateInvitePage,
		// '/invite/list': InviteListPage,
		// '/invite/:id': InviteDetailPage,
		'/invite/qr-scan': ScanQrPage,
		'/invite/qr': QrInvitePage,
		'/invite/qr/:uuid': QrConnectionDetailPage,
		'/profile': ProfilePage,
		'/search': SearchPage,
		'/settings': SettingsPage,
		'/party': PartyPage,
		'*': NotFoundPage
	}

	if (initialUrl) replace(initialUrl)
</script>

<Router {routes} />
