import type { AddressValue } from '@resplice/utils'

export type Moment = {
	name: string
	description: string
	startDatetime: Date
	duration: number // Seconds
	timezone: string
	location: AddressValue
}
