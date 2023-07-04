<script lang="ts">
	import parsePhoneNumber from 'libphonenumber-js'
	import { attributeTypes } from '@resplice/utils'
	import { AttributeType, type PhoneValue } from '$modules/attribute/attribute.types'

	export let value: PhoneValue

	function parsePhone(value: PhoneValue) {
		if (!value?.number) return ''

		const parsed = parsePhoneNumber(attributeTypes[AttributeType.PHONE].valueToString(value))

		if (!parsed) return value.number
		return parsed.formatNational()
	}

	$: phone = parsePhone(value)
</script>

<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
	{phone}
</span>
