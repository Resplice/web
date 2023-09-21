import { writable } from 'svelte/store'
import type { Connection } from '$modules/connection/connection.types'

export type ConnectionState = Map<number, Connection>
const connectionStore = writable<ConnectionState>(new Map())

export type ConnectionStore = typeof connectionStore

export default connectionStore
