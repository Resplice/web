<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { t } from 'svelte-i18n'
	import { Toggle, IconButton, BackIcon } from '@resplice/components'
	import SettingsItem from '$modules/account/components/SettingsItem.svelte'
	import ctx from '$modules/_context/context.store'
	import { isSupported } from '@resplice/utils'

	function toggleDarkMode() {
		ctx.update((state) => {
			if (state.settings.theme === 'dark') {
				state.settings.theme = 'light'
				return state
			}

			state.settings.theme = 'dark'
			return state
		})
	}

	function toggleAppNotifications() {
		ctx.update((state) => {
			state.settings.appNotifications = !state.settings.appNotifications
			if (state.settings.appNotifications) {
				enableNotifications()
			}
			return state
		})
	}

	function enableNotifications() {
		if (Notification.permission === 'granted') return

		Notification.requestPermission().then((permission) => {
			if (permission === 'granted') {
				new Notification('Thank you! Resplice notifications have been enabled.')
			}
		})
	}
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-start p-4">
		<IconButton Icon={BackIcon} on:click={() => push('/profile')} />
		<h1 class="ml-4 font-semibold text-xl">{$t('account.settings.title')}</h1>
	</nav>
	<main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto space-y-8">
		<section class="border-b-2 border-gray-200 pb-4">
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
		</section>
		<section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">About</h2>
			<div class="flex flex-col space-y-4">
				<SettingsItem url="https://www.replice.com/about">About Resplice</SettingsItem>
				<SettingsItem url="https://www.replice.com/terms">Terms & Conditions</SettingsItem>
				<SettingsItem url="https://www.resplice.com/help">Help</SettingsItem>
			</div>
		</section>
		<section class="border-b-2 border-gray-200 pb-4">
			<h2 class="text-lg font-semibold text-gray-700 mb-2">Privacy & Security</h2>
			<div class="flex flex-col space-y-4">
				<SettingsItem linkTo="#/settings/download">Download Your Data</SettingsItem>
				<SettingsItem linkTo="#/settings/sessions">View Sessions</SettingsItem>
				<SettingsItem linkTo="#/settings/logout">Logout</SettingsItem>
			</div>
		</section>
	</main>
</div>
