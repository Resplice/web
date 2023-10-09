<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { capitalize, getSocialUrl, type SocialNetwork } from '@resplice/utils'
	import { TextField, SocialSelect } from '@resplice/components'
	import AttributeNameField from '$modules/attribute/components/forms/AttributeNameField.svelte'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	const dispatch = createEventDispatcher()

	export let name = ''
	export let handle = ''
	export let url = ''
	let socialNetwork: SocialNetwork | '' = ''

	$: if (socialNetwork) {
		name = capitalize(socialNetwork)
		url = getSocialUrl(socialNetwork, handle)
	}

	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!handle) formErrs.handle = 'Please enter a social handle'
		if (!url) formErrs.url = 'Please enter a social url'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
	<div class="w-full flex flex-col space-y-6">
		<SocialSelect bind:value={socialNetwork} />
		{#if socialNetwork}
			<AttributeNameField bind:name error={formErrs.name} />
		{/if}
		<TextField name="handle" label="Social ID/Handle" bind:value={handle} error={formErrs.handle} />
		{#if ['mastodon', 'website', 'other'].includes(socialNetwork)}
			<TextField
				name="url"
				label="Social URL"
				autocomplete="url"
				bind:value={url}
				error={formErrs.url}
			/>
		{/if}
	</div>

	<FormButtons on:save={onSave} />
</form>
