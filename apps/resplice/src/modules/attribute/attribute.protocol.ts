import proto from '@resplice/proto'
import { getRespliceNow } from '@resplice/utils'
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
	verify(payload: proto.attribute.VerifyAttribute): void
	change(payload: proto.attribute.ChangeAttribute, newAttribute: Attribute): void
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
		verify(payload) {
			sendCommand(commuter, {
				$case: 'verifyAttribute',
				verifyAttribute: payload
			})
			store.update((state) => {
				state.get(payload.id).verifiedAt = getRespliceNow()
				return state
			})
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
