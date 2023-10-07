export type State = {
	id: string
	instructions: Instruction[]
}

export type Instruction =
	| {
			type: 'system'
			text: string
	  }
	| {
			type: 'type'
			ctx: TypeCtx
			actions: Action[]
	  }
	| {
			type: 'prompt'
			options: { prompt: string; path: string }[]
	  }

export type TypeCtx = 'resplice' | 'person'

type TypeAction = {
	type: 'type'
	text: string
}
type DeleteAction = {
	type: 'delete'
	characters: number
}
type PauseAction = {
	type: 'pause'
	seconds: number
}
export type Action = TypeAction | DeleteAction | PauseAction

type ConversationMachine = {
	initialState: string
	states: Record<string, State>
}
const convoMachine: ConversationMachine = {
	initialState: 'GREETING',
	states: {
		GREETING: {
			id: 'GREETING',
			instructions: [
				{ type: 'system', text: 'Resplice & Other Guy have joined the chat.' },
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Hello and welcome to Resplice! Are you ready to change the way you share information online?'
						}
					]
				},
				{
					type: 'type',
					ctx: 'person',
					actions: [{ type: 'type', text: 'Yes I am ready! Tell me more!' }]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Okay let me tell you more! Bla Bla Bla...'
						}
					]
				},
				{
					type: 'type',
					ctx: 'person',
					actions: [{ type: 'type', text: 'Wow very cool, I will be sure to check it out!' }]
				},
				{ type: 'system', text: 'Other Guy has left the chat.' },
				{ type: 'system', text: 'You have joined chat.' },
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Yeah keep going...',
							path: 'PROBLEM'
						},
						{
							prompt: "Wait maybe you shouldn't tell me more",
							path: 'ENDING'
						}
					]
				}
			]
		},
		PROBLEM: {
			id: 'PROBLEM',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Problem goes here'
						}
					]
				}
			]
		},
		ENDING: {
			id: 'ENDING',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Ending goes here'
						}
					]
				},
				{ type: 'system', text: 'Resplice has left the chat.' }
			]
		}
	}
}

function start(): State {
	return convoMachine.states[convoMachine.initialState]
}

function goto(nextState: string): State {
	return convoMachine.states[nextState]
}

export default {
	__machine__: convoMachine,
	start,
	goto
}
