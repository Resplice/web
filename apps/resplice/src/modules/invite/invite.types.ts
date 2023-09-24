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

type HandleInvite = BaseInvite & {
	type: InviteType.HANDLE
}

type PhoneInvite = BaseInvite & {
	type: InviteType.PHONE
}

type DirectInvite = BaseInvite & {
	type: InviteType.DIRECT
}

export type Invite = HandleInvite | PhoneInvite | DirectInvite
