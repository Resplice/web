import type { Attribute as BaseAttribute } from '@resplice/utils'

export type Account = {
	uuid: string
	name: string
	avatarUrl: string | null
}

export type Attribute = BaseAttribute & {
	valueId: string
	groupId: number | null
	verifiedAt: number | null
	verifyExpiry: number | null
}
