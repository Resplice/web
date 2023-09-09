import proto from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'

// Auth Commands
const startAuth: proto.auth.StartAuth = {
	email: EMAIL,
	phone: PHONE
}

const verifyEmail: proto.auth.VerifyEmail = {
	email: EMAIL,
	phone: PHONE,
	verifyCode: 123456
}

const verifyPhone: proto.auth.VerifyPhone = {
	email: EMAIL,
	phone: PHONE,
	verifyCode: 123456
}

const createAccount: proto.auth.CreateAccount = {
	email: EMAIL,
	phone: PHONE,
	fullName: 'Han Solo',
	avatar: ''
}

const startSession: proto.auth.StartSession = {
	email: EMAIL,
	phone: PHONE,
	persist: true,
	userAgent: '',
	ipAddress: '127.0.0.1',
	location: undefined
}

const authCommands = { startAuth, verifyEmail, verifyPhone, createAccount, startSession }

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

const sortAttribute: proto.attribute.SortAttribute = {
	id: 3,
	sortIndex: 1
}

const sendAttributeVerification: proto.attribute.SendAttributeVerification = {
	id: 3
}

const verifyAttribute: proto.attribute.VerifyAttribute = {
	id: 3,
	verifyCode: 123456
}

const removeAttribute: proto.attribute.RemoveAttribute = {
	id: 3
}

const attributeCommands = {
	addAttribute,
	changeAttributeName,
	changeAttributeValue,
	sortAttribute,
	sendAttributeVerification,
	verifyAttribute,
	removeAttribute
}

export default { ...authCommands, ...accountCommands, ...attributeCommands }
