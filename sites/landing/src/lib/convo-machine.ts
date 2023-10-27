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
				{ type: 'system', text: 'You have joined the chat.' },
				{ type: 'system', text: 'chad@resplice has joined the chat.' },
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
							path: 'REALLY'
						}
					]
				}
			]
		},
		REALLY: {
			id: 'REALLY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Yep! But, before we talk details, Marcus and I want to invite you to the Resplice Launch Party.'
						}
					]
				},
        {
					type: 'prompt',
					options: [
						{
							prompt: 'Launch party?',
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
							text: 'Yeah, just click \"Let\'s Party\" below and enter your phone number for details.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
            {
							prompt: 'Why do I have to share my phone number?',
							path: 'PHONE'
						},
						{
							prompt: 'Can I invite others to the party?',
							path: 'OTHERS'
						},
            {
							prompt: 'What if I can\'t make the party?',
							path: 'NOGO'
						},
            {
							prompt: 'Can you tell me more about the app?',
							path: 'APP'
						}
					]
				}
			]
		},
    PHONE: {
			id: 'PHONE',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Actually, you are not sharing anything :)'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'The system is designed to allow one account per phone number and that phone number is totally private.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Can I invite others to the party?',
							path: 'OTHERS'
						},
            {
							prompt: 'What if I can\'t make the party?',
							path: 'NOGO'
						},
            {
							prompt: 'Can you tell me more about the app?',
							path: 'APP'
						}
					]
				}
			]
		},
		OTHERS: {
			id: 'OTHERS',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Yes, please do! Invite your friends. Invite your family.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
            {
							prompt: 'Why do I have to share my phone number?',
							path: 'PHONE'
						},
            {
							prompt: 'What if I can\'t make the party?',
							path: 'NOGO'
						},
            {
							prompt: 'Can you tell me more about the app?',
							path: 'APP'
						}
					]
				}
			]
		},
		NOGO: {
			id: 'NOGO',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: "No worries, sign-up anyway and build out your profile."
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'You will also be able to start securely sharing very soon!'
						}
					]
				},
        {
					type: 'prompt',
					options: [
            {
							prompt: 'Why do I have to share my phone number?',
							path: 'PHONE'
						},
						{
							prompt: 'Can I invite others to the party?',
							path: 'OTHERS'
						},
            {
							prompt: 'Can you tell me more about the app?',
							path: 'APP'
						}
					]
				}
			]
		},
		APP: {
			id: 'APP',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'Absolutely, the best way to learn about the app is to RSVP, click around and visit faq.resplice.com'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					actions: [
						{
							type: 'type',
							text: 'You can always ask more questions, just email or text Marcus or I'
						}
					]
				},
        {
					type: 'prompt',
					options: [
            {
							prompt: 'Why do I have to share my phone number?',
							path: 'PHONE'
						},
						{
							prompt: 'Can I invite others to the party?',
							path: 'OTHERS'
						},
            {
							prompt: 'What if I can\'t make the party?',
							path: 'NOGO'
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
