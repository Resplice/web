<script lang="ts">
	import Button from '$lib/Button.svelte'
	import UserAvatar from '$lib/UserAvatar.svelte'
	import CredentialValue from '$lib/attribute/values/CredentialValue.svelte'
	import ToastProvider from '$lib/toast/ToastProvider.svelte'
	import toast from '$lib/toast/toast.api'
	import { onMount } from 'svelte'

	onMount(() => {
		toast.new({
			type: toast.type.SUCCESS,
			title: 'Hello',
			message: 'This is a toast'
		})
	})
</script>

<main class="p-8 flex flex-col space-y-8">
	<div><Button>Click me</Button></div>

	<UserAvatar uuid="uuid" avatarUrl="https://i.imgur.com/uo1ajTR.jpeg" on:crop={console.log} />

	<CredentialValue value={{ identity: 'Code', passcode: 'Pass123' }} />

	<ToastProvider />
</main>
