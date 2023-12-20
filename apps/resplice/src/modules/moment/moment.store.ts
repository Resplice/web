import { derived, writable, type Writable } from 'svelte/store'
import { getWeek } from 'date-fns'
import { moments as mockMoments } from '$modules/moment/moment.mocks'
import type { Moment } from '$modules/moment/moment.types'

export type MomentState = Map<number, Moment>
const momentStore = writable<MomentState>(mockMoments)
// const momentStore = writable<MomentState>(new Map())

export type MomentByWeekState = Map<number, Moment[]>
export const momentsByWeekStore = derived<Writable<MomentState>, MomentByWeekState>(
	momentStore,
	($momentStore) => {
		const momentsByWeek: MomentByWeekState = new Map()

		$momentStore.forEach((moment) => {
			const week = getWeek(moment.startDatetime)
			if (momentsByWeek.has(week)) {
				momentsByWeek.get(week)!.push(moment)
			} else {
				momentsByWeek.set(week, [moment])
			}
		})

		return momentsByWeek
	}
)

export type MomentStore = typeof momentStore

export default momentStore
