import type { AddressValue, PhoneValue } from '@resplice/utils'

export type MomentMember = {
	id: number
	name: string
	avatarUrl: string
	phone: PhoneValue
}
export type Moment = {
	id: number
	name: string
	description: string
	coverImageUrl: string
	startDatetime: Date
	duration: number // Minutes
	timezone: string
	location: AddressValue
	members: MomentMember[]
}
