import proto, { type Command } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const ACCESS_KEY = new Uint8Array([1, 2, 3])

// Auth Commands
const startAuth: Command = {
	id: 0,
	type: proto.CommandType.START_AUTH,
	payload: {
		email: EMAIL,
		phone: PHONE
	}
}

const verifyAuthEmail: Command = {
	id: 0,
	type: proto.CommandType.VERIFY_AUTH_EMAIL,
	payload: {
		email: EMAIL,
		phone: PHONE,
		verificationCode: 123456,
		accessKey: ACCESS_KEY
	}
}

const verifyAuthPhone: Command = {
	id: 0,
	type: proto.CommandType.VERIFY_AUTH_EMAIL,
	payload: {
		email: EMAIL,
		phone: PHONE,
		verificationCode: 123456,
		accessKey: ACCESS_KEY
	}
}

const authorizeSocket: Command = {
	id: 0,
	type: proto.CommandType.AUTHORIZE_SOCKET,
	payload: {
		lastEventId: 0,
		accessKey: ACCESS_KEY
	}
}

const authCommands = { startAuth, verifyAuthEmail, verifyAuthPhone, authorizeSocket }

// Account Commands
const createAccount: Command = {
	id: 0,
	type: proto.CommandType.CREATE_ACCOUNT,
	payload: {
		email: EMAIL,
		phone: PHONE,
		fullName: 'Han Solo',
		accessKey: ACCESS_KEY
	}
}

const editAccountName: Command = {
	id: 0,
	type: proto.CommandType.EDIT_ACCOUNT_NAME,
	payload: {
		name: 'H@n Sol0'
	}
}

const editAccountHandle: Command = {
	id: 0,
	type: proto.CommandType.EDIT_ACCOUNT_HANDLE,
	payload: {
		handle: 'bestSmuggler42'
	}
}

const editAccountAvatar: Command = {
	id: 0,
	type: proto.CommandType.EDIT_ACCOUNT_AVATAR,
	payload: {
		avatar: new Uint8Array([255, 255, 255])
	}
}

const deleteAccount: Command = {
	id: 0,
	type: proto.CommandType.DELETE_ACCOUNT,
	payload: {
		email: EMAIL,
		phone: PHONE,
		removeAllExistingData: true
	}
}

const accountCommands = {
	createAccount,
	editAccountName,
	editAccountHandle,
	editAccountAvatar,
	deleteAccount
}

// Session Commands
const startSession: Command = {
	id: 0,
	type: proto.CommandType.START_SESSION,
	payload: {
		accessKey: ACCESS_KEY
	}
}

const expireSession: Command = {
	id: 0,
	type: proto.CommandType.EXPIRE_SESSION,
	payload: {
		sessionId: 1
	}
}

const sessionCommands = { startSession, expireSession }

// Attribute Commands
const addAttribute: Command = {
	id: 0,
	type: proto.CommandType.ADD_ATTRIBUTE,
	payload: {
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

const editAttributeName: Command = {
	id: 0,
	type: proto.CommandType.EDIT_ATTRIBUTE_NAME,
	payload: {
		id: 3,
		name: '1st Earth Address'
	}
}

const editAttributeValue: Command = {
	id: 0,
	type: proto.CommandType.EDIT_ATTRIBUTE_VALUE,
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

const sortAttribute: Command = {
	id: 0,
	type: proto.CommandType.SORT_ATTRIBUTE,
	payload: {
		id: 3,
		sortIndex: 1
	}
}

const sendAttributeVerification: Command = {
	id: 0,
	type: proto.CommandType.SEND_ATTRIBUTE_VERIFICATION,
	payload: {
		id: 3
	}
}

const verifyAttribute: Command = {
	id: 0,
	type: proto.CommandType.VERIFY_ATTRIBUTE,
	payload: {
		id: 3,
		verificationCode: 123456
	}
}

const deleteAttribute: Command = {
	id: 0,
	type: proto.CommandType.DELETE_ATTRIBUTE,
	payload: {
		id: 3
	}
}

const attributeCommands = {
	addAttribute,
	editAttributeName,
	editAttributeValue,
	sortAttribute,
	sendAttributeVerification,
	verifyAttribute,
	deleteAttribute
}

export default { ...authCommands, ...accountCommands, ...sessionCommands, ...attributeCommands }
