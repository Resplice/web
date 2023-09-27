<script lang="ts">
	import parsePhoneNumber from 'libphonenumber-js'
	import { attributeTypes, AttributeType, type PhoneValue } from '@resplice/utils'

	export let value: PhoneValue

	function parsePhone(value: PhoneValue) {
		if (!value?.number) return ''

		const parsed = parsePhoneNumber(attributeTypes[AttributeType.PHONE].valueToString(value))

		if (!parsed) return value.number
		return parsed.formatNational()
	}

	$: phone = parsePhone(value)
</script>

<p class="w-full truncate h-6">
	{phone}
</p>
