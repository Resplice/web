import proto from '@resplice/proto'
import type { Attribute } from '$modules/account/account.types'
import type { AttributeState } from '$modules/attribute/attribute.store'
import {
	AttributeType,
	type AttributeValue,
	type AddressValue,
	type CredentialValue,
	type EmailValue,
	type PhoneValue,
	type SocialValue
} from '@resplice/utils'

export type AttributeAggregate = AttributeState

export function applyAttributeEvent(
	aggregate: AttributeAggregate,
	event: proto.Event
): AttributeAggregate {
	if (!event.payload) throw new Error('Bad Event Payload')

	switch (event.payload.$case) {
		case 'accountCreated':
			aggregate.set(event.payload.accountCreated.primaryAttributeId, {
				id: event.payload.accountCreated.primaryAttributeId,
				type: AttributeType.PHONE,
				name: 'Primary Phone',
				// TODO: Add valueId to proto event
				valueId: 'primary-phone',
				value: { number: event.payload.accountCreated.phone, smsEnabled: true },
				sortOrder: 0,
				groupId: null,
				verifiedAt: event.payload.accountCreated.phoneVerifiedAt,
				verifyExpiry: null
			})
			break
		case 'attributeAdded':
			// Delete placeholder
			aggregate.delete(0)
			aggregate.set(event.payload.attributeAdded.attributeId, {
				id: event.payload.attributeAdded.attributeId,
				type: mapProtoAttributeValueType(event.payload.attributeAdded.value!.$case),
				name: event.payload.attributeAdded.name,
				valueId: event.payload.attributeAdded.valueId,
				value: mapProtoAttributeValue(event.payload.attributeAdded.value),
				sortOrder: 0,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			} as Attribute)
			break
		case 'attributeChanged':
			aggregate.get(event.payload.attributeChanged.attributeId)!.name =
				event.payload.attributeChanged.name
			aggregate.get(event.payload.attributeChanged.attributeId)!.value = mapProtoAttributeValue(
				event.payload.attributeChanged.value
			)
			break
		case 'attributeValueVerified':
			applyAttributeValueVerifiedEvent(aggregate, event.payload.attributeValueVerified)
			break
		case 'attributeRemoved':
			aggregate.delete(event.payload.attributeRemoved.attributeId)
			break
	}

	return aggregate
}

function applyAttributeValueVerifiedEvent(
	aggregate: AttributeAggregate,
	event: proto.attribute.AttributeValueVerified
) {
	const attribute = [...aggregate.values()].find((attr) => attr.valueId === event.valueId)
	if (!attribute) return aggregate

	aggregate.get(attribute.id)!.verifiedAt = event.verifiedAt
}

export function mapProtoAttributeValueType(
	// eslint-disable-next-line
	type: 'phone' | 'email' | 'address' | 'social' | 'credential'
): AttributeType {
	return AttributeType[type.toUpperCase() as keyof typeof AttributeType]
}

export function mapProtoAttributeType(type: proto.attribute.AttributeType): AttributeType {
	switch (type) {
		case proto.attribute.AttributeType.ADDRESS:
			return AttributeType.ADDRESS
		case proto.attribute.AttributeType.CREDENTIAL:
			return AttributeType.CREDENTIAL
		case proto.attribute.AttributeType.EMAIL:
			return AttributeType.EMAIL
		case proto.attribute.AttributeType.PHONE:
			return AttributeType.PHONE
		case proto.attribute.AttributeType.SOCIAL:
			return AttributeType.SOCIAL
		default:
			throw new Error('Invalid Attribute Type')
	}
}

export function mapProtoAttributeValue(
	value: proto.attribute.AttributeAdded['value'] | proto.attribute.AttributeChanged['value']
): AttributeValue {
	if (!value) throw new Error('Bad Attribute Value')

	switch (value.$case) {
		case 'address':
			return value.address
		case 'credential':
			return value.credential
		case 'email':
			return value.email
		case 'phone':
			return value.phone
		case 'social':
			return value.social
	}
}

export function mapAttributeValue(
	type: AttributeType,
	value: AttributeValue
): proto.attribute.AttributeAdded['value'] | proto.attribute.AttributeChanged['value'] {
	switch (type) {
		case AttributeType.ADDRESS:
			return { $case: 'address', address: value as AddressValue }
		case AttributeType.CREDENTIAL:
			return { $case: 'credential', credential: value as CredentialValue }
		case AttributeType.EMAIL:
			return { $case: 'email', email: value as EmailValue }
		case AttributeType.PHONE:
			return { $case: 'phone', phone: value as PhoneValue }
		case AttributeType.SOCIAL:
			return { $case: 'social', social: value as SocialValue }
	}
}

export function verifiableAttributeType(type: AttributeType) {
	return [AttributeType.EMAIL, AttributeType.PHONE].includes(type)
}
