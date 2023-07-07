import proto, { type UserEvent } from '@resplice/proto'
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
	event: UserEvent
): AttributeAggregate {
	switch (event.type) {
		case proto.EventType.ACCOUNT_CREATED:
			aggregate.set(event.payload.emailId, {
				id: event.payload.emailId,
				type: AttributeType.EMAIL,
				name: 'Primary Email',
				value: { email: event.payload.email },
				sortOrder: 1,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			})
			aggregate.set(event.payload.phoneId, {
				id: event.payload.phoneId,
				type: AttributeType.PHONE,
				name: 'Primary Phone',
				value: { number: event.payload.phone, smsEnabled: true },
				sortOrder: 1,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			})
			break
		case proto.EventType.ATTRIBUTE_ADDED:
			aggregate.set(event.payload.id, {
				id: event.payload.id,
				type: mapProtoAttributeType(event.payload.type),
				name: event.payload.name,
				value: mapProtoAttributeValue(event.payload.value),
				sortOrder: 0,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			} as Attribute)
			break
		case proto.EventType.ATTRIBUTE_NAME_EDITED:
			aggregate.get(event.payload.id).name = event.payload.name
			break
		case proto.EventType.ATTRIBUTE_VALUE_EDITED:
			aggregate.get(event.payload.id).type = mapProtoAttributeType(event.payload.type)
			aggregate.get(event.payload.id).value = mapProtoAttributeValue(event.payload.value)
			break
		case proto.EventType.ATTRIBUTE_SORTED:
			aggregate.get(event.payload.id).sortOrder = event.payload.sortIndex
			break
		case proto.EventType.ATTRIBUTE_VERIFIED:
			aggregate.get(event.payload.id).verifiedAt = event.payload.verifiedAt
			break
		case proto.EventType.ATTRIBUTE_DELETED:
			aggregate.delete(event.payload.id)
			break
	}

	return aggregate
}

export function mapProtoAttributeType(type: proto.attributes.types.AttributeType): AttributeType {
	return AttributeType[proto.attributes.types.attributeTypeToJSON(type)]
}

export function mapAttributeType(type: AttributeType): proto.attributes.types.AttributeType {
	return proto.attributes.types.attributeTypeFromJSON(type)
}

export function mapProtoAttributeValue(
	value: proto.attributes.AttributeAdded['value'] | proto.attributes.AttributeValueEdited['value']
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
): proto.attributes.AttributeAdded['value'] | proto.attributes.AttributeValueEdited['value'] {
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
