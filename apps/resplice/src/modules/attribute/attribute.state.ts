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
			aggregate.set(event.payload.accountCreated.phoneId, {
				id: event.payload.accountCreated.phoneId,
				type: AttributeType.PHONE,
				name: 'Primary Phone',
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
			aggregate.set(event.payload.attributeAdded.id, {
				id: event.payload.attributeAdded.id,
				type: mapProtoAttributeValueType(event.payload.attributeAdded.value!.$case),
				name: event.payload.attributeAdded.name,
				value: mapProtoAttributeValue(event.payload.attributeAdded.value),
				sortOrder: 0,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			} as Attribute)
			break
		// TODO
		// case 'attributeValueVerified':
		// 	aggregate.get(event.payload.attributeValueVerified.id)!.verifiedAt =
		// 		event.payload.attributeValueVerified.verifiedAt
		// 	break
		case 'attributeChanged':
			aggregate.set(event.payload.attributeChanged.id, {
				...aggregate.get(event.payload.attributeChanged.id)!,
				name: event.payload.attributeChanged.name,
				value: mapProtoAttributeValue(event.payload.attributeChanged.value)
			} as Attribute)
			break
		case 'attributeRemoved':
			aggregate.delete(event.payload.attributeRemoved.id)
			break
	}

	return aggregate
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
