import { writable } from 'svelte/store'
// import { connections as mockConnections } from '$modules/connection/connection.mocks'
import type { Connection } from '$modules/connection/connection.types'

export type ConnectionState = Map<number, Connection>
// const connectionStore = writable<ConnectionState>(mockConnections)
const connectionStore = writable<ConnectionState>(new Map())

export type ConnectionStore = typeof connectionStore

export default connectionStore
