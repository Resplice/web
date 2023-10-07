import proto, { type ProtoMessage } from '@resplice/proto'
import { type Fetch } from '@resplice/utils'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socket/socketCommuter'
import { sendCommand, sendCommandRequest } from '$common/protocol/helpers'
import {
	applyAttributeEvent,
	mapProtoAttributeType,
	mapProtoAttributeValue
} from '$modules/attribute/attribute.state'
import type { AttributeStore } from '$modules/attribute/attribute.store'
import type { Attribute } from '$modules/account/account.types'

export interface AttributeProtocol {
	add(payload: proto.attribute.AddAttribute): void
	verify(payload: proto.attribute.VerifyAttribute): Promise<ProtoMessage>
	change(payload: proto.attribute.ChangeAttribute, newAttribute: Attribute): void
	remove(payload: proto.attribute.RemoveAttribute): void
}

type Dependencies = {
	fetch: Fetch
	cache: DB
	store: AttributeStore
	commuter: SocketCommuter
}
function attributeProtocolFactory({
	fetch,
	store,
	cache,
	commuter
}: Dependencies): AttributeProtocol {
	commuter.messages$.pipe(onlyEvents()).subscribe((event) => {
		store.update((state) => applyAttributeEvent(state, event))
	})

	return {
		add(payload) {
			sendCommand(commuter, {
				$case: 'addAttribute',
				addAttribute: payload
			})
			const placeholderAttribute = {
				id: 0,
				type: mapProtoAttributeType(payload.value?.$case),
				name: payload.name,
				value: mapProtoAttributeValue(payload.value),
				sortOrder: 0,
				groupId: null,
				verifiedAt: null,
				verifyExpiry: null
			} as Attribute
			store.update((state) => {
				state.set(placeholderAttribute.id, placeholderAttribute)
				return state
			})
		},
		async verify(payload) {
			return await sendCommandRequest(
				{ fetch, cache },
				{
					$case: 'verifyAttribute',
					verifyAttribute: payload
				}
			)
		},
		change(payload, newAttribute) {
			sendCommand(commuter, {
				$case: 'changeAttribute',
				changeAttribute: payload
			})
			store.update((state) => {
				state.set(newAttribute.id, newAttribute)
				return state
			})
		},
		remove(payload) {
			sendCommand(commuter, {
				$case: 'removeAttribute',
				removeAttribute: payload
			})
			store.update((state) => {
				state.delete(payload.id)
				return state
			})
		}
	}
}

export default attributeProtocolFactory
