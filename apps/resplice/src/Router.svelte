<script lang="ts">
	import Router, { replace } from 'svelte-spa-router'
	import RootPage from '$common/pages/RootPage.svelte'
	import ProfilePage from '$modules/account/pages/ProfilePage.svelte'
	import NotFoundPage from '$common/pages/NotFoundPage.svelte'

	export let initialUrl: string

	const routes = {
		'/': RootPage,
		// '/events': AppEventPage,
		// '/attribute/create': SelectAttributeTypePage,
		// '/attribute/create/:type': CreateAttributePage,
		// '/attribute/:id/detail': AttributeDetailPage,
		// '/attribute/:id/edit': EditAttributePage,
		// '/contact/pending/:id': PendingContactDetailPage,
		// '/contact/:id/attributes': ContactAttributesPage,
		// '/contact/:id/chat': ContactChatPage,
		// '/contact/:id/edit': EditContactPage,
		// '/contact/:id/shares': ContactSharesPage,
		// '/home/*': HomePage,
		// '/invite': SelectInviteMethodPage,
		// '/invite/bulk': BulkInvitePage,
		// '/invite/create/*': CreateInvitePage,
		// '/invite/list': InviteListPage,
		// '/invite/:id': InviteDetailPage,
		// '/invite/qr': QrInvitePage,
		// '/invite/qr/scan': ScanQrPage,
		// '/invite/qr/:id': UnlockQrPage,
		'/profile': ProfilePage,
		// '/search': SearchPage,
		// '/settings': SettingsPage,
		'*': NotFoundPage
	}

	replace(initialUrl)
</script>

<Router {routes} />
