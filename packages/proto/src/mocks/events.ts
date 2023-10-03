import proto from '../index'

const PHONE = '+16198745121'

// Auth Events
const authStarted: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_VERIFY_PHONE,
	accessToken: ''
}

const authPhoneVerified: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_CREATE_ACCOUNT,
	accessToken: ''
}

const accountCreatedAuth: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.PENDING_START_SESSION,
	accessToken: '1234567890'
}

const sessionStarted: proto.auth.AuthChanged = {
	authStatus: proto.auth.AuthStatus.AUTHORIZED,
	accessToken: ''
}

const authEvents = {
	authStarted,
	authPhoneVerified,
	accountCreatedAuth,
	sessionStarted
}

// Account Events
const accountCreated: proto.account.AccountCreated = {
	uuid: 'uuid',
	name: 'Han Solo',
	handle: 'han.solo.1',
	avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg',
	phoneId: 2,
	phone: PHONE,
	phoneVerifiedAt: 1234567890
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

const attributeChanged: proto.attribute.AttributeChanged = {
	id: 3,
	name: '1st Earth Address',
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

const attributeRemoved: proto.attribute.AttributeRemoved = {
	id: 3
}

const attributeEvents = {
	attributeAdded,
	attributeChanged,
	attributeRemoved
}

export default { ...authEvents, ...accountEvents, ...attributeEvents }
