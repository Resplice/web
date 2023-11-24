import type { ConnectionState } from '$modules/connection/connection.store'
import type { Connection } from '$modules/connection/connection.types'

export function connectionsList(connectionState: ConnectionState): Connection[] {
	return Array.from(connectionState.values()).sort((a, b) => a.name.localeCompare(b.name))
}
