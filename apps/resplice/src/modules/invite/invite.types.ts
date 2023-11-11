import type { AttributeType } from '@resplice/utils'

export enum InviteType {
	QR = 'QR',
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	HANDLE = 'HANDLE'
}

type BaseInvite = {
	id: string
	type: InviteType
	name: string
	value: string
}

export type QrInvite = BaseInvite & {
	type: InviteType.QR
}

export type HandleInvite = BaseInvite & {
	type: InviteType.HANDLE
}

export type PhoneInvite = BaseInvite & {
	type: InviteType.PHONE
}

export type EmailInvite = BaseInvite & {
	type: InviteType.EMAIL
}

export type Invite = QrInvite | HandleInvite | PhoneInvite | EmailInvite

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
	pendingAttributes: PendingConnectionAttribute[]
	expiresAt: number
}

export type QrPendingConnection = {
	uuid: string
	accountId: number
	name: PendingConnection['name']
	avatarUrl: PendingConnection['avatarUrl']
	pendingAttributes: PendingConnection['pendingAttributes']
}
