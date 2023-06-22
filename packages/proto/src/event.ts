import proto from './index'

export const eventMapper = {
	[proto.EventType.AUTH_STARTED]: proto.auth.AuthStarted.decode,
	[proto.EventType.AUTH_EMAIL_VERIFIED]: proto.auth.AuthEmailVerified.decode,
	[proto.EventType.AUTH_PHONE_VERIFIED]: proto.auth.AuthPhoneVerified.decode,
	[proto.EventType.SOCKET_AUTHORIZED]: proto.auth.SocketAuthorized.decode,
	[proto.EventType.ACCOUNT_CREATED]: proto.accounts.AccountCreated.decode,
	[proto.EventType.ACCOUNT_NAME_EDITED]: proto.accounts.AccountNameEdited.decode,
	[proto.EventType.ACCOUNT_HANDLE_EDITED]: proto.accounts.AccountHandleEdited.decode,
	[proto.EventType.ACCOUNT_AVATAR_EDITED]: proto.accounts.AccountAvatarEdited.decode
} as const
