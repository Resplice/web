import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyEvents } from '$common/workers/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import {
	applyAttributeEvent,
	mapProtoAttributeType,
	mapProtoAttributeValue
} from '$modules/attribute/attribute.state'
import type { AttributeStore } from '$modules/attribute/attribute.store'
import type { Attribute } from '$modules/account/account.types'

export interface AttributeProtocol {
	add(payload: proto.attribute.AddAttribute): void
	changeName(payload: proto.attribute.ChangeAttributeName): void
	changeValue(payload: proto.attribute.ChangeAttributeValue): void
	remove(payload: proto.attribute.RemoveAttribute): void
}

type Dependencies = {
	cache: DB
	store: AttributeStore
	commuter: SocketCommuter
}
function attributeProtocolFactory({ store, commuter }: Dependencies): AttributeProtocol {
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
				type: mapProtoAttributeType(payload.value.$case),
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
		changeName(payload) {
			sendCommand(commuter, {
				$case: 'changeAttributeName',
				changeAttributeName: payload
			})
			store.update((state) => {
				state.get(payload.id).name = payload.name
				return state
			})
		},
		changeValue(payload) {
			sendCommand(commuter, {
				$case: 'changeAttributeValue',
				changeAttributeValue: payload
			})
			store.update((state) => {
				state.get(payload.id).value = mapProtoAttributeValue(payload.value)
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
