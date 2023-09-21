import type { Attribute } from '@resplice/utils'

export type Connection = {
	id: string
	name: string
	alias: string | null
	handle: string
	avatarUrl: string
	attributes: Attribute[]
}

export type ConnectionSummary = Pick<Connection, 'id' | 'name' | 'alias' | 'avatarUrl'>
