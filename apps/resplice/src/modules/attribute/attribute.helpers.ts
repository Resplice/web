import { determineSmsCapability } from '@resplice/utils'
import { parsePhoneNumber, type PhoneNumber } from 'libphonenumber-js'
import type { PhoneValue } from '@resplice/utils'
import type { Attribute } from '$modules/account/account.types'

export function sortUserAttributes(attributes: Map<number, Attribute>) {
	return [...attributes.values()].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function phoneNumberToValue(phone: PhoneNumber): PhoneValue {
	return {
		number: phone.number,
		smsEnabled: determineSmsCapability(phone.getType())
	}
}

export function phoneValueToNumber(phone: PhoneValue): PhoneNumber {
	const phoneNumber = parsePhoneNumber(phone.number)
	if (!phoneNumber) throw new Error(`${phone.number} could not be parsed as a valid phone number`)

	return phoneNumber
}
