import type { MomentState } from '$modules/moment/moment.store'

export const moments: MomentState = new Map([
	[
		1,
		{
			id: 1,
			name: 'Christmas Party',
			description: "Don't forget to bring a gift for the white elephant exchange!",
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
			}
		}
	],
	[
		2,
		{
			id: 2,
			name: 'New Years Party',
			description: 'Free drinks!',
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
			}
		}
	],
	[
		3,
		{
			id: 3,
			name: 'Tech Meetup',
			description: 'Bring your laptop!',
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
			}
		}
	],
	[
		4,
		{
			id: 4,
			name: 'Game Night',
			description: 'Options are Catan, Monopoly, and Risk',
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
			}
		}
	],
	[
		5,
		{
			id: 5,
			name: 'Dinner with Parents',
			description: 'I have heard this place is good',
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
			}
		}
	]
])
