<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { fade } from 'svelte/transition'
	import { push } from 'svelte-spa-router'
	import { BackIcon, Avatar, IconButton, SettingsIcon } from '@resplice/components'
	import type { Account } from '$modules/account/account.types'

	const dispatch = createEventDispatcher()

	export let account: Account | null
	export let showUser = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
	<div class="flex items-center">
		<IconButton Icon={BackIcon} on:click={() => dispatch('back')} />
		{#if showUser}
			<div class="flex items-center ml-4" transition:fade={{ delay: 50, duration: 150 }}>
				<Avatar seed={account.id.toString()} src={account.avatarUrl} size="sm" />
				<h2 class="ml-2 font-semibold text-xl">{account.name}</h2>
			</div>
		{/if}
	</div>
	<IconButton Icon={SettingsIcon} on:click={() => push('/settings')} />
</nav>
