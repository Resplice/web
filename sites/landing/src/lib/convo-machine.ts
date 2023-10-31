export type State = {
	id: string
	instructions: Instruction[]
}

export type Instruction =
	| {
			type: 'system'
			ctx: TypeCtx
			text: string
	  }
	| {
			type: 'type'
			ctx: TypeCtx
			pauseFor: number
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
type DeleteAllAction = {
	type: 'deleteAll'
	speed: number
}
type PauseAction = {
	type: 'pause'
	duration: number
}
type StopAction = {
	type: 'stop'
}
export type Action = TypeAction | DeleteAction | DeleteAllAction | PauseAction | StopAction

type ConversationMachine = {
	initialState: string
	states: Record<string, State>
}
const convoMachine: ConversationMachine = {
	initialState: 'HAPPY',
	states: {
    HAPPY: {
			id: 'HAPPY',
			instructions: [
				{ type: 'system', ctx: 'resplice', text: 'chad@resplice has joined the chat.' },
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 1200,
					actions: [
            {
							type: 'type',
							text: 'Happy Halloween! 🎃'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
            {
							type: 'type',
							text: 'Trick or Treat?'
						}
					]
				},
				{ type: 'system', ctx: 'person', text: 'You have joined the chat.' },
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Trick',
							path: 'TRICK'
						},
						{
							prompt: 'Treat',
							path: 'INTRO'
						}
					]
				}
			]
		},
		INTRO: {
			id: 'INTRO',
			instructions: [
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 300,
					actions: [
            {
							type: 'type',
							text: 'Welcome to Resplice!'
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
            {
							type: 'type',
							text: 'The system that gives you back control of your data.'
						}
					]
				},
				{ type: 'system', ctx: 'person', text: 'You have joined the chat.' },
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Wow, really?',
							path: 'YEP'
						},
						{
							prompt: 'Sounds like propaganda',
							path: 'PROP'
						}
					]
				}
			]
		},
		YEP: {
			id: 'YEP',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					pauseFor: 300,
					actions: [
            {
							type: 'type',
							text: 'Yes, really.'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 900,
					actions: [
						{
							type: 'type',
							text: 'Anything you add to Resplice is totally confidential and soon you will be able to share that info easily with friends and family.'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'This is why we built Resplice...'
						},
            {
							type: 'type',
							text: '<br><br>'
						},
            {
							type: 'pause',
							duration: 900
						},
            {
							type: 'type',
							text: '<b>Your Data. </b>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: '<b>Your Control.</b>'
						}
					]
				},
        {
					type: 'prompt',
					options: [
						{
							prompt: 'Did I hear rumor of a party?',
							path: 'PARTY'
						},
						{
							prompt: 'Tell me more',
							path: 'APP_INTRO'
						}
					]
				}
			]
		},
		PROP: {
			id: 'PROP',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					pauseFor: 300,
					actions: [
						{
							type: 'type',
							text: 'I get it...'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: 'I do'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 900,
					actions: [
						{
							type: 'type',
							text: 'Who wants to sign-up for another site, install another app, and have to worry "again" about their data being lost or sold?'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 300,
					actions: [
						{
							type: 'type',
							text: 'Not me. '
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: 'F'
						},
            {
							type: 'pause',
							duration: 300
						},
            {
							type: 'delete',
							characters: 1
						},
            {
							type: 'type',
							text: '🤬 no!'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'This is why we built Resplice...'
						},
            {
							type: 'type',
							text: '<br><br>'
						},
            {
							type: 'pause',
							duration: 900
						},
            {
							type: 'type',
							text: '<b>Your Data. </b>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: '<b>Your Control.</b>'
						}
					]
				},
        {
					type: 'prompt',
					options: [
            {
							prompt: 'Did I hear rumor of a party?',
							path: 'PARTY'
						},
						{
							prompt: 'Tell me more',
							path: 'APP_INTRO'
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
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'The rumors are true... <br><br>'
						},
            {
							type: 'pause',
							duration: 300
						},
            {
							type: 'type',
							text: '<b>Resplice Launch Party!</b><br> November 16, 2023<br><br>'
						},
            {
							type: 'pause',
							duration: 300
						},
						{
							type: 'type',
							text: 'You... <br>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: 'Your friends...<br>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: 'Your family...<br><br>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: '<b>ALL ARE INVITED!</b>'
						},
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'Click <b>\"Let\'s Party\"</b> below and enter your phone number for more details.'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'Oh... and the next 100 people to RSVP get...<br><br>'
						},
            {
							type: 'pause',
							duration: 900
						},
            {
							type: 'type',
							text: '<b>Free Drinks</b> on us! 🍺'
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
					pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'So now might be a good time to reach out to your friends and family 😊'
						}
					]
				},
				{
					type: 'prompt',
					options: [
            {
							prompt: 'How many free drinks?',
							path: 'LUSH'
						},
            {
							prompt: 'I already signed up.',
							path: 'ALREADY'
						},
						{
							prompt: 'Tell me more about Resplice',
							path: 'APP_INTRO'
						}
					]
				}
			]
		},
    LUSH: {
			id: 'LUSH',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
					pauseFor: 300,
					actions: [
						{
							type: 'type',
							text: 'Okay, you lush... just chill. 😂<br><br>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: 'You will receive more than one free drink, but probably less than...<br><br>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: '"An amount beyond the limits of human consumption" 🤪'
						}
					]
				},
				{
					type: 'prompt',
					options: [
						{
							prompt: 'Tell me more about Resplice',
							path: 'APP_INTRO'
						}
					]
				}
			]
		},
		ALREADY: {
			id: 'ALREADY',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
          pauseFor: 300,
					actions: [
						{
							type: 'type',
							text: 'Awesome! Thank you! <br><br>'
						},
            {
							type: 'type',
							text: 'You will also be receiving something that makes you feel warm and fuzzy.'
						}
					]
				},
				{
					type: 'prompt',
					options: [
            {
							prompt: 'I have more questions',
							path: 'APP_INTRO'
						}
					]
				}
			]
		},
		APP_INTRO: {
			id: 'APP_INTRO',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
          pauseFor: 300,
					actions: [
            {
							type: 'type',
              text: 'Consider me impressed...<br><br>By this point... <br>I would have just clicked<br><b>Let\'s Party</b> <br><br>but hey...<br><br>',
						},
            {
							type: 'pause',
							duration: 300
						},
            {
							type: 'type',
							text: 'You do you ;)',
						}
					]
				},
				{
					type: 'type',
					ctx: 'resplice',
          pauseFor: 600,
					actions: [
						{
							type: 'type',
							text: 'Many of your questions might be answered in our FAQ...<br><br>'
						},
            {
              type: 'pause',
							duration: 300
						},
						{
							type: 'type',
							text: 'But let\'s see if I can guess your question<br>'
						},
            {
              type: 'pause',
							duration: 300
						},
            {
							type: 'type',
							text: '...'
						},
            {
              type: 'pause',
							duration: 900
						}
					]
				},
        {
					type: 'prompt',
					options: [
						{
							prompt: 'Why would I use Resplice?',
							path: 'BECAUSE'
						}
					]
				}
			]
		},
    BECAUSE: {
			id: 'BECAUSE',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
          pauseFor: 300,
					actions: [
            {
							type: 'type',
              text: 'Because, you can safely store <br>anything regarding... <br><br>',
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
              text: '- Your contact info<br>- Your accounts<br>- Your home<br>- Your work<br>- Your ideas<br><br>',
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
              text: 'And easily share...<br>',
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
              text: 'Exactly what you want...<br>',
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
              text: 'With whom you want...',
						}
					]
				},
        {
					type: 'type',
					ctx: 'resplice',
          pauseFor: 300,
					actions: [
            {
							type: 'type',
              text: 'The best part is, no one else will know you shared a thing! <br><br>',
						},
            {
							type: 'type',
              text: 'Remember...<br><br>',
						},
            {
							type: 'pause',
							duration: 900
						},
            {
							type: 'type',
							text: '<b>Your Data. </b>'
						},
            {
							type: 'pause',
							duration: 600
						},
            {
							type: 'type',
							text: '<b>Your Control.</b>'
						}
					]
				},
        {
          type: 'prompt',
					options: [
						{
							prompt: 'Did I hear rumor of a party?',
							path: 'PARTY'
						}
					]
				}
      ]
    },
    YES: {
			id: 'YES',
			instructions: [
				{
					type: 'type',
					ctx: 'resplice',
          pauseFor: 300,
					actions: [
            {
							type: 'type',
              text: 'Yes.',
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
