<script lang="ts">
	import Button from '$lib/Button.svelte'
	import CountrySelect from '$lib/form/CountrySelect.svelte'
	import SocialSelect from '$lib/form/SocialSelect.svelte'
	import TextField from '$lib/form/TextField.svelte'

	let socialNetwork = 'instagram'
	let testValue = ''
</script>

<main class="p-8 flex flex-col space-y-8">
	<div><Button>Click me</Button></div>
	<SocialSelect bind:value={socialNetwork} />
	<CountrySelect name="country" label="Select Country" value="US" />
	<TextField
		name="test"
		label="Placeholder test"
		bind:value={testValue}
		placeholder="Does this placeholder work?"
	/>
</main>
