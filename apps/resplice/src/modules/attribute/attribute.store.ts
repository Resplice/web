import { writable } from 'svelte/store'
import { attributes as mockAttributes } from '$modules/attribute/attribute.mocks'
import type { Attribute } from '$modules/account/account.types'

export type AttributeState = Map<number, Attribute>
const attributeStore = writable<AttributeState | null>(mockAttributes)

export type AttributeStore = typeof attributeStore

export default attributeStore
