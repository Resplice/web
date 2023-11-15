import type { Connection, ConnectionAttribute } from '$modules/connection/connection.types'
import type { Invite } from '$modules/invite/invite.types'

export type RespliceDocuments = {
	attributes: (ConnectionAttribute & { connectionId: number })[]
	connections: Omit<Connection, 'attributes'>[]
	invites: Invite[]
}
