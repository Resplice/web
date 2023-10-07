import toastStore, { type ToastStore } from '$lib/toast/toast.store'
import { type ToastParams, ToastType } from '$lib/toast/toast.types'

type ToastApi = {
	type: typeof ToastType
	new: (params: ToastParams) => void
	_getStore: () => ToastStore
}
const toast: ToastApi = {
	type: ToastType,
	new: (params) => {
		toastStore.set(params)
	},
	_getStore: () => toastStore
}

export default toast
