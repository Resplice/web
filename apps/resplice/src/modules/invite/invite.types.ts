export enum InviteType {
	HANDLE = 'HANDLE',
	PHONE = 'PHONE',
	EMAIL = 'EMAIL',
	DIRECT = 'DIRECT'
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

export type DirectInvite = BaseInvite & {
	type: InviteType.DIRECT
}

export type Invite = HandleInvite | PhoneInvite | DirectInvite

export type QrInvite = {
	uuid: string
	attributeIds: number[]
}
