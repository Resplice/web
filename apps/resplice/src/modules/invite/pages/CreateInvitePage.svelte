<script lang="ts">
	import Router from 'svelte-spa-router'
	import { Avatar } from '@resplice/components'
	import Header from '$common/components/Header.svelte'
	// import EmailInviteForm from '$modules/invite/components/EmailInviteForm.svelte'
	import PhoneInviteForm from '$modules/invite/components/PhoneInviteForm.svelte'

	const routes = {
		// '/invite/create/email': EmailInviteForm,
		'/invite/create/phone': PhoneInviteForm
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header title="Create Invite" />
	<main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
		<div class="flex-none flex justify-center w-full mb-8">
			<Avatar seed="resplice" size="xl" src="" />
		</div>
		<Router {routes} />
	</main>
</div>
