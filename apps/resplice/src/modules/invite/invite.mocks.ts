import { InviteType, type Invite } from '$modules/invite/invite.types'
import type { ProviderContact } from '$modules/invite/services/contactProviders'

export const invites = new Map<string, Invite>([
	[
		'value-hash-1',
		{ id: 'value-hash-1', type: InviteType.PHONE, name: 'Emilie Pierce', value: '+19995550345' }
	],
	[
		'value-hash-2',
		{ id: 'value-hash-2', type: InviteType.EMAIL, name: 'Ian Noble', value: 'ian.noble@gmail.com' }
	]
])

// export const pendingConnections = new Map<number, PendingConnection>([
// 	[
// 		1,
// 		{
// 			id: 1,
// 			name: 'Grant Jacobson',
// 			avatarUrl: 'https://i.pravatar.cc/250?img=8',
// 			inviteType: InviteType.PHONE,
// 			inviteValue: '+19995550345',
// 			attributes: [
// 				{ name: 'phone', attributeType: AttributeType.PHONE },
// 				{ name: 'email', attributeType: AttributeType.EMAIL }
// 			],
// 			expiresAt: 124123
// 		}
// 	]
// ])

export const providerContacts: ProviderContact[] = [
	{
		id: 'people/c7342918239664096439',
		name: 'Marcus Virginia',
		avatar:
			'https://lh3.googleusercontent.com/a-/ALV-UjVejmcHFe0LxIZpWDvTmcHNoDBoFEJUTTJm1hPnTh340bM=s100',
		attributes: [
			{
				type: 'phone',
				name: 'Phone 1',
				value: '+12185910657'
			},
			{
				type: 'phone',
				name: 'Phone 2',
				value: '+12184286564'
			}
		],
		inviteState: 'invited'
	},
	{
		id: 'people/c123',
		name: 'Awesome dudeeeee 1',
		avatar:
			'https://lh3.googleusercontent.com/a-/ALV-UjVejmcHFe0LxIZpWDvTmcHNoDBoFEJUTTJm1hPnTh340bM=s100',
		attributes: [
			{
				type: 'phone',
				name: 'Phone 1',
				value: '+12185910657'
			},
			{
				type: 'phone',
				name: 'Phone 2',
				value: '+12184286564'
			}
		],
		inviteState: 'connected'
	},
	{
		id: 'people/c34534523',
		name: 'Awesome dude 2',
		avatar:
			'https://lh3.googleusercontent.com/a-/ALV-UjVejmcHFe0LxIZpWDvTmcHNoDBoFEJUTTJm1hPnTh340bM=s100',
		attributes: [
			{
				type: 'phone',
				name: 'Phone 1',
				value: '+12185910657'
			},
			{
				type: 'phone',
				name: 'Phone 2',
				value: '+12184286564'
			}
		]
	},
	{
		id: 'people/c345234',
		name: 'Awesome dude 3',
		avatar:
			'https://lh3.googleusercontent.com/a-/ALV-UjVejmcHFe0LxIZpWDvTmcHNoDBoFEJUTTJm1hPnTh340bM=s100',
		attributes: [
			{
				type: 'phone',
				name: 'Phone 1',
				value: '+12185910657'
			},
			{
				type: 'phone',
				name: 'Phone 2',
				value: '+12184286564'
			}
		],
		inviteState: 'ignored'
	}
]
