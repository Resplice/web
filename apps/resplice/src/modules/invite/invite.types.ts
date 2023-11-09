import type { AttributeType } from '@resplice/utils'

export enum InviteType {
	QR = 'QR',
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	HANDLE = 'HANDLE'
}

type BaseInvite = {
	id: number
	type: InviteType
	name: string
	value: string
	shares: number[]
}

export type HandleInvite = BaseInvite & {
	type: InviteType.HANDLE
}

export type PhoneInvite = BaseInvite & {
	type: InviteType.PHONE
}

export type QrInvite = BaseInvite & {
	type: InviteType.QR
}

export type Invite = QrInvite | PhoneInvite | HandleInvite

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
	inviteType: InviteType
	inviteValue: string
	attributes: PendingConnectionAttribute[]
	expiresAt: number
}
