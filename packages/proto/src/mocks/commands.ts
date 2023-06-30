import proto, { type Command } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const AUTH_CODE = new Uint8Array([1, 2, 3])

// Auth Commands
const startAuth: Command = {
	type: proto.CommandType.START_AUTH,
	payload: {
		email: EMAIL,
		phone: PHONE
	}
}

const verifyAuthEmail: Command = {
	type: proto.CommandType.VERIFY_AUTH_EMAIL,
	payload: {
		email: EMAIL,
		phone: PHONE,
		verificationCode: 123456,
		authCode: AUTH_CODE
	}
}

const verifyAuthPhone: Command = {
	type: proto.CommandType.VERIFY_AUTH_EMAIL,
	payload: {
		email: EMAIL,
		phone: PHONE,
		verificationCode: 123456,
		authCode: AUTH_CODE
	}
}

const authorizeSocket: Command = {
	type: proto.CommandType.AUTHORIZE_SOCKET,
	payload: {
		lastEventIndex: 0,
		authCode: AUTH_CODE
	}
}

const authCommands = { startAuth, verifyAuthEmail, verifyAuthPhone, authorizeSocket }

// Account Commands
const createAccount: Command = {
	type: proto.CommandType.CREATE_ACCOUNT,
	payload: {
		email: EMAIL,
		phone: PHONE,
		fullName: 'Han Solo',
		authCode: AUTH_CODE
	}
}

const editAccountName: Command = {
	type: proto.CommandType.EDIT_ACCOUNT_NAME,
	payload: {
		name: 'H@n Sol0'
	}
}

const editAccountHandle: Command = {
	type: proto.CommandType.EDIT_ACCOUNT_HANDLE,
	payload: {
		handle: 'bestSmuggler42'
	}
}

const editAccountAvatar: Command = {
	type: proto.CommandType.EDIT_ACCOUNT_AVATAR,
	payload: {
		avatar: new Uint8Array([255, 255, 255])
	}
}

const deleteAccount: Command = {
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
	type: proto.CommandType.START_SESSION,
	payload: {
		authCode: AUTH_CODE
	}
}

const expireSession: Command = {
	type: proto.CommandType.EXPIRE_SESSION,
	payload: {
		sessionId: 1
	}
}

const sessionCommands = { startSession, expireSession }

// Attribute Commands
const addAttribute: Command = {
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
	type: proto.CommandType.EDIT_ATTRIBUTE_NAME,
	payload: {
		id: 3,
		name: '1st Earth Address'
	}
}

const editAttributeValue: Command = {
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
	type: proto.CommandType.SORT_ATTRIBUTE,
	payload: {
		id: 3,
		sortIndex: 1
	}
}

const sendAttributeVerification: Command = {
	type: proto.CommandType.SEND_ATTRIBUTE_VERIFICATION,
	payload: {
		id: 3
	}
}

const verifyAttribute: Command = {
	type: proto.CommandType.VERIFY_ATTRIBUTE,
	payload: {
		id: 3,
		verificationCode: 123456
	}
}

const deleteAttribute: Command = {
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
