import proto from '@resplice/proto'
import type { Attribute } from '$modules/account/account.types'
import type { AttributeState } from '$modules/attribute/attribute.store'
import {
	AttributeType,
	type AttributeValue,
	type AddressValue,
	type CoordinateValue,
	type CredentialValue,
	type DateValue,
	type EmailValue,
	type LinkValue,
	type PhoneValue,
	type SocialValue,
	type TextValue
} from '@resplice/utils'

export type AttributeAggregate = AttributeState

export function applyAttributeEvent(
	aggregate: AttributeAggregate,
	event: proto.Event
): AttributeAggregate {
	switch (event.payload.$case) {
		case 'accountCreated':
			aggregate.set(event.payload.accountCreated.emailId, {
				id: event.payload.accountCreated.emailId,
				type: AttributeType.EMAIL,
				name: 'Primary Email',
				value: { email: event.payload.accountCreated.email },
				sortOrder: 1,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			})
			aggregate.set(event.payload.accountCreated.phoneId, {
				id: event.payload.accountCreated.phoneId,
				type: AttributeType.PHONE,
				name: 'Primary Phone',
				value: { number: event.payload.accountCreated.phone, smsEnabled: true },
				sortOrder: 1,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			})
			break
		case 'attributeAdded':
			aggregate.set(event.payload.attributeAdded.id, {
				id: event.payload.attributeAdded.id,
				type: mapProtoAttributeType(event.payload.attributeAdded.value.$case),
				name: event.payload.attributeAdded.name,
				value: mapProtoAttributeValue(event.payload.attributeAdded.value),
				sortOrder: 0,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			} as Attribute)
			break
		case 'attributeNameChanged':
			aggregate.get(event.payload.attributeNameChanged.id).name =
				event.payload.attributeNameChanged.name
			break
		case 'attributeValueChanged':
			aggregate.get(event.payload.attributeValueChanged.id).value = mapProtoAttributeValue(
				event.payload.attributeValueChanged.value
			)
			break
		case 'attributeSorted':
			aggregate.get(event.payload.attributeSorted.id).sortOrder =
				event.payload.attributeSorted.sortIndex
			break
		case 'attributeVerified':
			aggregate.get(event.payload.attributeVerified.id).verifiedAt =
				event.payload.attributeVerified.verifiedAt
			break
		case 'attributeRemoved':
			aggregate.delete(event.payload.attributeRemoved.id)
			break
	}

	return aggregate
}

export function mapProtoAttributeType(
	type: proto.attribute.AddAttribute['value']['$case']
): AttributeType {
	return AttributeType[type.toUpperCase() as keyof typeof AttributeType]
}

export function mapProtoAttributeValue(
	value: proto.attribute.AttributeAdded['value'] | proto.attribute.AttributeValueChanged['value']
): AttributeValue {
	switch (value.$case) {
		case 'address':
			return value.address
		case 'coordinate':
			return value.coordinate
		case 'credential':
			return value.credential
		case 'date':
			return value.date
		case 'email':
			return value.email
		case 'link':
			return value.link
		case 'phone':
			return value.phone
		case 'social':
			return value.social
		case 'text':
			return value.text
	}
}

export function mapAttributeValue(
	type: AttributeType,
	value: AttributeValue
): proto.attribute.AttributeAdded['value'] | proto.attribute.AttributeValueChanged['value'] {
	switch (type) {
		case AttributeType.ADDRESS:
			return { $case: 'address', address: value as AddressValue }
		case AttributeType.COORDINATE:
			return { $case: 'coordinate', coordinate: value as CoordinateValue }
		case AttributeType.CREDENTIAL:
			return { $case: 'credential', credential: value as CredentialValue }
		case AttributeType.DATE:
			return { $case: 'date', date: value as DateValue }
		case AttributeType.EMAIL:
			return { $case: 'email', email: value as EmailValue }
		case AttributeType.LINK:
			return { $case: 'link', link: value as LinkValue }
		case AttributeType.PHONE:
			return { $case: 'phone', phone: value as PhoneValue }
		case AttributeType.SOCIAL:
			return { $case: 'social', social: value as SocialValue }
		case AttributeType.TEXT:
			return { $case: 'text', text: value as TextValue }
	}
}
