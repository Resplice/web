import { getContext } from 'svelte'
import { type RespliceProtocol, contextKey } from '$common/protocol'

function useProtocol() {
	const context = getContext<{ protocol: RespliceProtocol }>(contextKey)
	if (!context || !context.protocol) throw Error('Resplice Protocol has not yet been initialized')
	return context.protocol
}

export default useProtocol
