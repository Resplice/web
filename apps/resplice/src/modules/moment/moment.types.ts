import type { AddressValue } from '@resplice/utils'

export type Moment = {
	name: string
	description: string
	startDatetime: Date
	duration: number // Minutes
	timezone: string
	location: AddressValue
}
