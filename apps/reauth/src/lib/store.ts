import { writable } from 'svelte/store'

export type Store = {
	email: string
	phone: string
	accessKey: number
}

export default writable<Store | undefined>()
