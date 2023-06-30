import proto, { type Event } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const AUTH_CODE = new Uint8Array([1, 2, 3])

// Auth Events
const authStarted: Event = {
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_EMAIL_VERIFICATION,
		authCode: AUTH_CODE
	}
}

const authEmailVerified: Event = {
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_PHONE_VERIFICATION,
		authCode: AUTH_CODE
	}
}

const authPhoneVerified: Event = {
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_ACCOUNT_CREATION,
		authCode: AUTH_CODE
	}
}

const accountCreatedAuth: Event = {
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_SESSION,
		authCode: AUTH_CODE
	}
}

const socketAuthorized: Event = {
	type: proto.EventType.SOCKET_AUTHORIZED,
	payload: {
		events: [],
		authCode: AUTH_CODE
	}
}

const authEvents = {
	authStarted,
	authEmailVerified,
	authPhoneVerified,
	accountCreatedAuth,
	socketAuthorized
}

// Account Events
const accountCreated: Event = {
	type: proto.EventType.ACCOUNT_CREATED,
	payload: {
		accountId: 1,
		fullName: 'Han Solo',
		emailId: 1,
		email: EMAIL,
		phoneId: 2,
		phone: PHONE
	}
}

const accountNameEdited: Event = {
	type: proto.EventType.ACCOUNT_NAME_EDITED,
	payload: {
		name: 'H@n Sol0'
	}
}

const accountHandleEdited: Event = {
	type: proto.EventType.ACCOUNT_HANDLE_EDITED,
	payload: {
		handle: 'bestSmuggler42'
	}
}

const accountAvatarEdited: Event = {
	type: proto.EventType.ACCOUNT_AVATAR_EDITED,
	payload: {
		avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg'
	}
}

const accountEvents = {
	accountCreated,
	accountNameEdited,
	accountHandleEdited,
	accountAvatarEdited
}

// Session Events
const SessionStarted = {
	type: proto.EventType.SESSION_STARTED,
	payload: {
		sessionId: 1,
		expirySeconds: 34523453,
		authCode: AUTH_CODE
	}
}
const SessionExpired = {
	type: proto.EventType.SESSION_EXPIRED,
	payload: {
		sessionId: 2
	}
}

const sessionEvents = {
	SessionStarted,
	SessionExpired
}

// Attribute Events
const attributeAdded: Event = {
	type: proto.EventType.ATTRIBUTE_ADDED,
	payload: {
		id: 3,
		name: 'Earth Address',
		type: proto.attributes.types.AttributeType.ADDRESS,
		value: {
			$case: 'address',
			address: {
				streetAddress1: '351 S Studio Dr',
				streetAddress2: '',
				locality: 'Lake Buena Vista',
				region: 'FL',
				postalCode: '32830',
				country: proto.attributes.types.Country.UNITED_STATES
			}
		}
	}
}

const attributeNameEdited: Event = {
	type: proto.EventType.ATTRIBUTE_NAME_EDITED,
	payload: {
		id: 3,
		name: '1st Earth Address'
	}
}

const attributeValueEdited: Event = {
	type: proto.EventType.ATTRIBUTE_VALUE_EDITED,
	payload: {
		id: 3,
		type: proto.attributes.types.AttributeType.ADDRESS,
		value: {
			$case: 'address',
			address: {
				streetAddress1: '351 S Studio Dr',
				streetAddress2: 'Unit 10',
				locality: 'Lake Buena Vista',
				region: 'FL',
				postalCode: '32830',
				country: proto.attributes.types.Country.UNITED_STATES
			}
		}
	}
}

const attributeSorted: Event = {
	type: proto.EventType.ATTRIBUTE_SORTED,
	payload: {
		id: 3,
		sortIndex: 1
	}
}

const attributeVerified: Event = {
	type: proto.EventType.ATTRIBUTE_VERIFIED,
	payload: {
		id: 3,
		verifiedAt: 3454563
	}
}

const attributeDeleted: Event = {
	type: proto.EventType.ATTRIBUTE_DELETED,
	payload: {
		id: 3
	}
}

const attributeEvents = {
	attributeAdded,
	attributeNameEdited,
	attributeValueEdited,
	attributeSorted,
	attributeVerified,
	attributeDeleted
}

export default { ...authEvents, ...accountEvents, ...sessionEvents, ...attributeEvents }
