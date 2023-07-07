import proto from '@resplice/proto'
import { getRespliceNow } from '@resplice/utils'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyUserEvents } from '$common/workers/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import {
	applyAttributeEvent,
	mapProtoAttributeType,
	mapProtoAttributeValue
} from '$modules/attribute/attribute.state'
import type { AttributeStore } from '$modules/attribute/attribute.store'
import type { Attribute } from '$modules/account/account.types'

export interface AttributeProtocol {
	add(payload: proto.attributes.AddAttribute): Promise<void>
	editName(payload: proto.attributes.EditAttributeName): Promise<void>
	editValue(payload: proto.attributes.EditAttributeValue): Promise<void>
	sort(payload: proto.attributes.SortAttribute): Promise<void>
	sendVerification(payload: proto.attributes.SendAttributeVerification): Promise<void>
	verify(payload: proto.attributes.VerifyAttribute): Promise<void>
	delete(payload: proto.attributes.DeleteAttribute): Promise<void>
}

type Dependencies = {
	cache: DB
	store: AttributeStore
	commuter: SocketCommuter
}
function attributeProtocolFactory({ cache, store, commuter }: Dependencies): AttributeProtocol {
	commuter.messages$.pipe(onlyUserEvents()).subscribe((event) => {
		store.update((state) => applyAttributeEvent(state, event))
	})

	return {
		async add(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.ADD_ATTRIBUTE,
				payload
			})
			const placeholderAttribute = {
				id: new Date().getTime(),
				type: mapProtoAttributeType(payload.type),
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
		async editName(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ATTRIBUTE_NAME,
				payload
			})
			store.update((state) => {
				state.get(payload.id).name = payload.name
				return state
			})
		},
		async editValue(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ATTRIBUTE_VALUE,
				payload
			})
			store.update((state) => {
				state.get(payload.id).type = mapProtoAttributeType(payload.type)
				state.get(payload.id).value = mapProtoAttributeValue(payload.value)
				return state
			})
		},
		async sort(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.SORT_ATTRIBUTE,
				payload
			})
			store.update((state) => {
				state.get(payload.id).sortOrder = payload.sortIndex
				return state
			})
		},
		sendVerification(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.SEND_ATTRIBUTE_VERIFICATION,
				payload
			})
		},
		async verify(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.VERIFY_ATTRIBUTE,
				payload
			})
			store.update((state) => {
				state.get(payload.id).verifiedAt = getRespliceNow()
				return state
			})
		},
		async delete(payload) {
			await sendCommand(cache, commuter, {
				type: proto.CommandType.DELETE_ATTRIBUTE,
				payload
			})
			store.update((state) => {
				state.delete(payload.id)
				return state
			})
		}
	}
}

export default attributeProtocolFactory
