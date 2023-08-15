import proto from '@resplice/proto'
import { writable } from 'svelte/store'

export const AuthStatus = proto.auth.AuthStatus
export type Store = {
	status: proto.auth.AuthStatus
	email: string
	phone: string
	persistSession: boolean
}

export const INITIAL_STORE: Store = {
	status: proto.auth.AuthStatus.UNRECOGNIZED,
	email: '',
	phone: '',
	persistSession: false
}

export default writable<Store>(INITIAL_STORE)
