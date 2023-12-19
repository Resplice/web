<script lang="ts">
	import { AttributeItem, Checkbox, CountrySelect, TextField } from '@resplice/components'
	import { AttributeType, type AddressValue } from '@resplice/utils'
	import attributeStore from '$modules/attribute/attribute.store'

	export let location: AddressValue
	export let errors: Record<string, string> = {}

	$: addressAttributes = Array.from($attributeStore.values()).filter(
		(attribute) => attribute.type === AttributeType.ADDRESS
	)
	$: selectedAddressId = addressAttributes.length ? addressAttributes[0].id : null
	$: showLocationForm = !addressAttributes.length

	$: {
		if (selectedAddressId) {
			location = addressAttributes.find((attribute) => attribute.id === selectedAddressId)!
				.value as AddressValue
		} else {
			location = {
				streetAddress1: '',
				streetAddress2: '',
				locality: '',
				region: '',
				postalCode: '',
				country: 'US'
			}
		}
	}
</script>

<div>
	<h2 class="text-2xl text-gray-700 font-semibold px-2 mb-4">Event Location</h2>
	{#if showLocationForm}
		<button
			type="button"
			class="underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600 mb-4"
			on:click={() => (showLocationForm = false)}
		>
			Select address from profile
		</button>
		<div class="w-full flex flex-col space-y-6 mb-4">
			<TextField
				name="address1"
				label="Street Address 1"
				autocomplete="address-line1"
				bind:value={location.streetAddress1}
				error={errors.address1}
			/>
			<TextField
				name="address2"
				label="Street Address 2"
				autocomplete="address-line2"
				bind:value={location.streetAddress2}
				error={errors.address2}
			/>
			<TextField
				name="locality"
				label="City"
				autocomplete="address-level2"
				bind:value={location.locality}
				error={errors.locality}
			/>
			<div class="w-full flex justify-between space-x-4">
				<TextField
					name="region"
					label="State"
					autocomplete="address-level1"
					bind:value={location.region}
					error={errors.region}
				/>
				<TextField
					name="postal-code"
					label="Postal Code"
					autocomplete="postal-code"
					bind:value={location.postalCode}
					error={errors.postalCode}
				/>
			</div>
			<CountrySelect
				name="country"
				label="Country"
				bind:value={location.country}
				error={errors.country}
			/>
		</div>
	{:else}
		<div class="space-y-4">
			<p>Select an address from your profile:</p>
			{#if errors.address1}
				<p class="text-sm text-red-600 h-4 my-1 mx-2">Please select an address</p>
			{/if}
			{#each addressAttributes as attribute}
				<button
					type="button"
					class="flex items-center justify-between w-full"
					on:click={() => (selectedAddressId = attribute.id)}
				>
					<AttributeItem itemType="user" {attribute} disableActions />
					<Checkbox
						name="address-{attribute.id}-selection"
						label=""
						isChecked={selectedAddressId === attribute.id}
					/>
				</button>
			{/each}
			<button
				type="button"
				class="underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600"
				on:click={() => {
					selectedAddressId = null
					showLocationForm = true
				}}
			>
				Or manually enter a location
			</button>
		</div>
	{/if}
</div>
