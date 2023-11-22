import type { AttributeType } from '@resplice/utils'

export enum InviteType {
	PHONE = 'PHONE',
	EMAIL = 'EMAIL'
}

type BaseInvite = {
	id: string
	type: InviteType
	name: string
	value: string
}

// export type HandleInvite = BaseInvite & {
// 	type: InviteType.HANDLE
// }

export type PhoneInvite = BaseInvite & {
	type: InviteType.PHONE
}

export type EmailInvite = BaseInvite & {
	type: InviteType.EMAIL
}

export type Invite = PhoneInvite | EmailInvite

export type Qr = {
	uuid: string
	attributeIds: number[]
}

export type PendingConnectionAttribute = {
	attributeType: AttributeType
	name: string
}

export type PendingConnection = {
	id: number
	name: string
	avatarUrl: string | null
	alias: null
	description: null
	inviteType: InviteType
	inviteValue: string
	pendingAttributes: PendingConnectionAttribute[]
	expiresAt: number
}

export type QrConnection = {
	connectionId: number
	name: PendingConnection['name']
	alias: PendingConnection['alias']
	description: PendingConnection['description']
	avatarUrl: PendingConnection['avatarUrl']
	pendingAttributes: PendingConnection['pendingAttributes']
}
