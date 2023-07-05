import proto, { type UserEvent } from '@resplice/proto'
import type { Account } from '$modules/account/account.types'

export type AccountAggregate = Account

export function applyAccountEvent(aggregate: AccountAggregate, event: UserEvent): AccountAggregate {
	switch (event.type) {
		case proto.EventType.ACCOUNT_CREATED:
			return {
				id: event.payload.accountId,
				name: event.payload.fullName,
				handle: event.payload.handle,
				avatarUrl: event.payload.avatarUrl,
				accountCreatedAt: event.timestamp
			}
		case proto.EventType.ACCOUNT_NAME_EDITED:
			return {
				...aggregate,
				name: event.payload.name
			}
		case proto.EventType.ACCOUNT_HANDLE_EDITED:
			return {
				...aggregate,
				handle: event.payload.handle
			}
		case proto.EventType.ACCOUNT_AVATAR_EDITED:
			return {
				...aggregate,
				avatarUrl: event.payload.avatarUrl
			}
	}
}
