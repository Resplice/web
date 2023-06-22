<script lang="ts">
	import { setContext } from 'svelte'
	import { contextKey as configContextKey } from '$lib/config'
	import { protocolFactory, contextKey as protocolContextKey } from '$lib/protocol'
	import type { LayoutServerData } from './$types'
	import '../app.css'

	export let data: LayoutServerData

	setContext(configContextKey, data.config)
	setContext(protocolContextKey, protocolFactory(data.config.respliceEndpoint))
</script>

<slot />
