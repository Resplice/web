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
	accountId: 'uuid',
	name: 'Han Solo',
	avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg',
	primaryAttributeId: 2,
	phone: PHONE,
	phoneVerifiedAt: 1234567890
}

const accountNameChanged: proto.account.AccountNameChanged = {
	name: 'H@n Sol0'
}

const accountAvatarChanged: proto.account.AccountAvatarChanged = {
	avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg'
}

const accountEvents = {
	accountCreated,
	accountNameChanged,
	accountAvatarChanged
}

// Attribute Events
const attributeAdded: proto.attribute.AttributeAdded = {
	attributeId: 3,
	name: 'Earth Address',
	valueId: 'val_hash',
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
	attributeId: 3,
	name: '2nd Earth Address'
}

const attributeValueChanged: proto.attribute.AttributeValueChanged = {
	attributeId: 3,
	valueId: 'new_val_hash',
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

const attributeValueVerified: proto.attribute.AttributeValueVerified = {
	valueId: 'val_hash',
	verifiedAt: 1234567890
}

const attributeRemoved: proto.attribute.AttributeRemoved = {
	attributeId: 3
}

const attributeEvents = {
	attributeAdded,
	attributeNameChanged,
	attributeValueChanged,
	attributeValueVerified,
	attributeRemoved
}

export default { ...authEvents, ...accountEvents, ...attributeEvents }
