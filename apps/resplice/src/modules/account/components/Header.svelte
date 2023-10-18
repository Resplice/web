<script lang="ts">
	import { fade } from 'svelte/transition'
	import { push, pop } from 'svelte-spa-router'
	import { Avatar, IconButton, SettingsIcon, BackIcon } from '@resplice/components'
	import type { Account } from '$modules/account/account.types'

	export let account: Account
	export let showBack = false
	export let showUser = false
	export let showSettings = true
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<div class="flex items-center">
		{#if showBack}
			<IconButton Icon={BackIcon} on:click={() => pop()} />
		{/if}
		{#if showUser}
			<div class="flex items-center ml-4" transition:fade={{ delay: 50, duration: 150 }}>
				<Avatar seed={account.uuid} src={account.avatarUrl} size="sm" />
				<h2 class="ml-2 font-semibold text-xl">{account.name}</h2>
			</div>
		{/if}
	</div>
	{#if showSettings}
		<IconButton Icon={SettingsIcon} on:click={() => push('/settings')} />
	{/if}
</nav>
