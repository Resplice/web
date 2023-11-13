import proto from '@resplice/proto'
import type { ConnectionState } from '$modules/connection/connection.store'
import type { ConnectionAttribute } from '$modules/connection/connection.types'
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
			aggregate.set(event.payload.connectionAdded.connectionId, {
				id: event.payload.connectionAdded.connectionId,
				name: event.payload.connectionAdded.name,
				avatarUrl: event.payload.connectionAdded.avatarUrl,
				alias: event.payload.connectionAdded.alias,
				description: event.payload.connectionAdded.description,
				attributes: event.payload.connectionAdded.attributes.map(
					(attr) =>
						({
							id: attr.attributeId,
							type: mapProtoAttributeValueType(attr.value!.$case),
							name: attr.name,
							value: mapProtoAttributeValue(attr.value),
							sortOrder: 0
						}) as ConnectionAttribute
				),
				sharedAttributeIds: event.payload.connectionAdded.sharedAttributeIds,
				isFavored: false,
				isArchived: false,
				connectedAt: 0
			})
			break
		case 'connectionNameChanged':
			aggregate.get(event.payload.connectionNameChanged.connectionId)!.name =
				event.payload.connectionNameChanged.name
			break
		case 'connectionAvatarChanged':
			aggregate.get(event.payload.connectionAvatarChanged.connectionId)!.avatarUrl =
				event.payload.connectionAvatarChanged.avatarUrl
			break
		case 'connectionAliasChanged':
			aggregate.get(event.payload.connectionAliasChanged.connectionId)!.alias =
				event.payload.connectionAliasChanged.alias
			break
		case 'connectionDescriptionChanged':
			aggregate.get(event.payload.connectionDescriptionChanged.connectionId)!.description =
				event.payload.connectionDescriptionChanged.description
			break
		case 'connectionAttributeAdded':
			aggregate.get(event.payload.connectionAttributeAdded.connectionId)!.attributes.push({
				id: event.payload.connectionAttributeAdded.attribute!.attributeId,
				type: mapProtoAttributeValueType(
					event.payload.connectionAttributeAdded.attribute!.value!.$case
				),
				name: event.payload.connectionAttributeAdded.attribute!.name,
				value: mapProtoAttributeValue(event.payload.connectionAttributeAdded.attribute!.value),
				sortOrder: 0
			} as ConnectionAttribute)
			break
		case 'connectionAttributeChanged':
			applyConnectionAttributeChangedEvent(aggregate, event.payload.connectionAttributeChanged)
			break
		case 'connectionShareAdded':
			aggregate
				.get(event.payload.connectionShareAdded.connectionId)!
				.sharedAttributeIds.push(event.payload.connectionShareAdded.attributeId)
			break
		case 'connectionShareRemoved':
			aggregate.get(event.payload.connectionShareRemoved.connectionId)!.sharedAttributeIds =
				aggregate
					.get(event.payload.connectionShareRemoved.connectionId)!
					.sharedAttributeIds.filter((id) => {
						if (event.payload!.$case !== 'connectionShareRemoved') return true
						return event.payload!.connectionShareRemoved.attributeId !== id
					})
			break
		case 'connectionFavored':
			aggregate.get(event.payload.connectionFavored.connectionId)!.isFavored = true
			break
		case 'connectionUnfavored':
			aggregate.get(event.payload.connectionUnfavored.connectionId)!.isFavored = false
			break
		case 'connectionArchived':
			aggregate.get(event.payload.connectionArchived.connectionId)!.isArchived = true
			break
		case 'connectionUnarchived':
			aggregate.get(event.payload.connectionUnarchived.connectionId)!.isArchived = false
			break
		case 'connectionRemoved':
			aggregate.delete(event.payload.connectionRemoved.connectionId)
			break
	}

	return aggregate
}

function applyConnectionAttributeChangedEvent(
	aggregate: ConnectionAggregate,
	event: proto.connection.ConnectionAttributeChanged
) {
	const attributeIdx = aggregate
		.get(event.connectionId)!
		.attributes.findIndex((attr) => attr.id === event.attribute!.attributeId)
	if (attributeIdx === -1) return aggregate

	aggregate.get(event.connectionId)!.attributes[attributeIdx] = {
		id: event.attribute!.attributeId,
		type: mapProtoAttributeValueType(event.attribute!.value!.$case),
		name: event.attribute!.name,
		value: mapProtoAttributeValue(event.attribute!.value),
		sortOrder: 0
	} as ConnectionAttribute
}
