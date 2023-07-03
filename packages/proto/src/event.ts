import proto from './index'

type BaseEvent = {
	id: number
}

// Meta Events
export type Error = BaseEvent & {
	type: proto.EventType.ERROR
	payload: proto.Error
}
type MetaEvent = Error

// Auth Events
export type AuthChanged = BaseEvent & {
	type: proto.EventType.AUTH_CHANGED
	payload: proto.auth.AuthChanged
}
export type SocketAuthorized = BaseEvent & {
	type: proto.EventType.SOCKET_AUTHORIZED
	payload: proto.auth.SocketAuthorized
}
type AuthEvent = AuthChanged | SocketAuthorized

// Account Events
export type AccountCreated = BaseEvent & {
	type: proto.EventType.ACCOUNT_CREATED
	payload: proto.accounts.AccountCreated
}
export type AccountNameEdited = BaseEvent & {
	type: proto.EventType.ACCOUNT_NAME_EDITED
	payload: proto.accounts.AccountNameEdited
}
export type AccountHandleEdited = BaseEvent & {
	type: proto.EventType.ACCOUNT_HANDLE_EDITED
	payload: proto.accounts.AccountHandleEdited
}
export type AccountAvatarEdited = BaseEvent & {
	type: proto.EventType.ACCOUNT_AVATAR_EDITED
	payload: proto.accounts.AccountAvatarEdited
}
type AccountEvent = AccountCreated | AccountNameEdited | AccountHandleEdited | AccountAvatarEdited

// Session Events
export type SessionStarted = BaseEvent & {
	type: proto.EventType.SESSION_STARTED
	payload: proto.sessions.SessionStarted
}
export type SessionExpired = BaseEvent & {
	type: proto.EventType.SESSION_EXPIRED
	payload: proto.sessions.SessionExpired
}
type SessionEvent = SessionStarted | SessionExpired

// Attribute Events
export type AttributeAdded = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_ADDED
	payload: proto.attributes.AttributeAdded
}
export type AttributeNameEdited = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_NAME_EDITED
	payload: proto.attributes.AttributeNameEdited
}
export type AttributeValueEdited = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_VALUE_EDITED
	payload: proto.attributes.AttributeValueEdited
}
export type AttributeSorted = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_SORTED
	payload: proto.attributes.AttributeSorted
}
export type AttributeVerified = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_VERIFIED
	payload: proto.attributes.AttributeVerified
}
export type AttributeDeleted = BaseEvent & {
	type: proto.EventType.ATTRIBUTE_DELETED
	payload: proto.attributes.AttributeDeleted
}
type AttributeEvent =
	| AttributeAdded
	| AttributeNameEdited
	| AttributeValueEdited
	| AttributeSorted
	| AttributeVerified
	| AttributeDeleted

export type Event = MetaEvent | AuthEvent | AccountEvent | SessionEvent | AttributeEvent

export const eventMapper = {
	[proto.EventType.AUTH_CHANGED]: proto.auth.AuthChanged.decode,
	[proto.EventType.SOCKET_AUTHORIZED]: proto.auth.SocketAuthorized.decode,
	[proto.EventType.ACCOUNT_CREATED]: proto.accounts.AccountCreated.decode,
	[proto.EventType.ACCOUNT_NAME_EDITED]: proto.accounts.AccountNameEdited.decode,
	[proto.EventType.ACCOUNT_HANDLE_EDITED]: proto.accounts.AccountHandleEdited.decode,
	[proto.EventType.ACCOUNT_AVATAR_EDITED]: proto.accounts.AccountAvatarEdited.decode,
	[proto.EventType.SESSION_STARTED]: proto.sessions.SessionStarted.decode,
	[proto.EventType.SESSION_EXPIRED]: proto.sessions.SessionExpired.decode,
	[proto.EventType.ATTRIBUTE_ADDED]: proto.attributes.AttributeAdded.decode,
	[proto.EventType.ATTRIBUTE_NAME_EDITED]: proto.attributes.AttributeNameEdited.decode,
	[proto.EventType.ATTRIBUTE_VALUE_EDITED]: proto.attributes.AttributeValueEdited.decode,
	[proto.EventType.ATTRIBUTE_SORTED]: proto.attributes.AttributeSorted.decode,
	[proto.EventType.ATTRIBUTE_VERIFIED]: proto.attributes.AttributeVerified.decode,
	[proto.EventType.ATTRIBUTE_DELETED]: proto.attributes.AttributeDeleted.decode,
	[proto.EventType.ERROR]: proto.Error.decode
} as const
