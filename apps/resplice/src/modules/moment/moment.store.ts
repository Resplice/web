import { writable } from 'svelte/store'
import type { Moment } from '$modules/moment/moment.types'

export type MomentState = Map<number, Moment>
const momentStore = writable<MomentState>(new Map())

export type MomentStore = typeof momentStore

export default momentStore
