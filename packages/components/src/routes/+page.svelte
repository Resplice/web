<script lang="ts">
	import Button from '$lib/Button.svelte'
	import ProgressBar from '$lib/ProgressBar.svelte'
	import DateTimeField from '$lib/form/DateTimeField.svelte'
	import Toast from '$lib/toast/Toast.svelte'
	import { ToastType } from '$lib/toast/toast.types'
</script>

<main class="w-full h-full p-8 flex flex-col space-y-8 overflow-auto">
	<div><Button>Click me</Button></div>
	<div><Button variant="secondary">Click me</Button></div>
	<div><Button variant="secondary" color="gray">Click me</Button></div>
	<ProgressBar value={65} />

	<Toast toast={{ type: ToastType.SUCCESS, title: 'New Connection', message: 'Some info' }} />

	<DateTimeField name="datetime-test" label="Enter Datetime" value="" />
</main>
