import type { Connection } from '$modules/connection/connection.types'
import { AttributeType } from '@resplice/utils'

export const connections = new Map<number, Connection>([
	[
		1,
		{
			id: 1,
			name: 'Avery Spears',
			handle: '@avery_axx',
			avatarUrl: 'https://i.pravatar.cc/250?img=1',
			alias: '',
			description: '',
			attributes: [
				{
					id: 1,
					connectionId: 1,
					type: AttributeType.PHONE,
					name: 'Personal Phone',
					value: {
						number: '+19995550622',
						smsEnabled: true
					},
					sortOrder: 1
				},
				{
					id: 2,
					connectionId: 1,
					type: AttributeType.EMAIL,
					name: 'Personal Email',
					value: {
						email: 'avery.spears@singers.web'
					},
					sortOrder: 2
				}
			],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		2,
		{
			id: 2,
			name: 'Bella Huber',
			handle: '@bella_amm',
			avatarUrl: 'https://i.pravatar.cc/250?img=5',
			alias: '',
			description: '',
			attributes: [
				{
					id: 1,
					connectionId: 2,
					type: AttributeType.PHONE,
					name: 'Personal Phone',
					value: {
						number: '+19995550325',
						smsEnabled: true
					},
					sortOrder: 1
				}
			],
			sharedAttributeIds: [1],
			isFavored: true,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		3,
		{
			id: 3,
			name: 'Caleb Thompsen',
			handle: '@caleb_app',
			avatarUrl: 'https://i.pravatar.cc/250?img=6',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: true,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		4,
		{
			id: 4,
			name: 'Caleb Teezette',
			handle: '@connor_att',
			avatarUrl: 'https://i.pravatar.cc/250?img=61',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: true,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		5,
		{
			id: 5,
			name: 'Emilie Pierce',
			handle: '@emilie_aii',
			avatarUrl: 'https://i.pravatar.cc/250?img=9',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		6,
		{
			id: 6,
			name: 'Gordon Hobbs',
			handle: '@gordon_auu',
			avatarUrl: 'https://i.pravatar.cc/250?img=7',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		7,
		{
			id: 7,
			name: 'Grant Jacobson',
			handle: '@grant_aoo',
			avatarUrl: 'https://i.pravatar.cc/250?img=8',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		8,
		{
			id: 8,
			name: 'Haley Hutchinson',
			handle: '@haley_aff',
			avatarUrl: 'https://i.pravatar.cc/250?img=10',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		9,
		{
			id: 9,
			name: 'Ian Noble',
			handle: '@ian_ayy',
			avatarUrl: 'https://i.pravatar.cc/250?img=11',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		10,
		{
			id: 10,
			name: 'Johan Freeman',
			handle: '@johan_azz',
			avatarUrl: 'https://i.pravatar.cc/250?img=12',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		11,
		{
			id: 11,
			name: 'Jorge Pearson',
			handle: 'The Plumber',
			avatarUrl: 'https://i.pravatar.cc/250?img=14',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		12,
		{
			id: 12,
			name: 'Justine Burke',
			handle: '@justine_akk',
			avatarUrl: 'https://i.pravatar.cc/250?img=13',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		13,
		{
			id: 13,
			name: 'Kamron Acevedo',
			handle: '@kamron_ass',
			avatarUrl: 'https://i.pravatar.cc/250?img=15',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		14,
		{
			id: 14,
			name: 'Kolton Carey',
			handle: '@kolton_ann',
			avatarUrl: 'https://i.pravatar.cc/250?img=18',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		15,
		{
			id: 15,
			name: 'Kristina Bautista',
			handle: '@kristina_ahh',
			avatarUrl: 'https://i.pravatar.cc/250?img=50',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		16,
		{
			id: 16,
			name: 'Leon Wilkinson',
			handle: '@leon_aww',
			avatarUrl: 'https://i.pravatar.cc/250?img=35',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		17,
		{
			id: 17,
			name: 'Leyla Benson',
			handle: '@leyla_aee',
			avatarUrl: 'https://i.pravatar.cc/250?img=39',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		18,
		{
			id: 18,
			name: 'Lilly Rayban',
			handle: '@lilly_acc',
			avatarUrl: 'https://i.pravatar.cc/250?img=55',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		19,
		{
			id: 19,
			name: 'Marc Bartlett',
			handle: '@marc_arr',
			avatarUrl: 'https://i.pravatar.cc/250?img=40',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		20,
		{
			id: 20,
			name: 'Marlee Hansen',
			handle: '@marlee_ajj',
			avatarUrl: 'https://i.pravatar.cc/250?img=34',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		21,
		{
			id: 21,
			name: 'Micaela Walsh',
			handle: '@micaela_all',
			avatarUrl: 'https://i.pravatar.cc/250?img=18',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		22,
		{
			id: 22,
			name: 'Natasha Hess',
			handle: '@natasha_aaa',
			avatarUrl: 'https://i.pravatar.cc/250?img=1',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		23,
		{
			id: 23,
			name: 'Ryan Poole',
			handle: '@ryan_aqq',
			avatarUrl: 'https://i.pravatar.cc/250?img=13',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		24,
		{
			id: 24,
			name: 'Tania Obrien',
			handle: '@tania_add',
			avatarUrl: 'https://i.pravatar.cc/250?img=12',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		25,
		{
			id: 25,
			name: 'Tia Carlson',
			handle: '@tia_abb',
			avatarUrl: 'https://i.pravatar.cc/250?img=28',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		26,
		{
			id: 26,
			name: 'Yaretzi Preston',
			handle: '@yaretzi_agg',
			avatarUrl: 'https://i.pravatar.cc/250?img=23',
			alias: '',
			description: '',
			attributes: [],
			sharedAttributeIds: [1],
			isFavored: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	]
])
