import proto from '../index'

const PHONE = '+16198745121'

// Auth Commands
const startAuth: proto.auth.StartAuth = {
	phone: PHONE
}

const verifyPhone: proto.auth.VerifyPhone = {
	phone: PHONE,
	verifyCode: 123456
}

const createAccount: proto.auth.CreateAccount = {
	phone: PHONE,
	name: 'Han Solo',
	avatar: ''
}

const startSession: proto.auth.StartSession = {
	accessToken: '1234567890',
	persist: true,
	userAgent: '',
	ipAddress: '127.0.0.1'
}

const authCommands = { startAuth, verifyPhone, createAccount, startSession }

// Account Commands
const changeAccountName: proto.account.ChangeAccountName = {
	name: 'H@n Sol0'
}

const changeAccountAvatar: proto.account.ChangeAccountAvatar = {
	avatar: ''
}

const accountCommands = {
	changeAccountName,
	changeAccountAvatar
}

// Attribute Commands
const addAttribute: proto.attribute.AddAttribute = {
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

const changeAttribute: proto.attribute.ChangeAttribute = {
	attributeId: 3,
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

const removeAttribute: proto.attribute.RemoveAttribute = {
	attributeId: 3
}

const attributeCommands = {
	addAttribute,
	changeAttribute,
	removeAttribute
}

export default { ...authCommands, ...accountCommands, ...attributeCommands }
