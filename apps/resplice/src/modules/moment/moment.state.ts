import proto from '@resplice/proto'
import type { MomentState } from '$modules/moment/moment.store'

export type MomentAggregate = MomentState

export function applyMomentEvent(aggregate: MomentAggregate, event: proto.Event): MomentAggregate {
	// switch (event.payload!.$case) {
	//   case 'momentAdded':
	// }
	console.log(event)
	return aggregate
}
