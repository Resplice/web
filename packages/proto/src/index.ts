/* eslint-disable */

import * as proto from './generated/index.resplice.api'
import mockCommands from './mocks/commands'
import mockEvents from './mocks/events'

export default proto

export * from './serde'
export const mocks = {
	commands: mockCommands,
	events: mockEvents
}
