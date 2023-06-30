import proto from './index'

// Auth Commands
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
type AuthCommand = StartAuth | VerifyAuthEmail | VerifyAuthPhone | AuthorizeSocket

// Account Commands
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
type AccountCommand =
	| CreateAccount
	| EditAccountName
	| EditAccountHandle
	| EditAccountAvatar
	| DeleteAccount

// Session Commands
export type StartSession = {
	type: proto.CommandType.START_SESSION
	payload: proto.sessions.StartSession
}
export type ExpireSession = {
	type: proto.CommandType.EXPIRE_SESSION
	payload: proto.sessions.ExpireSession
}
type SessionCommand = StartSession | ExpireSession

// Attribute Commands
export type AddAttribute = {
	type: proto.CommandType.ADD_ATTRIBUTE
	payload: proto.attributes.AddAttribute
}
export type EditAttributeName = {
	type: proto.CommandType.EDIT_ATTRIBUTE_NAME
	payload: proto.attributes.EditAttributeName
}
export type EditAttributeValue = {
	type: proto.CommandType.EDIT_ATTRIBUTE_VALUE
	payload: proto.attributes.EditAttributeValue
}
export type SortAttribute = {
	type: proto.CommandType.SORT_ATTRIBUTE
	payload: proto.attributes.SortAttribute
}
export type SendAttributeVerification = {
	type: proto.CommandType.SEND_ATTRIBUTE_VERIFICATION
	payload: proto.attributes.SendAttributeVerification
}
export type VerifyAttribute = {
	type: proto.CommandType.VERIFY_ATTRIBUTE
	payload: proto.attributes.VerifyAttribute
}
export type DeleteAttribute = {
	type: proto.CommandType.DELETE_ATTRIBUTE
	payload: proto.attributes.DeleteAttribute
}

type AttributeCommand =
	| AddAttribute
	| EditAttributeName
	| EditAttributeValue
	| SortAttribute
	| SendAttributeVerification
	| VerifyAttribute
	| DeleteAttribute

export type Command = AuthCommand | AccountCommand | SessionCommand | AttributeCommand

export const commandMapper = {
	[proto.CommandType.START_AUTH]: proto.auth.StartAuth.encode,
	[proto.CommandType.VERIFY_AUTH_EMAIL]: proto.auth.VerifyAuthEmail.encode,
	[proto.CommandType.VERIFY_AUTH_PHONE]: proto.auth.VerifyAuthPhone.encode,
	[proto.CommandType.AUTHORIZE_SOCKET]: proto.auth.AuthorizeSocket.encode,
	[proto.CommandType.CREATE_ACCOUNT]: proto.accounts.CreateAccount.encode,
	[proto.CommandType.EDIT_ACCOUNT_NAME]: proto.accounts.EditAccountName.encode,
	[proto.CommandType.EDIT_ACCOUNT_HANDLE]: proto.accounts.EditAccountHandle.encode,
	[proto.CommandType.EDIT_ACCOUNT_AVATAR]: proto.accounts.EditAccountAvatar.encode,
	[proto.CommandType.DELETE_ACCOUNT]: proto.accounts.DeleteAccount.encode,
	[proto.CommandType.START_SESSION]: proto.sessions.StartSession.encode,
	[proto.CommandType.EXPIRE_SESSION]: proto.sessions.ExpireSession.encode,
	[proto.CommandType.ADD_ATTRIBUTE]: proto.attributes.AddAttribute.encode,
	[proto.CommandType.EDIT_ATTRIBUTE_NAME]: proto.attributes.EditAttributeName.encode,
	[proto.CommandType.EDIT_ATTRIBUTE_VALUE]: proto.attributes.EditAttributeValue.encode,
	[proto.CommandType.SORT_ATTRIBUTE]: proto.attributes.SortAttribute.encode,
	[proto.CommandType.SEND_ATTRIBUTE_VERIFICATION]:
		proto.attributes.SendAttributeVerification.encode,
	[proto.CommandType.VERIFY_ATTRIBUTE]: proto.attributes.VerifyAttribute.encode,
	[proto.CommandType.DELETE_ATTRIBUTE]: proto.attributes.DeleteAttribute.encode
} as const
