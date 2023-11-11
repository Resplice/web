import proto from '@resplice/proto'
import type { ConnectionState } from '$modules/connection/connection.store'
import {
	mapProtoAttributeValueType,
	mapProtoAttributeValue
} from '$modules/attribute/attribute.state'

export type ConnectionAggregate = ConnectionState

export function applyConnectionEvent(
	aggregate: ConnectionAggregate,
	event: proto.Event
): ConnectionAggregate {
	switch (event.payload!.$case) {
		case 'connectionAdded':
			aggregate.set(event.payload.connectionAdded.accountId, {
				id: event.payload.connectionAdded.accountId,
				name: event.payload.connectionAdded.name,
				handle: event.payload.connectionAdded.handle,
				avatarUrl: event.payload.connectionAdded.avatarUrl,
				alias: event.payload.connectionAdded.alias,
				description: event.payload.connectionAdded.description,
				attributes: event.payload.connectionAdded.attributes.map((attr) => ({
					...attr,
					type: mapProtoAttributeValueType(attr.value!.$case),
					value: mapProtoAttributeValue(attr.value)
				})),
				sharedAttributeIds: event.payload.connectionAdded.sharedAttributeIds,
				isFavored: false,
				isArchived: false,
				connectedAt: 0
			})
			break
		case 'connectionChanged':
			aggregate.set(event.payload.connectionChanged.accountId, {
				...aggregate.get(event.payload.connectionChanged.accountId)!,
				name: event.payload.connectionChanged.name,
				handle: event.payload.connectionChanged.handle,
				avatarUrl: event.payload.connectionChanged.avatarUrl,
				attributes: event.payload.connectionChanged.attributes.map((attr) => ({
					...attr,
					type: mapProtoAttributeValueType(attr.value!.$case),
					value: mapProtoAttributeValue(attr.value)
				}))
			})
			break
		case 'connectionAliasChanged':
			aggregate.set(event.payload.connectionAliasChanged.accountId, {
				...aggregate.get(event.payload.connectionAliasChanged.accountId)!,
				alias: event.payload.connectionAliasChanged.alias
			})
			break
		case 'connectionDescriptionChanged':
			aggregate.set(event.payload.connectionDescriptionChanged.accountId, {
				...aggregate.get(event.payload.connectionDescriptionChanged.accountId)!,
				description: event.payload.connectionDescriptionChanged.description
			})
			break
		case 'connectionShareAdded':
			aggregate.set(event.payload.connectionShareAdded.accountId, {
				...aggregate.get(event.payload.connectionShareAdded.accountId)!,
				sharedAttributeIds: [
					...aggregate.get(event.payload.connectionShareAdded.accountId)!.sharedAttributeIds,
					event.payload.connectionShareAdded.attributeId
				]
			})
			break
		case 'connectionShareRemoved':
			aggregate.set(event.payload.connectionShareRemoved.accountId, {
				...aggregate.get(event.payload.connectionShareRemoved.accountId)!,
				sharedAttributeIds: aggregate
					.get(event.payload.connectionShareRemoved.accountId)!
					.sharedAttributeIds.filter((id) => {
						if (event.payload!.$case !== 'connectionShareRemoved') return true
						return event.payload!.connectionShareRemoved.attributeId !== id
					})
			})
			break
	}

	return aggregate
}
