import proto from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'

// Auth Events
const authStarted: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_VERIFY_EMAIL
}

const authEmailVerified: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_VERIFY_PHONE
}

const authPhoneVerified: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_CREATE_ACCOUNT
}

const accountCreatedAuth: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_START_SESSION
}

const sessionStarted: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.AUTHORIZED
}

const authEvents = {
	authStarted,
	authEmailVerified,
	authPhoneVerified,
	accountCreatedAuth,
	sessionStarted
}

// Account Events
const accountCreated: proto.account.AccountCreated = {
	accountUuid: 'uuid',
	fullName: 'Han Solo',
	handle: 'han.solo.1',
	avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg',
	emailId: 1,
	email: EMAIL,
	phoneId: 2,
	phone: PHONE
}

const accountNameChanged: proto.account.AccountNameChanged = {
	name: 'H@n Sol0'
}

const accountHandleChanged: proto.account.AccountHandleChanged = {
	handle: 'bestSmuggler42'
}

const accountAvatarChanged: proto.account.AccountAvatarChanged = {
	avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg'
}

const accountEvents = {
	accountCreated,
	accountNameChanged,
	accountHandleChanged,
	accountAvatarChanged
}

// Attribute Events
const attributeAdded: proto.attribute.AttributeAdded = {
	id: 3,
	name: 'Earth Address',
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

const attributeNameChanged: proto.attribute.AttributeNameChanged = {
	id: 3,
	name: '1st Earth Address'
}

const attributeValueChanged: proto.attribute.AttributeValueChanged = {
	id: 3,
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

const attributeSorted: proto.attribute.AttributeSorted = {
	id: 3,
	sortIndex: 1
}

const attributeVerified: proto.attribute.AttributeVerified = {
	id: 3,
	verifiedAt: 3454563
}

const attributeRemoved: proto.attribute.AttributeRemoved = {
	id: 3
}

const attributeEvents = {
	attributeAdded,
	attributeNameChanged,
	attributeValueChanged,
	attributeSorted,
	attributeVerified,
	attributeRemoved
}

export default { ...authEvents, ...accountEvents, ...attributeEvents }
