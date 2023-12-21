import type { MomentState } from '$modules/moment/moment.store'

export const moments: MomentState = new Map([
	[
		1,
		{
			id: 1,
			name: 'Christmas Party',
			description: "Don't forget to bring a gift for the white elephant exchange!",
			coverImageUrl: '',
			startDatetime: new Date('2023-12-25T18:00:00'),
			duration: 120,
			timezone: 'America/Chicago',
			location: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			members: [
				{
					id: 1,
					name: 'John Doe',
					avatarUrl:
						'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				},
				{
					id: 2,
					name: 'Mary Jane',
					avatarUrl:
						'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				},
				{
					id: 3,
					name: 'Mark Jacobs',
					avatarUrl:
						'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				},
				{
					id: 4,
					name: 'Maya Edwards',
					avatarUrl: '',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				},
				{
					id: 5,
					name: 'Melissa Jones',
					avatarUrl: '',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				},
				{
					id: 6,
					name: 'Tom Cook',
					avatarUrl:
						'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
					phone: {
						number: '+15555555555',
						smsEnabled: true
					}
				}
			]
		}
	],
	[
		2,
		{
			id: 2,
			name: 'New Years Party',
			description: 'Free drinks!',
			coverImageUrl: '',
			startDatetime: new Date('2023-12-31T18:00:00'),
			duration: 450,
			timezone: 'America/Chicago',
			location: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			members: []
		}
	],
	[
		3,
		{
			id: 3,
			name: 'Tech Meetup',
			description: 'Bring your laptop!',
			coverImageUrl: '',
			startDatetime: new Date('2024-01-12T16:00:00'),
			duration: 140,
			timezone: 'America/Chicago',
			location: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			members: []
		}
	],
	[
		4,
		{
			id: 4,
			name: 'Game Night',
			description: 'Options are Catan, Monopoly, and Risk',
			coverImageUrl: '',
			startDatetime: new Date('2024-01-12T18:00:00'),
			duration: 215,
			timezone: 'America/Chicago',
			location: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			members: []
		}
	],
	[
		5,
		{
			id: 5,
			name: 'Dinner with Parents',
			description: 'I have heard this place is good',
			coverImageUrl: '',
			startDatetime: new Date('2024-01-13T16:00:00'),
			duration: 140,
			timezone: 'America/Chicago',
			location: {
				streetAddress1: '1961 S Palm Canyon Dr',
				streetAddress2: '',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'US'
			},
			members: []
		}
	]
])
