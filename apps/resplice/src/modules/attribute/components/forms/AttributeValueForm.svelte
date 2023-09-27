<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { AttributeType, type AttributeTypeConfig, type Attribute } from '@resplice/utils'
	import { AttributeItem } from '@resplice/components'
	import AddressForm from '$modules/attribute/components/forms/AddressForm.svelte'
	import CoordinateForm from '$modules/attribute/components/forms/CoordinateForm.svelte'
	import CredentialForm from '$modules/attribute/components/forms/CredentialForm.svelte'
	import EmailForm from '$modules/attribute/components/forms/EmailForm.svelte'
	import LinkForm from '$modules/attribute/components/forms/LinkForm.svelte'
	import PhoneForm from '$modules/attribute/components/forms/PhoneForm.svelte'
	import SocialForm from '$modules/attribute/components/forms/SocialForm.svelte'
	import DateForm from '$modules/attribute/components/forms/DateForm.svelte'
	import TextForm from '$modules/attribute/components/forms/TextForm.svelte'

	const dispatch = createEventDispatcher()

	export let attributeTypeConfig: AttributeTypeConfig
	export let attribute: Attribute
	let newAttribute = {
		type: attribute.type,
		value: attribute.value
	} as Attribute

	function throwInvalidType() {
		throw new Error(`${attribute.type} is an invalid Attribute Type`)
	}
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
	<div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
		<h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
		<AttributeItem itemType="disabled" {attribute} />
	</div>
	{#if newAttribute.type === AttributeType.ADDRESS}
		<AddressForm
			bind:name={attribute.name}
			bind:address1={newAttribute.value.streetAddress1}
			bind:address2={newAttribute.value.streetAddress2}
			bind:locality={newAttribute.value.locality}
			bind:region={newAttribute.value.region}
			bind:postalCode={newAttribute.value.postalCode}
			bind:country={newAttribute.value.country}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.COORDINATE}
		<CoordinateForm
			bind:name={attribute.name}
			bind:latitude={newAttribute.value.latitude}
			bind:longitude={newAttribute.value.longitude}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.CREDENTIAL}
		<CredentialForm
			bind:name={attribute.name}
			bind:identity={newAttribute.value.identity}
			bind:passcode={newAttribute.value.passcode}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.DATE_TIME}
		<DateForm
			bind:name={attribute.name}
			bind:year={newAttribute.value.year}
			bind:month={newAttribute.value.month}
			bind:day={newAttribute.value.day}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.EMAIL}
		<EmailForm
			bind:name={attribute.name}
			bind:email={newAttribute.value.email}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.LINK}
		<LinkForm
			bind:name={attribute.name}
			bind:url={newAttribute.value.url}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.PHONE}
		<PhoneForm
			bind:name={attribute.name}
			bind:number={newAttribute.value.number}
			bind:smsEnabled={newAttribute.value.smsEnabled}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.SOCIAL}
		<SocialForm
			bind:name={attribute.name}
			bind:handle={newAttribute.value.handle}
			bind:url={newAttribute.value.url}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else if newAttribute.type === AttributeType.TEXT}
		<TextForm
			bind:name={attribute.name}
			bind:text={newAttribute.value.text}
			on:save={() => dispatch('save', attribute)}
		/>
	{:else}
		{throwInvalidType()}
	{/if}
</div>
