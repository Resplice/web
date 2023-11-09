import { InviteType, type Invite, type PendingConnection } from '$modules/invite/invite.types'
import { AttributeType } from '@resplice/utils'

export const invites = new Map<number, Invite>([
	[1, { id: 1, type: InviteType.PHONE, name: 'Emilie Pierce', value: '+19995550345', shares: [1] }],
	[2, { id: 2, type: InviteType.QR, name: 'Ian Noble', value: 'qruuid234', shares: [1] }]
])

export const pendingConnections = new Map<number, PendingConnection>([
	[
		1,
		{
			id: 1,
			name: 'Grant Jacobson',
			avatarUrl: 'https://i.pravatar.cc/250?img=8',
			inviteType: InviteType.PHONE,
			inviteValue: '+19995550345',
			attributes: [
				{ name: 'phone', attributeType: AttributeType.PHONE },
				{ name: 'email', attributeType: AttributeType.EMAIL }
			],
			expiresAt: 124123
		}
	]
])
