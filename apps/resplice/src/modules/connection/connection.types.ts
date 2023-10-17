import type { Attribute } from '@resplice/utils'

export type ConnectionAttribute = { connectionId: number } & Attribute

export type Connection = {
	id: string
	name: string
	alias: string | null
	handle: string
	avatarUrl: string | null
	attributes: ConnectionAttribute[]
}

export type ConnectionSummary = Pick<Connection, 'id' | 'name' | 'alias' | 'avatarUrl'>
