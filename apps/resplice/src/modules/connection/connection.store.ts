import { derived, writable, type Writable } from 'svelte/store'
// import { connections as mockConnections } from '$modules/connection/connection.mocks'
import type { Connection } from '$modules/connection/connection.types'
import { AttributeType } from '@resplice/utils'

export type ConnectionState = Map<number, Connection>
// const connectionStore = writable<ConnectionState>(mockConnections)
const connectionStore = writable<ConnectionState>(new Map())

export type ConnectionAttributeValue = { connectionId: number; attributeId: number; value: string }
export const connectionAttributeValuesStore = derived<
	Writable<ConnectionState>,
	ConnectionAttributeValue[]
>(connectionStore, ($connectionStore) => {
	const connectionAttributeValues: ConnectionAttributeValue[] = []

	$connectionStore.forEach((connection, connectionId) => {
		connection.attributes.forEach((attribute, attributeId) => {
			switch (attribute.type) {
				case AttributeType.EMAIL:
					connectionAttributeValues.push({
						connectionId,
						attributeId,
						value: attribute.value.email
					})
					break
				case AttributeType.PHONE:
					connectionAttributeValues.push({
						connectionId,
						attributeId,
						value: attribute.value.number
					})
					break
			}
		})
	})

	return connectionAttributeValues
})

export type ConnectionStore = typeof connectionStore

export default connectionStore
