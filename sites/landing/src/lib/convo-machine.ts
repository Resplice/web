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
				{ type: 'system', text: 'You & Resplice have joined the chat.' },
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
					type: 'prompt',
					options: [
						{
							prompt: 'Yes, tell me more!',
							path: 'INTRO_2'
						},
						{
							prompt: "Nah I'm good.",
							path: 'BAD_ENDING'
						}
					]
				}
			]
		},
		INTRO_2: {
			id: 'INTRO_2',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Resplice allows you to share'
						},
						{
							type: 'delete',
							characters: 5
						},
						{
							type: 'type',
							text: '*securely* share pretty much anything about yourself.'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: "But let's not get ahead of ourselves on technical details."
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Why would I use this?',
							path: 'WHY'
						},
						{
							prompt: 'Is it ready?',
							path: 'READY'
						},
						{
							prompt: 'How does it work?',
							path: 'HOW'
						}
					]
				}
			]
		},
		WHY: {
			id: 'WHY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: "You won't need to manage your contacts ever again. They manage themselves in your phone."
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Is it ready?',
							path: 'READY'
						},
						{
							prompt: 'How does it work?',
							path: 'HOW'
						},
						{
							prompt: 'I like to party.',
							path: 'PARTY_ENDING'
						}
					]
				}
			]
		},
		READY: {
			id: 'READY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: "It's almost ready... but while you are waiting, are you interested in a party? 🎉"
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'But why would I use this?',
							path: 'WHY'
						},
						{
							prompt: 'But how does it work?',
							path: 'HOW'
						},
						{
							prompt: 'I like to party.',
							path: 'PARTY_ENDING'
						}
					]
				}
			]
		},
		HOW: {
			id: 'HOW',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'You just store all the information about yourself in your profile and choose who gets to see what.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Why would I use this?',
							path: 'WHY'
						},
						{
							prompt: 'Is it ready?',
							path: 'READY'
						},
						{
							prompt: 'I like to party.',
							path: 'PARTY_ENDING'
						}
					]
				}
			]
		},
		PARTY_ENDING: {
			id: 'PARTY_ENDING',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'We do too! And that is why we would like to invite you to our <a href="https://app.resplice.com">launch party!</a> 🎉. Come hang out and learn more about what we are building.'
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
				},
				{ type: 'system', text: 'Resplice has left the chat.' }
			]
		},
		GOOD_ENDING: {
			id: 'GOOD_ENDING',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Thanks for chatting with us about the future of information sharing! We are still working on getting the app ready!'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'In the meantime, we would like to invite you to our <a href="https://app.resplice.com">launch party!</a> 🎉. See you there.'
						}
					]
				},
				{ type: 'system', text: 'Resplice has left the chat.' }
			]
		},
		BAD_ENDING: {
			id: 'BAD_ENDING',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'That\'s too bad... if you are ever interested in learning more about Resplice we have a <a href="https://app.resplice.com">launch party</a> coming up! Hope to see you there.'
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
