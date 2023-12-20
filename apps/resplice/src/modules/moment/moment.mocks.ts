import type { MomentState } from '$modules/moment/moment.store'

export const moments: MomentState = new Map([
	[
		1,
		{
			name: 'Christmas Party',
			description: "Don't forget to bring a gift for the white elephant exchange!",
			startDatetime: new Date('2023-12-25T18:00:00'),
			duration: 7200,
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
			name: 'New Years Party',
			description: 'Free drinks!',
			startDatetime: new Date('2023-12-31T18:00:00'),
			duration: 8600,
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
			name: 'Tech Meetup',
			description: 'Bring your laptop!',
			startDatetime: new Date('2024-01-12T16:00:00'),
			duration: 8600,
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
