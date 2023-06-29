import proto from './index'

// Meta Events
export type Error = {
	type: proto.EventType.ERROR
	payload: proto.Error
}
type MetaEvent = Error

// Auth Events
export type AuthStarted = {
	type: proto.EventType.AUTH_STARTED
	payload: proto.auth.AuthStarted
}
export type AuthEmailVerified = {
	type: proto.EventType.AUTH_EMAIL_VERIFIED
	payload: proto.auth.AuthEmailVerified
}
export type AuthPhoneVerified = {
	type: proto.EventType.AUTH_PHONE_VERIFIED
	payload: proto.auth.AuthPhoneVerified
}
export type SocketAuthorized = {
	type: proto.EventType.SOCKET_AUTHORIZED
	payload: proto.auth.SocketAuthorized
}
type AuthEvent = AuthStarted | AuthEmailVerified | AuthPhoneVerified | SocketAuthorized

// Account Events
export type AccountCreated = {
	type: proto.EventType.ACCOUNT_CREATED
	payload: proto.accounts.AccountCreated
}
export type AccountNameEdited = {
	type: proto.EventType.ACCOUNT_NAME_EDITED
	payload: proto.accounts.AccountNameEdited
}
export type AccountHandleEdited = {
	type: proto.EventType.ACCOUNT_HANDLE_EDITED
	payload: proto.accounts.AccountHandleEdited
}
export type AccountAvatarEdited = {
	type: proto.EventType.ACCOUNT_AVATAR_EDITED
	payload: proto.accounts.AccountAvatarEdited
}
type AccountEvent = AccountCreated | AccountNameEdited | AccountHandleEdited | AccountAvatarEdited

export type Event = MetaEvent | AuthEvent | AccountEvent

export const eventMapper = {
	[proto.EventType.AUTH_STARTED]: proto.auth.AuthStarted.decode,
	[proto.EventType.AUTH_EMAIL_VERIFIED]: proto.auth.AuthEmailVerified.decode,
	[proto.EventType.AUTH_PHONE_VERIFIED]: proto.auth.AuthPhoneVerified.decode,
	[proto.EventType.SOCKET_AUTHORIZED]: proto.auth.SocketAuthorized.decode,
	[proto.EventType.ACCOUNT_CREATED]: proto.accounts.AccountCreated.decode,
	[proto.EventType.ACCOUNT_NAME_EDITED]: proto.accounts.AccountNameEdited.decode,
	[proto.EventType.ACCOUNT_HANDLE_EDITED]: proto.accounts.AccountHandleEdited.decode,
	[proto.EventType.ACCOUNT_AVATAR_EDITED]: proto.accounts.AccountAvatarEdited.decode,
	[proto.EventType.ERROR]: proto.Error.decode
} as const
