import { writable } from 'svelte/store'
import { attributes as mockAttributes } from '$modules/attribute/attribute.mocks'
import type { Attribute } from '$modules/account/account.types'

type AttributeRecord = Map<number, Attribute>
const attributeStore = writable<AttributeRecord>(mockAttributes)

export type AttributeStore = typeof attributeStore

export default attributeStore
