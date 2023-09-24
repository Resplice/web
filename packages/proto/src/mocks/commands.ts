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
	phone: PHONE,
	persist: true,
	userAgent: '',
	ipAddress: '127.0.0.1'
}

const authCommands = { startAuth, verifyPhone, createAccount, startSession }

// Account Commands
const changeAccountName: proto.account.ChangeAccountName = {
	name: 'H@n Sol0'
}

const changeAccountHandle: proto.account.ChangeAccountHandle = {
	handle: 'bestSmuggler42'
}

const changeAccountAvatar: proto.account.ChangeAccountAvatar = {
	avatar: ''
}

const accountCommands = {
	changeAccountName,
	changeAccountHandle,
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

const changeAttributeName: proto.attribute.ChangeAttributeName = {
	id: 3,
	name: '1st Earth Address'
}

const changeAttributeValue: proto.attribute.ChangeAttributeValue = {
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

const removeAttribute: proto.attribute.RemoveAttribute = {
	id: 3
}

const attributeCommands = {
	addAttribute,
	changeAttributeName,
	changeAttributeValue,
	removeAttribute
}

export default { ...authCommands, ...accountCommands, ...attributeCommands }
