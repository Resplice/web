<script lang="ts">
	import AvatarGroup from '$lib/AvatarGroup.svelte'
	import Button from '$lib/Button.svelte'
	import ProgressBar from '$lib/ProgressBar.svelte'
	import DateTimeField from '$lib/form/DateTimeField.svelte'
	import Toast from '$lib/toast/Toast.svelte'
	import { ToastType } from '$lib/toast/toast.types'

	const profiles = [
		{
			seed: 'uuid1',
			source:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		{
			seed: 'uuid2',
			source:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		{
			seed: 'uuid3',
			source:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
		},
		{ seed: '018c8c57-ac4c-625a-904e-49ee05cac448', source: '' },
		{
			seed: 'uuid4',
			source:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		}
	]
</script>

<main class="w-full h-full p-8 flex flex-col space-y-8 overflow-auto">
	<div><Button>Click me</Button></div>
	<div><Button variant="secondary">Click me</Button></div>
	<div><Button variant="secondary" color="gray">Click me</Button></div>
	<ProgressBar value={65} />

	<Toast toast={{ type: ToastType.SUCCESS, title: 'New Connection', message: 'Some info' }} />

	<DateTimeField name="datetime-test" label="Enter Datetime" value="" />

	<AvatarGroup {profiles} />
</main>
