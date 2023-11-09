import { writable } from 'svelte/store'
import {
	invites as mockInvites,
	pendingConnections as mockPendingConnections
} from '$modules/invite/invite.mocks'
import type { Invite, PendingConnection } from '$modules/invite/invite.types'

export type InviteState = Map<number, Invite>
// const inviteStore = writable<InviteState>(new Map())
const inviteStore = writable<InviteState>(mockInvites)

export type PendingConnectionState = Map<number, PendingConnection>
// const pendingConnectionStore = writable<PendingConnectionState>(new Map())
const pendingConnectionStore = writable<PendingConnectionState>(mockPendingConnections)

export type InviteStore = {
	invites: typeof inviteStore
	pendingConnections: typeof pendingConnectionStore
}

export default {
	invites: inviteStore,
	pendingConnections: pendingConnectionStore
}
