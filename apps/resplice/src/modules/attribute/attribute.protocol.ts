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
	add(payload: proto.attribute.AddAttribute): void
	changeName(payload: proto.attribute.ChangeAttributeName): void
	changeValue(payload: proto.attribute.ChangeAttributeValue): void
	sort(payload: proto.attribute.SortAttribute): void
	sendVerification(payload: proto.attribute.SendAttributeVerification): void
	verify(payload: proto.attribute.VerifyAttribute): void
	remove(payload: proto.attribute.RemoveAttribute): void
}

type Dependencies = {
	cache: DB
	store: AttributeStore
	commuter: SocketCommuter
}
function attributeProtocolFactory({ store, commuter }: Dependencies): AttributeProtocol {
	commuter.messages$.pipe(onlyAccountEvents()).subscribe((event) => {
		store.update((state) => applyAttributeEvent(state, event))
	})

	return {
		add(payload) {
			sendCommand(commuter, {
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
		sort(payload) {
			sendCommand(commuter, {
				$case: 'sortAttribute',
				sortAttribute: payload
			})
			store.update((state) => {
				state.get(payload.id).sortOrder = payload.sortIndex
				return state
			})
		},
		sendVerification(payload) {
			return sendCommand(commuter, {
				$case: 'sendAttributeVerification',
				sendAttributeVerification: payload
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
