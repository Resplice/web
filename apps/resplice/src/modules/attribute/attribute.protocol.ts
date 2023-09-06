import proto from '@resplice/proto'
import { getRespliceNow } from '@resplice/utils'
import type { DB } from '$services/db'
import { type SocketCommuter, onlyAccountEvents } from '$common/workers/socketCommuter'
import { sendCommand } from '$common/protocol/helpers'
import {
	applyAttributeEvent,
	mapProtoAttributeType,
	mapProtoAttributeValue
} from '$modules/attribute/attribute.state'
import type { AttributeStore } from '$modules/attribute/attribute.store'
import type { Attribute } from '$modules/account/account.types'

export interface AttributeProtocol {
	add(payload: proto.attribute.AddAttribute): Promise<void>
	changeName(payload: proto.attribute.ChangeAttributeName): Promise<void>
	changeValue(payload: proto.attribute.ChangeAttributeValue): Promise<void>
	sort(payload: proto.attribute.SortAttribute): Promise<void>
	sendVerification(payload: proto.attribute.SendAttributeVerification): Promise<void>
	verify(payload: proto.attribute.VerifyAttribute): Promise<void>
	remove(payload: proto.attribute.RemoveAttribute): Promise<void>
}

type Dependencies = {
	cache: DB
	store: AttributeStore
	commuter: SocketCommuter
}
function attributeProtocolFactory({ cache, store, commuter }: Dependencies): AttributeProtocol {
	commuter.messages$.pipe(onlyAccountEvents()).subscribe((event) => {
		store.update((state) => applyAttributeEvent(state, event))
	})

	return {
		async add(payload) {
			await sendCommand(cache, commuter, {
				$case: 'addAttribute',
				addAttribute: payload
			})
			const placeholderAttribute = {
				id: new Date().getTime(),
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
		async changeName(payload) {
			await sendCommand(cache, commuter, {
				$case: 'changeAttributeName',
				changeAttributeName: payload
			})
			store.update((state) => {
				state.get(payload.id).name = payload.name
				return state
			})
		},
		async changeValue(payload) {
			await sendCommand(cache, commuter, {
				$case: 'changeAttributeValue',
				changeAttributeValue: payload
			})
			store.update((state) => {
				state.get(payload.id).value = mapProtoAttributeValue(payload.value)
				return state
			})
		},
		async sort(payload) {
			await sendCommand(cache, commuter, {
				$case: 'sortAttribute',
				sortAttribute: payload
			})
			store.update((state) => {
				state.get(payload.id).sortOrder = payload.sortIndex
				return state
			})
		},
		sendVerification(payload) {
			return sendCommand(cache, commuter, {
				$case: 'sendAttributeVerification',
				sendAttributeVerification: payload
			})
		},
		async verify(payload) {
			await sendCommand(cache, commuter, {
				$case: 'verifyAttribute',
				verifyAttribute: payload
			})
			store.update((state) => {
				state.get(payload.id).verifiedAt = getRespliceNow()
				return state
			})
		},
		async remove(payload) {
			await sendCommand(cache, commuter, {
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
