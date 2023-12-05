import proto from '@resplice/proto'
import { strtob64 } from '@resplice/utils'
import { InviteType, type Invite } from '$modules/invite/invite.types'
import type { InviteState, PendingConnectionState } from '$modules/invite/invite.store'
import { mapProtoAttributeType } from '$modules/attribute/attribute.state'

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
		case 'inviteDeleted':
			aggregate.delete(event.payload.inviteDeleted.inviteId)
			break
		case 'connectionAdded':
			aggregate.delete(event.payload.connectionAdded.inviteId)
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
			aggregate.set(pendingConnectionKey(event.payload.pendingConnectionAdded), {
				connectionId: event.payload.pendingConnectionAdded.connectionId,
				inviteId: event.payload.pendingConnectionAdded.inviteId,
				inviteType: mapProtoInviteType(event.payload.pendingConnectionAdded.inviteValue),
				inviteValue: mapProtoInviteValue(event.payload.pendingConnectionAdded.inviteValue),
				name: event.payload.pendingConnectionAdded.name,
				avatarUrl: event.payload.pendingConnectionAdded.avatarUrl,
				alias: null,
				description: null,
				pendingAttributes: event.payload.pendingConnectionAdded.pendingAttributes.map((attr) => ({
					attributeType: mapProtoAttributeType(attr.attributeType),
					name: attr.name
				}))
			})
			break
		case 'pendingConnectionRemoved':
			aggregate.delete(pendingConnectionKey(event.payload.pendingConnectionRemoved))
			break
		case 'connectionAdded':
			aggregate.delete(pendingConnectionKey(event.payload.connectionAdded))
			break
	}

	return aggregate
}

type PendingConnectionKey = {
	connectionId: number
	inviteId: string
}
export function pendingConnectionKey({ connectionId, inviteId }: PendingConnectionKey) {
	return `${connectionId}-${inviteId}`
}

function mapProtoInviteType(value: proto.invite.InviteCreated['value']): InviteType {
	switch (value?.$case) {
		// case 'email':
		// 	return InviteType.EMAIL
		case 'phone':
			return InviteType.PHONE
		default:
			throw new Error(`Unknown invite type`)
	}
}

function mapProtoInviteValue(value: proto.invite.InviteCreated['value']): string {
	switch (value?.$case) {
		// case 'email':
		// 	return value.email
		case 'phone':
			return value.phone
		default:
			throw new Error(`Unknown invite value`)
	}
}

export function mapProtoCommand(name: string, value: proto.invite.InviteCreated['value']): Invite {
	switch (value?.$case) {
		// case 'email':
		// 	return {
		// 		id: strtob64(value.email),
		// 		type: InviteType.EMAIL,
		// 		name,
		// 		value: value.email
		// 	}
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
