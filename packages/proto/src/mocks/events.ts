import proto, { type Event } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const ACCESS_KEY = new Uint8Array([1, 2, 3])

// Auth Events
const authStarted: Event = {
	id: 1,
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_EMAIL_VERIFICATION,
		accessKey: ACCESS_KEY
	}
}

const authEmailVerified: Event = {
	id: 2,
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_PHONE_VERIFICATION,
		accessKey: ACCESS_KEY
	}
}

const authPhoneVerified: Event = {
	id: 3,
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_ACCOUNT_CREATION,
		accessKey: ACCESS_KEY
	}
}

const accountCreatedAuth: Event = {
	id: 4,
	type: proto.EventType.AUTH_CHANGED,
	payload: {
		status: proto.auth.AuthStatus.PENDING_SESSION,
		accessKey: ACCESS_KEY
	}
}

const socketAuthorized: Event = {
	id: 7,
	type: proto.EventType.SOCKET_AUTHORIZED,
	payload: {
		events: [],
		accessKey: ACCESS_KEY
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
	id: 5,
	type: proto.EventType.ACCOUNT_CREATED,
	payload: {
		accountId: 1,
		fullName: 'Han Solo',
		handle: 'han.solo.1',
		avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg',
		emailId: 1,
		email: EMAIL,
		phoneId: 2,
		phone: PHONE
	}
}

const accountNameEdited: Event = {
	id: 8,
	type: proto.EventType.ACCOUNT_NAME_EDITED,
	payload: {
		name: 'H@n Sol0'
	}
}

const accountHandleEdited: Event = {
	id: 9,
	type: proto.EventType.ACCOUNT_HANDLE_EDITED,
	payload: {
		handle: 'bestSmuggler42'
	}
}

const accountAvatarEdited: Event = {
	id: 10,
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
const sessionStarted: Event = {
	id: 6,
	type: proto.EventType.SESSION_STARTED,
	payload: {
		sessionId: 1,
		expirySeconds: 34523453,
		accessKey: ACCESS_KEY
	}
}
const sessionExpired: Event = {
	id: 127,
	type: proto.EventType.SESSION_EXPIRED,
	payload: {
		sessionId: 2
	}
}

const sessionEvents = {
	sessionStarted,
	sessionExpired
}

// Attribute Events
const attributeAdded: Event = {
	id: 11,
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
				country: 'US'
			}
		}
	}
}

const attributeNameEdited: Event = {
	id: 12,
	type: proto.EventType.ATTRIBUTE_NAME_EDITED,
	payload: {
		id: 3,
		name: '1st Earth Address'
	}
}

const attributeValueEdited: Event = {
	id: 13,
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
				country: 'US'
			}
		}
	}
}

const attributeSorted: Event = {
	id: 14,
	type: proto.EventType.ATTRIBUTE_SORTED,
	payload: {
		id: 3,
		sortIndex: 1
	}
}

const attributeVerified: Event = {
	id: 15,
	type: proto.EventType.ATTRIBUTE_VERIFIED,
	payload: {
		id: 3,
		verifiedAt: 3454563
	}
}

const attributeDeleted: Event = {
	id: 16,
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
