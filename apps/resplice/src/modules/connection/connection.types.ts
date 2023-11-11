import type { Attribute } from '@resplice/utils'

export type ConnectionAttribute = Omit<Attribute, 'sortOrder'>

export type Connection = {
	id: number
	name: string
	handle: string
	avatarUrl: string | null
	alias: string | null
	description: string | null
	attributes: ConnectionAttribute[]
	sharedAttributeIds: number[]
	isFavored: boolean
	isArchived: boolean
	connectedAt: number
}

export type ConnectionSummary = Pick<Connection, 'id' | 'name' | 'avatarUrl' | 'alias'>
