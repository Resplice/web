/* eslint-disable */

import * as proto from './generated/index.resplice.api'
import mockCommands from './mocks/commands'
import mockEvents from './mocks/events'

export default proto

type BaseMessage = { id: number }
export type Command = BaseMessage & proto.Command
export type Query = BaseMessage & proto.Query
export type Event = proto.Event
export type Events = proto.Events

export * from './serde'
export const mocks = {
	commands: mockCommands,
	events: mockEvents
}
