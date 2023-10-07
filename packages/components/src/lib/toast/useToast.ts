import toastStore, { type ToastStore } from '$lib/toast/toast.store'
import type { ToastParams } from '$lib/toast/toast.types'

type ToastHook = {
	getStore: () => ToastStore
	add: (params: ToastParams) => void
	// remove: (toast: Toast) => void
}
function useToast(): ToastHook {
	return {
		getStore: () => toastStore,
		add: (params) => {
			toastStore.update((toasts) => [
				...toasts,
				{
					id: toasts.length,
					...params,
					created: new Date()
				}
			])
		}
		// remove: (toast) => {
		//   toastStore.update((toasts) => {
		//     const idx = toasts.findIndex((t) => t.id === toast.id)
		//     if (idx < 0) return toasts
		//     toasts.splice(idx, 1)
		//     return toasts
		//   })
		// }
	}
}

export default useToast
