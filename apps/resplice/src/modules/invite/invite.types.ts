export enum InviteType {
	HANDLE = 'HANDLE',
	PHONE = 'PHONE',
	DIRECT = 'DIRECT'
}

type BaseInvite = {
	type: InviteType
	value: string
	name: string
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
