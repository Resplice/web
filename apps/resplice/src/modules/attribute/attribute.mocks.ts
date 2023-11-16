import type { Attribute } from '$modules/account/account.types'
import { AttributeType } from '@resplice/utils'

export const attributes = new Map<number, Attribute>([
	[
		1,
		{
			id: 1,
			type: AttributeType.PHONE,
			name: 'Personal Phone',
			valueId: '2e399e1ca72cefaee6f42db625beae646048522ba5ff4fc4ee390dd5cf0e9a6d',
			value: {
				number: '+16452135555',
				smsEnabled: true
			},
			groupId: null,
			sortOrder: 1,
			verifiedAt: 1634861779,
			verifyExpiry: 1634861779
		}
	],
	[
		2,
		{
			id: 2,
			type: AttributeType.EMAIL,
			name: 'Personal Email',
			valueId: '5744bdbd4416548bb511b25c9dbb48a690cba3da0cddc6aeb19031b2791d69ac',
			value: {
				email: 'han@falcon.com'
			},
			groupId: null,
			sortOrder: 2,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		3,
		{
			id: 3,
			type: AttributeType.ADDRESS,
			name: 'Apartment',
			valueId: 'addr',
			value: {
				streetAddress1: '778 Central Emporium',
				streetAddress2: '',
				locality: 'Inner City',
				region: '2nd Quadrant',
				postalCode: '88961',
				country: 'Coruscant'
			},
			groupId: null,
			sortOrder: 4,
			verifiedAt: 1634861779,
			verifyExpiry: null
		}
	],
	[
		4,
		{
			id: 4,
			type: AttributeType.ADDRESS,
			name: 'Vacation Home',
			valueId: 'addr2',
			value: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			groupId: null,
			sortOrder: 3,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		5,
		{
			id: 5,
			type: AttributeType.CREDENTIAL,
			name: 'Holocron Passcode',
			valueId: 'holopass',
			value: {
				identity: 'solo-han',
				passcode: 'r2-d2&c3p0'
			},
			groupId: null,
			sortOrder: 5,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		6,
		{
			id: 6,
			type: AttributeType.DATE_TIME,
			name: 'Scoundrel Meeting',
			valueId: 'meeting',
			value: {
				year: 2167,
				month: 1,
				day: 12
			},
			groupId: null,
			sortOrder: 6,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		7,
		{
			id: 7,
			type: AttributeType.SOCIAL,
			name: 'Instagram',
			valueId: 'insta',
			value: {
				handle: '__han.solo__',
				url: 'https://www.instagram.com/__han.solo__/'
			},
			groupId: null,
			sortOrder: 7,
			verifiedAt: null,
			verifyExpiry: null
		}
	]
])
