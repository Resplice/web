import { writable } from 'svelte/store'

export type Store = {
	email: string
	phone: string
	accessKey: Uint8Array
}

export default writable<Store | undefined>()
