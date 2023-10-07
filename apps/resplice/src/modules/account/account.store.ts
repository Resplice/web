import { writable } from 'svelte/store'
import type { Account } from '$modules/account/account.types'

const accountStore = writable<Account>()

export type AccountStore = typeof accountStore

export default accountStore
