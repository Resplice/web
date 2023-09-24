import { writable } from 'svelte/store'
import type { Invite } from '$modules/invite/invite.types'

export type InviteState = Map<number, Invite>
const inviteStore = writable<InviteState>(new Map())

export type InviteStore = typeof inviteStore

export default inviteStore
