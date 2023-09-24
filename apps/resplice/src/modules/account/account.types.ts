import type { Attribute as BaseAttribute } from '@resplice/utils'

export type Account = {
	uuid: string
	name: string
	handle: string | null
	avatarUrl: string | null
}

export type Attribute = BaseAttribute & {
	groupId: number | null
	verifiedAt: number | null
	verifyExpiry: number | null
}
