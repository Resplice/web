import { writable } from 'svelte/store'
import { connections as mocks } from '$modules/connection/connection.mocks'
import type { Connection } from '$modules/connection/connection.types'

export type ConnectionState = Map<number, Connection>
// const connectionStore = writable<ConnectionState>(new Map())
const connectionStore = writable<ConnectionState>(mocks)

// TODO: Separate connection state store from connection account side state store

export type ConnectionStore = typeof connectionStore

export default connectionStore
