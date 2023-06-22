import proto from './index'

export type StartAuth = {
	type: proto.CommandType.START_AUTH
	payload: proto.auth.StartAuth
}
export type VerifyAuthEmail = {
	type: proto.CommandType.VERIFY_AUTH_EMAIL
	payload: proto.auth.VerifyAuthEmail
}
export type VerifyAuthPhone = {
	type: proto.CommandType.VERIFY_AUTH_PHONE
	payload: proto.auth.VerifyAuthPhone
}
export type AuthorizeSocket = {
	type: proto.CommandType.AUTHORIZE_SOCKET
	payload: proto.auth.AuthorizeSocket
}
type AuthCommands = StartAuth | VerifyAuthEmail | VerifyAuthPhone | AuthorizeSocket

// Account
export type CreateAccount = {
	type: proto.CommandType.CREATE_ACCOUNT
	payload: proto.accounts.CreateAccount
}
export type EditAccountName = {
	type: proto.CommandType.EDIT_ACCOUNT_NAME
	payload: proto.accounts.EditAccountName
}
export type EditAccountHandle = {
	type: proto.CommandType.EDIT_ACCOUNT_HANDLE
	payload: proto.accounts.EditAccountHandle
}
export type EditAccountAvatar = {
	type: proto.CommandType.EDIT_ACCOUNT_AVATAR
	payload: proto.accounts.EditAccountAvatar
}
export type DeleteAccount = {
	type: proto.CommandType.DELETE_ACCOUNT
	payload: proto.accounts.DeleteAccount
}
type AccountCommands =
	| CreateAccount
	| EditAccountName
	| EditAccountHandle
	| EditAccountAvatar
	| DeleteAccount

export type Command = AuthCommands | AccountCommands

export const commandMapper = {
	[proto.CommandType.START_AUTH]: proto.auth.StartAuth.encode,
	[proto.CommandType.VERIFY_AUTH_EMAIL]: proto.auth.VerifyAuthEmail.encode,
	[proto.CommandType.VERIFY_AUTH_PHONE]: proto.auth.VerifyAuthPhone.encode,
	[proto.CommandType.AUTHORIZE_SOCKET]: proto.auth.AuthorizeSocket.encode,
	[proto.CommandType.CREATE_ACCOUNT]: proto.accounts.CreateAccount.encode,
	[proto.CommandType.EDIT_ACCOUNT_NAME]: proto.accounts.EditAccountName.encode,
	[proto.CommandType.EDIT_ACCOUNT_HANDLE]: proto.accounts.EditAccountHandle.encode,
	[proto.CommandType.EDIT_ACCOUNT_AVATAR]: proto.accounts.EditAccountAvatar.encode,
	[proto.CommandType.DELETE_ACCOUNT]: proto.accounts.DeleteAccount.encode
} as const
