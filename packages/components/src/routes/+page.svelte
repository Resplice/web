<script lang="ts">
	import Button from '$lib/Button.svelte'
	import UserAvatar from '$lib/UserAvatar.svelte'
	import CredentialValue from '$lib/attribute/values/CredentialValue.svelte'
	// import Toast from '$lib/toast/Toast.svelte'
</script>

<main class="p-8 flex flex-col space-y-8">
	<div><Button>Click me</Button></div>

	<UserAvatar uuid="uuid" avatarUrl="https://i.imgur.com/uo1ajTR.jpeg" on:crop={console.log} />

	<CredentialValue value={{ identity: 'Code', passcode: 'Pass123' }} />

	<!-- <Toast /> -->
</main>
