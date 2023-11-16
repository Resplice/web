import proto from '@resplice/proto'
import { InviteType, type Invite } from '$modules/invite/invite.types'
import type { InviteState } from '$modules/invite/invite.store'
import { strtob64 } from '@resplice/utils'

export type InviteAggregate = InviteState

export function applyInviteEvent(aggregate: InviteAggregate, event: proto.Event): InviteAggregate {
	switch (event.payload!.$case) {
		case 'inviteCreated':
			// Delete placeholder
			aggregate.delete('0')
			aggregate.set(event.payload.inviteCreated.inviteId, {
				id: event.payload.inviteCreated.inviteId,
				type: mapProtoInviteType(event.payload.inviteCreated.value),
				name: event.payload.inviteCreated.name,
				value: mapProtoInviteValue(event.payload.inviteCreated.value)
			})
			break
	}

	return aggregate
}

// export type PendingConnectionAggregate = PendingConnectionState

// export function applyPendingConnectionEvent(
// 	aggregate: PendingConnectionAggregate,
// 	event: proto.Event
// ): PendingConnectionAggregate {
// 	switch (event.payload!.$case) {
// 		case 'pendingConnectionAdded':
// 			aggregate.set(event.payload.pendingConnectionAdded.pendingConnectionId, {
// 				id: event.payload.pendingConnectionAdded.pendingConnectionId,
// 				inviteType: mapProtoInviteType(event.payload.pendingConnectionAdded.inviteType),
// 				inviteValue: event.payload.pendingConnectionAdded.inviteValue,
// 				name: event.payload.pendingConnectionAdded.name,
// 				avatarUrl: event.payload.pendingConnectionAdded.avatarUrl,
// 				attributes: event.payload.pendingConnectionAdded.pendingAttributes.map((attr) => ({
// 					attributeType: mapProtoAttributeValueType(attr.attributeType),
// 					name: attr.name
// 				})),
// 				expiresAt: event.payload.pendingConnectionAdded.expiresAt
// 			})
// 			break
// 	}

// 	return aggregate
// }

function mapProtoInviteType(value: proto.invite.InviteCreated['value']): InviteType {
	switch (value?.$case) {
		case 'email':
			return InviteType.EMAIL
		case 'phone':
			return InviteType.PHONE
		default:
			throw new Error(`Unknown invite type`)
	}
}

function mapProtoInviteValue(value: proto.invite.InviteCreated['value']): string {
	switch (value?.$case) {
		case 'email':
			return value.email
		case 'phone':
			return value.phone
		default:
			throw new Error(`Unknown invite value`)
	}
}

export function mapProtoCommand(name: string, value: proto.invite.InviteCreated['value']): Invite {
	switch (value?.$case) {
		case 'email':
			return {
				id: strtob64(value.email),
				type: InviteType.EMAIL,
				name,
				value: value.email
			}
		case 'phone':
			return {
				id: strtob64(value.phone),
				type: InviteType.PHONE,
				name,
				value: value.phone
			}
		default:
			throw new Error(`Unknown invite type`)
	}
}
