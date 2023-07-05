import { type UserEvent } from '@resplice/proto'
import { applyAccountEvent, type AccountAggregate } from '$modules/account/account.state'
import { applyAttributeEvent, type AttributeAggregate } from '$modules/attribute/attribute.state'

export type AggregateState = {
	account: AccountAggregate
	attributes: AttributeAggregate
}

export function aggregateUserEvents(
	currentAggregate: AggregateState,
	events: UserEvent[]
): AggregateState {
	return {
		account: events.reduce(applyAccountEvent, currentAggregate.account),
		attributes: events.reduce(applyAttributeEvent, currentAggregate.attributes)
	}
}
