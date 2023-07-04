import { writable } from 'svelte/store'
import type { Account } from '$modules/account/account.types'
import { mockAccount } from '$modules/account/account.mocks'

const accountStore = writable<Account | null>(mockAccount)

export type AccountStore = typeof accountStore

export default accountStore
