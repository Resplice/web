import proto, { type Command } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const ACCESS_TOKEN = new Uint8Array([1, 2, 3])

// Auth Commands
const startAuth: proto.auth.StartAuth = {
	email: EMAIL,
	phone: PHONE
}

const verifyAuthEmail: proto.auth.VerifyAuthEmail = {
	email: EMAIL,
	phone: PHONE,
	verificationCode: 123456,
	accessToken: ACCESS_TOKEN
}

const verifyAuthPhone: proto.auth.VerifyAuthPhone = {
	email: EMAIL,
	phone: PHONE,
	verificationCode: 123456,
	accessToken: ACCESS_TOKEN
}

const createAccount: proto.auth.CreateAccount = {
	email: EMAIL,
	phone: PHONE,
	fullName: 'Han Solo',
	avatar: new Uint8Array([255, 255, 255]),
	accessToken: ACCESS_TOKEN
}

const startSession: proto.auth.StartSession = {
	email: EMAIL,
	phone: PHONE,
	accessToken: ACCESS_TOKEN
}

const authCommands = { startAuth, verifyAuthEmail, verifyAuthPhone, createAccount, startSession }

// Account Commands
const editAccountName: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'editAccountName',
		editAccountName: {
			name: 'H@n Sol0'
		}
	}
}

const editAccountHandle: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'editAccountHandle',
		editAccountHandle: {
			handle: 'bestSmuggler42'
		}
	}
}

const editAccountAvatar: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'editAccountAvatar',
		editAccountAvatar: {
			avatar: new Uint8Array([255, 255, 255])
		}
	}
}

const accountCommands = {
	createAccount,
	editAccountName,
	editAccountHandle,
	editAccountAvatar
}

// Attribute Commands
const addAttribute: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'addAttribute',
		addAttribute: {
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
	}
}

const editAttributeName: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'editAttributeName',
		editAttributeName: {
			id: 3,
			name: '1st Earth Address'
		}
	}
}

const editAttributeValue: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'editAttributeValue',
		editAttributeValue: {
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
	}
}

const sortAttribute: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'sortAttribute',
		sortAttribute: {
			id: 3,
			sortIndex: 1
		}
	}
}

const sendAttributeVerification: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'sendAttributeVerification',
		sendAttributeVerification: {
			id: 3
		}
	}
}

const verifyAttribute: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'verifyAttribute',
		verifyAttribute: {
			id: 3,
			verificationCode: 123456
		}
	}
}

const deleteAttribute: Command = {
	id: 0,
	version: 0,
	payload: {
		$case: 'deleteAttribute',
		deleteAttribute: {
			id: 3
		}
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

export default { ...authCommands, ...accountCommands, ...attributeCommands }
