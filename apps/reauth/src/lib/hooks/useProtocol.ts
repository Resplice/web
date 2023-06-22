import { getContext } from 'svelte'
import { type Protocol, contextKey } from '$lib/protocol'

function useProtocol() {
	const context = getContext<Protocol>(contextKey)
	if (!context) throw Error('Protocol has not yet been initialized')
	return context
}

export default useProtocol
