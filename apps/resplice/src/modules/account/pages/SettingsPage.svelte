<script lang="ts">
	import { t } from 'svelte-i18n'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$common/components/Header.svelte'
	import SettingsItem from '$modules/account/components/SettingsItem.svelte'
	import ChangeName from '$modules/account/components/ChangeName.svelte'
	import Logout from '$modules/account/components/Logout.svelte'
	// import ctx from '$modules/_context/context.store'
	// import { isSupported } from '@resplice/utils'

	// function toggleDarkMode() {
	// 	ctx.update((state) => {
	// 		if (state.settings.theme === 'dark') {
	// 			state.settings.theme = 'light'
	// 			return state
	// 		}

	// 		state.settings.theme = 'dark'
	// 		return state
	// 	})
	// }

	// function toggleAppNotifications() {
	// 	ctx.update((state) => {
	// 		state.settings.appNotifications = !state.settings.appNotifications
	// 		if (state.settings.appNotifications) {
	// 			enableNotifications()
	// 		}
	// 		return state
	// 	})
	// }

	// function enableNotifications() {
	// 	if (Notification.permission === 'granted') return

	// 	Notification.requestPermission().then((permission) => {
	// 		if (permission === 'granted') {
	// 			new Notification('Thank you! Resplice notifications have been enabled.')
	// 		}
	// 	})
	// }
</script>

<Page>
	<Header title={$t('account.settings.title')} />
	<main
		class="bg-white rounded-t-3xl flex-1 w-full max-w-xl m-auto flex flex-col p-8 overflow-auto space-y-8"
	>
		<!-- <section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">{$t('account.settings.general')}</h2>
			<div class="flex flex-col space-y-4">
				<div class="p-1">
					<Toggle
						name="darkMode"
						float="right"
						label={$t('account.settings.darkMode')}
						isActive={$ctx.settings.theme === 'dark'}
						on:toggle={toggleDarkMode}
					/>
				</div>
				{#if isSupported('pushNotifications')}
					<div class="p-1">
						<Toggle
							name="appNotifications"
							float="right"
							label={$t('account.settings.appNotifications')}
							isActive={$ctx.settings.appNotifications}
							on:toggle={toggleAppNotifications}
						/>
					</div>
				{/if}
				<SettingsItem linkTo="#/invite/list">Active Invites</SettingsItem>
				<SettingsItem linkTo="#/settings/archived">Archived Contacts</SettingsItem>
			</div>
		</section> -->
		<section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">About</h2>
			<div class="flex flex-col space-y-4">
				<SettingsItem url="http://faq.resplice.com">FAQ</SettingsItem>
				<SettingsItem
					url="https://resplice.notion.site/Resplice-T-C-f86ee1053bd94e4ead8df5ab1f9555ab?pvs=4"
				>
					Terms & Conditions
				</SettingsItem>
				<SettingsItem
					url="https://docs.google.com/forms/d/e/1FAIpQLSd5B62gNdleYKRP3MCWdFM2qvs-oMNTqerZ4KGY-TYo20-s9A/viewform?usp=sf_link"
				>
					Give Feedback
				</SettingsItem>
			</div>
		</section>
		<section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">Account</h2>
			<div class="flex flex-col space-y-4">
				<ChangeName />
			</div>
		</section>
		<section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">Privacy & Security</h2>
			<div class="flex flex-col space-y-4">
				<!-- <SettingsItem linkTo="#/settings/download">Download Your Data</SettingsItem>
				<SettingsItem linkTo="#/settings/sessions">View Sessions</SettingsItem> -->
				<Logout />
			</div>
		</section>
	</main>
</Page>
