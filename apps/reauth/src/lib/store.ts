import { writable } from 'svelte/store'

export enum AuthStep {
	START = 'START',
	VERIFY_EMAIL = 'VERIFY_EMAIL',
	VERIFY_PHONE = 'VERIFY_PHONE',
	CREATE_ACCOUNT = 'CREATE_ACCOUNT',
	FINISHED = 'FINISHED'
}
export type InitialStore = {
	step: AuthStep.START
}
export type AuthStore = {
	step: AuthStep.VERIFY_EMAIL | AuthStep.VERIFY_PHONE | AuthStep.CREATE_ACCOUNT
	email: string
	phone: string
	accessKey: Uint8Array
}
export type FinishedStore = {
	step: AuthStep.FINISHED
	accessKey: Uint8Array
}
export type Store = InitialStore | AuthStore | FinishedStore

export const INITIAL_STORE: InitialStore = {
	step: AuthStep.START
}

export default writable<Store>(INITIAL_STORE)
