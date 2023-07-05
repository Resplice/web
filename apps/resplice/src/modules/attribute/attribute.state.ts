import proto, { type UserEvent } from '@resplice/proto'
import { AttributeType, type AttributeValue } from '$modules/attribute/attribute.types'
import type { Attribute } from '$modules/account/account.types'
import type { AttributeState } from '$modules/attribute/attribute.store'

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
				name: 'Personal Email',
				value: { email: event.payload.email },
				sortOrder: 1,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			})
			aggregate.set(event.payload.phoneId, {
				id: event.payload.phoneId,
				type: AttributeType.PHONE,
				name: 'Personal Phone',
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
				type: mapAttributeType(event.payload.type),
				name: event.payload.name,
				value: mapAttributeValue(event.payload.value),
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
			aggregate.get(event.payload.id).type = mapAttributeType(event.payload.type)
			aggregate.get(event.payload.id).value = mapAttributeValue(event.payload.value)
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

function mapAttributeType(type: proto.attributes.types.AttributeType): AttributeType {
	return AttributeType[proto.attributes.types.attributeTypeToJSON(type)]
}

function mapAttributeValue(
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
