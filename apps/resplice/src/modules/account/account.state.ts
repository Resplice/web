import proto from '@resplice/proto'
import type { Account } from '$modules/account/account.types'

export type AccountAggregate = Account

export function applyAccountEvent(
	aggregate: AccountAggregate,
	event: proto.Event
): AccountAggregate {
	switch (event.payload.$case) {
		case 'accountCreated':
			return {
				uuid: event.payload.accountCreated.uuid,
				name: event.payload.accountCreated.name,
				handle: event.payload.accountCreated.handle,
				avatarUrl: event.payload.accountCreated.avatarUrl
			}
		case 'accountNameChanged':
			return {
				...aggregate,
				name: event.payload.accountNameChanged.name
			}
		case 'accountHandleChanged':
			return {
				...aggregate,
				handle: event.payload.accountHandleChanged.handle
			}
		case 'accountAvatarChanged':
			return {
				...aggregate,
				avatarUrl: event.payload.accountAvatarChanged.avatarUrl
			}
	}

	return aggregate
}
