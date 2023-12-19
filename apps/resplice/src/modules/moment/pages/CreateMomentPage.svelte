<script lang="ts">
	import { Button, DateTimeField, TextArea, TextField } from '@resplice/components'
	import {
		dateTimeToRespliceDateTime,
		getNavigatorTimezone,
		type AddressValue
	} from '@resplice/utils'
	import useProtocol from '$common/protocol/useProtocol'
	import Header from '$common/components/Header.svelte'
	import Page from '$common/layouts/Page.svelte'
	import LocationSelector from '$modules/moment/components/LocationSelector.svelte'

	const protocol = useProtocol()

	let momentName = ''
	let momentDescription = ''
	let momentStartDatetime = ''
	let momentEndDatetime = ''
	let momentLocation: AddressValue = {
		streetAddress1: '',
		streetAddress2: '',
		locality: '',
		region: '',
		postalCode: '',
		country: 'US'
	}
	let formErrs: Record<string, string> = {}

	$: {
		momentEndDatetime = momentStartDatetime
	}

	function onMomentCreate() {
		if (!validate()) return

		const duration =
			(new Date(momentEndDatetime).getTime() - new Date(momentStartDatetime).getTime()) / 1000

		protocol.moment.create({
			name: momentName,
			description: momentDescription,
			start: dateTimeToRespliceDateTime(new Date(momentStartDatetime)),
			duration,
			timezone: getNavigatorTimezone(),
			location: momentLocation
		})
	}

	function validate() {
		formErrs = {}
		if (!momentName) {
			formErrs['moment-name'] = 'Event name is required'
		}
		if (!momentDescription) {
			formErrs['moment-description'] = 'Event description is required'
		}
		if (!momentStartDatetime) {
			formErrs['moment-start-datetime'] = 'Start date & time is required'
		}
		if (!momentEndDatetime) {
			formErrs['moment-end-datetime'] = 'End date & time is required'
		}
		if (!momentLocation.streetAddress1) {
			formErrs['address1'] = 'Street address is required'
		}
		if (!momentLocation.locality) {
			formErrs['locality'] = 'City is required'
		}
		if (!momentLocation.region) {
			formErrs['region'] = 'State is required'
		}
		if (!momentLocation.postalCode) {
			formErrs['postalCode'] = 'Postal code is required'
		}

		if (Object.keys(formErrs).length) return false

		return true
	}
</script>

<Page>
	<Header title="Create Event" />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto rounded-t-3xl bg-white">
		<form
			class="flex flex-col justify-between items-center p-8"
			on:submit|preventDefault={onMomentCreate}
		>
			<div class="w-full flex-1 space-y-6 mb-6">
				<h2 class="text-2xl text-gray-700 font-semibold px-2">Event Details</h2>
				<TextField
					name="moment-name"
					label="Event Name"
					bind:value={momentName}
					error={formErrs['moment-name']}
				/>
				<TextArea
					name="moment-description"
					label="Event Description"
					bind:value={momentDescription}
					error={formErrs['moment-description']}
				/>
				<DateTimeField
					name="moment-start-datetime"
					label="Start Date & Time"
					bind:value={momentStartDatetime}
					error={formErrs['moment-start-datetime']}
				/>
				<DateTimeField
					name="moment-end-datetime"
					label="End Date & Time"
					bind:value={momentEndDatetime}
					error={formErrs['moment-end-datetime']}
				/>
				<LocationSelector bind:location={momentLocation} errors={formErrs} />
			</div>
			<Button type="submit" label="Create Event">Create Event</Button>
		</form>
	</main>
</Page>
