import { InviteType, type Invite } from '$modules/invite/invite.types'

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
