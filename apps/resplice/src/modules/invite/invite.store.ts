import { writable } from 'svelte/store'
import type { Invite, PendingConnection } from '$modules/invite/invite.types'

export type InviteState = Map<string, Invite>
const inviteStore = writable<InviteState>(new Map())

export type PendingConnectionState = Map<number, PendingConnection>
const pendingConnectionStore = writable<PendingConnectionState>(new Map())

const inviteStores = {
	invites: inviteStore,
	pendingConnections: pendingConnectionStore
}

export type InviteStore = typeof inviteStores

export default inviteStores
