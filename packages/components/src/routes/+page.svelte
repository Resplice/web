<script lang="ts">
	import Button from '$lib/Button.svelte'
	import CountrySelect from '$lib/form/CountrySelect.svelte'
	import SocialSelect from '$lib/form/SocialSelect.svelte'

	let socialNetwork = 'instagram'
</script>

<main class="p-8 flex flex-col space-y-8">
	<div><Button>Click me</Button></div>
	<SocialSelect bind:value={socialNetwork} />
	<CountrySelect name="country" label="Select Country" value="US" />
</main>
