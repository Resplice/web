import proto from '@resplice/proto'
import { writable } from 'svelte/store'

export const AuthStatus = proto.auth.AuthStatus
export type Store = {
	status: proto.auth.AuthStatus
	phone: string
	persistSession: boolean
	accessToken: string | null
}

export const INITIAL_STORE: Store = {
	status: proto.auth.AuthStatus.UNRECOGNIZED,
	phone: '',
	persistSession: false,
	accessToken: null
}

export default writable<Store>(INITIAL_STORE)
