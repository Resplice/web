import { writable } from 'svelte/store'
import type { Attribute } from '$modules/account/account.types'

export type AttributeState = Map<number, Attribute>
const attributeStore = writable<AttributeState | null>(null)

export type AttributeStore = typeof attributeStore

export default attributeStore
