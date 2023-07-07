<script lang="ts">
	import Button from '$lib/Button.svelte'
	import UserAvatar from '$lib/UserAvatar.svelte'
</script>

<main class="p-8 flex flex-col space-y-8">
	<div><Button>Click me</Button></div>

	<UserAvatar id={1} avatarUrl="https://i.imgur.com/uo1ajTR.jpeg" on:crop={console.log} />
</main>
