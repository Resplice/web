import proto, { type Event } from '../index'

const EMAIL = 'han@falcon.com'
const PHONE = '+16198745121'
const ACCESS_TOKEN = new Uint8Array([1, 2, 3])

// Auth Events
const authStarted: proto.auth.AuthChanged = {
	status: proto.auth.AuthStatus.PENDING_EMAIL_VERIFICATION,
	accessToken: ACCESS_TOKEN
}

const authEmailVerified: proto.auth.AuthChanged = {
	status: proto.auth.AuthStatus.PENDING_PHONE_VERIFICATION,
	accessToken: ACCESS_TOKEN
}

const authPhoneVerified: proto.auth.AuthChanged = {
	status: proto.auth.AuthStatus.PENDING_ACCOUNT_CREATION,
	accessToken: ACCESS_TOKEN
}

const accountCreatedAuth: proto.auth.AuthChanged = {
	status: proto.auth.AuthStatus.PENDING_SESSION,
	accessToken: ACCESS_TOKEN
}

const sessionStarted: proto.auth.AuthChanged = {
	status: proto.auth.AuthStatus.ACTIVE_SESSION,
	accessToken: ACCESS_TOKEN
}

const authEvents = {
	authStarted,
	authEmailVerified,
	authPhoneVerified,
	accountCreatedAuth,
	sessionStarted
}

// Account Events
const accountCreated: Event = {
	id: 5,
	version: 0,
	payload: {
		$case: 'accountCreated',
		accountCreated: {
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
}

const accountNameEdited: Event = {
	id: 8,
	version: 0,
	payload: {
		$case: 'accountNameEdited',
		accountNameEdited: {
			name: 'H@n Sol0'
		}
	}
}

const accountHandleEdited: Event = {
	id: 9,
	version: 0,
	payload: {
		$case: 'accountHandleEdited',
		accountHandleEdited: {
			handle: 'bestSmuggler42'
		}
	}
}

const accountAvatarEdited: Event = {
	id: 10,
	version: 0,
	payload: {
		$case: 'accountAvatarEdited',
		accountAvatarEdited: {
			avatarUrl: 'https://i.imgur.com/uo1ajTR.jpeg'
		}
	}
}

const accountEvents = {
	accountCreated,
	accountNameEdited,
	accountHandleEdited,
	accountAvatarEdited
}

// Attribute Events
const attributeAdded: Event = {
	id: 11,
	version: 0,
	payload: {
		$case: 'attributeAdded',
		attributeAdded: {
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
	}
}

const attributeNameEdited: Event = {
	id: 12,
	version: 0,
	payload: {
		$case: 'attributeNameEdited',
		attributeNameEdited: {
			id: 3,
			name: '1st Earth Address'
		}
	}
}

const attributeValueEdited: Event = {
	id: 13,
	version: 0,
	payload: {
		$case: 'attributeValueEdited',
		attributeValueEdited: {
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

const attributeSorted: Event = {
	id: 14,
	version: 0,
	payload: {
		$case: 'attributeSorted',
		attributeSorted: {
			id: 3,
			sortIndex: 1
		}
	}
}

const attributeVerified: Event = {
	id: 15,
	version: 0,
	payload: {
		$case: 'attributeVerified',
		attributeVerified: {
			id: 3,
			verifiedAt: 3454563
		}
	}
}

const attributeDeleted: Event = {
	id: 16,
	version: 0,
	payload: {
		$case: 'attributeDeleted',
		attributeDeleted: {
			id: 3
		}
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

export default { ...authEvents, ...accountEvents, ...attributeEvents }
