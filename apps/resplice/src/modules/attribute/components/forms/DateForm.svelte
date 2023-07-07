<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { TextField, DateField } from '@resplice/components'
	import FormButtons from '$modules/attribute/components/forms/FormButtons.svelte'

	const dispatch = createEventDispatcher()

	export let name: string
	export let year: number
	export let month: number
	export let day: number
	let dateStr = (() => {
		const now = new Date()
		const paddedMonth = `0${now.getMonth() + 1}`.slice(-2)
		const paddedDate = `0${now.getDate()}`.slice(-2)
		return `${now.getFullYear()}-${paddedMonth}-${paddedDate}`
	})()

	$: {
		// make date object in user local time
		const date = new Date(`${dateStr}T00:00`)
		year = date.getFullYear()
		month = date.getMonth()
		day = date.getDate()
	}

	let formErrs: any = {}

	function onSave() {
		formErrs = {}
		if (!name) formErrs.name = 'A name is required'
		if (!dateStr) formErrs.date = 'A date is required'

		if (!Object.keys(formErrs).length) {
			dispatch('save')
		}
	}
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
	<div class="w-full flex flex-col space-y-6">
		<TextField name="attribute-name" label="Name" bind:value={name} error={formErrs.name} />
		<DateField name="date" label="Date" bind:value={dateStr} error={formErrs.date} />
	</div>

	<FormButtons on:save={onSave} />
</form>
