import type { Attribute } from '@resplice/utils'

export type ConnectionAttribute = { connectionId: number } & Attribute

export type Connection = {
	id: number
	name: string
	alias: string | null
	handle: string
	avatarUrl: string | null
	attributes: ConnectionAttribute[]
	isFavored: boolean
	isArchived: boolean
	connectedAt: number
}

export type ConnectionSummary = Pick<Connection, 'id' | 'name' | 'alias' | 'avatarUrl'>
