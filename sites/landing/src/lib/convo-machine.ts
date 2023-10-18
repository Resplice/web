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
				{ type: 'system', text: 'You & Chad have joined the chat.' },
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Hello and welcome to Resplice!'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Your future home of all sharing across the internet.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Wow, really?',
							path: 'GREETING_2'
						}
					]
				}
			]
		},
		GREETING_2: {
			id: 'GREETING_2',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Yes, really! But before we talk details, Marcus and I want to invite you to launch party. '
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'A party?',
							path: 'PARTY'
						}
					]
				}
			]
		},
		PARTY: {
			id: 'PARTY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Yes. Each adult must RSVP for themselves so we have an accurate headcount.'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Come for the evening or just for a little while.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Can I invite others?',
							path: 'PARTY_INVITE_OTHERS'
						}
					]
				}
			]
		},
		PARTY_INVITE_OTHERS: {
			id: 'PARTY_INVITE_OTHERS',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Yes, we want everyone we know and everyone you know to be there.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Where do I RSVP?',
							path: 'LETS_PARTY'
						},
						{
							prompt: 'I might not be able to make the party.',
							path: 'LETS_PARTY_NO'
						}
					]
				}
			]
		},
		LETS_PARTY: {
			id: 'LETS_PARTY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: "Click 'Let's Party' in the lower right! 🎉"
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'See you there!'
						}
					]
				}
			]
		},
		LETS_PARTY_NO: {
			id: 'LETS_PARTY_NO',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'No worries, sign-up anyway and build out your profile.'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'You will be able to share very soon!'
						}
					]
				}
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
