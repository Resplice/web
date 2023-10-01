import proto from '@resplice/proto'
import { InviteType } from '$modules/invite/invite.types'
import type { InviteState } from '$modules/invite/invite.store'

export type InviteAggregate = InviteState

export function applyInviteEvent(aggregate: InviteAggregate, event: proto.Event): InviteAggregate {
	switch (event.payload.$case) {
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

export function mapProtoInviteType(type: proto.invite.InviteType) {
	switch (type) {
		case proto.invite.InviteType.HANDLE:
			return InviteType.HANDLE
		case proto.invite.InviteType.PHONE:
			return InviteType.PHONE
		case proto.invite.InviteType.DIRECT:
			return InviteType.DIRECT
	}
}
