import proto from '@resplice/proto'
import { InviteType } from '$modules/invite/invite.types'
import type { InviteState, PendingConnectionState } from '$modules/invite/invite.store'
import { mapProtoAttributeType } from '$modules/attribute/attribute.state'

export type InviteAggregate = InviteState

export function applyInviteEvent(aggregate: InviteAggregate, event: proto.Event): InviteAggregate {
	switch (event.payload!.$case) {
		case 'inviteCreated':
			// Delete placeholder
			aggregate.delete(0)
			aggregate.set(event.payload.inviteCreated.inviteId, {
				id: event.payload.inviteCreated.inviteId,
				type: mapProtoInviteType(event.payload.inviteCreated.type),
				name: event.payload.inviteCreated.name,
				value: event.payload.inviteCreated.value,
				shares: event.payload.inviteCreated.attributeIds
			})
			break
	}

	return aggregate
}

export type PendingConnectionAggregate = PendingConnectionState

export function applyPendingConnectionEvent(
	aggregate: PendingConnectionAggregate,
	event: proto.Event
): PendingConnectionAggregate {
	switch (event.payload!.$case) {
		case 'pendingConnectionAdded':
			aggregate.set(event.payload.pendingConnectionAdded.pendingConnectionId, {
				id: event.payload.pendingConnectionAdded.pendingConnectionId,
				inviteType: mapProtoInviteType(event.payload.pendingConnectionAdded.inviteType),
				inviteValue: event.payload.pendingConnectionAdded.inviteValue,
				name: event.payload.pendingConnectionAdded.name,
				avatarUrl: event.payload.pendingConnectionAdded.avatarUrl,
				attributes: event.payload.pendingConnectionAdded.pendingAttributes.map((attr) => ({
					attributeType: mapProtoAttributeType(attr.attributeType),
					name: attr.name
				})),
				expiresAt: event.payload.pendingConnectionAdded.expiresAt
			})
			break
	}

	return aggregate
}

export function mapProtoInviteType(type: proto.invite.InviteType) {
	switch (type) {
		case proto.invite.InviteType.QR:
			return InviteType.QR
		case proto.invite.InviteType.PHONE:
			return InviteType.PHONE
		case proto.invite.InviteType.HANDLE:
			return InviteType.HANDLE
		default:
			throw new Error(`Unknown invite type: ${type}`)
	}
}
