import { writable } from 'svelte/store'
import type { Attribute } from '$modules/account/account.types'

export type AttributeState = Map<number, Attribute>
const attributeStore = writable<AttributeState>(new Map())

export type AttributeStore = typeof attributeStore

export default attributeStore
