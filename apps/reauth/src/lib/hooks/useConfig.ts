import { getContext } from 'svelte'
import { type Config, contextKey } from '$lib/config'

function useConfig() {
	const context = getContext<Config>(contextKey)
	if (!context) throw Error('Config has not yet been initialized')
	return context
}

export default useConfig
