import proto from '@resplice/proto'
import type { DB } from '$services/db'
import { sendCommand } from '$common/protocol/helpers'
import type { AttributeStore } from '$modules/attribute/attribute.store'
import { type SocketCommuter, onlyReceivedMessages } from '$common/workers/socketCommuter'

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
	// commuter.events$.pipe(onlyReceivedMessages()).subscribe((event) => {
	// 	switch (event.type) {
	// 		case proto.EventType.ATTRIBUTE_STATE:
	// 			if (event.data.attributes) {
	// 				store.update((state) =>
	// 					processRecords(
	// 						state,
	// 						'id',
	// 						event.data.attributes as any,
	// 						event.data.expiredAttributeIds
	// 					)
	// 				)
	// 			}
	// 			break
	// 	}
	// })

	// TODO: Do optimistic updates
	return {
		add(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.ADD_ATTRIBUTE,
				payload
			})
		},
		editName(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ATTRIBUTE_NAME,
				payload
			})
		},
		editValue(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.EDIT_ATTRIBUTE_VALUE,
				payload
			})
		},
		sort(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.SORT_ATTRIBUTE,
				payload
			})
		},
		sendVerification(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.SEND_ATTRIBUTE_VERIFICATION,
				payload
			})
		},
		verify(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.VERIFY_ATTRIBUTE,
				payload
			})
		},
		delete(payload) {
			return sendCommand(cache, commuter, {
				type: proto.CommandType.DELETE_ATTRIBUTE,
				payload
			})
		}
	}
}

export default attributeProtocolFactory
