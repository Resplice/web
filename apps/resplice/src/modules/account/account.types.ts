import type { Attribute as BaseAttribute } from '$modules/attribute/attribute.types'

export type Account = {
	id: number
	name: string
	handle: string | null
	avatarUrl: string | null
	accountCreatedAt: number
}

export type Attribute = BaseAttribute & {
	groupId: number | null
	verifiedAt: number | null
	verifyExpiry: number | null
}
