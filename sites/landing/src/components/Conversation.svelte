<script lang="ts">
	import Typer from './Typer.svelte'

	import convo from '../lib/convo-machine'
	import Prompt from './Prompt.svelte'
	import SystemMessage from './SystemMessage.svelte'

	type ConverstationState = {
		activeStates: string[]
		stateInfo: {
			[id: string]: {
				instruction: number
				promptSelections: Record<number, number> // Record<instruction, prompt>
			}
		}
	}

	let convoState: ConverstationState = initializeConversation()

	function initializeConversation() {
		const state = convo.start()
		return {
			activeStates: [state.id],
			stateInfo: {
				[state.id]: {
					instruction: 0,
					promptSelections: {}
				}
			}
		}
	}

	function onInstructionFinished(state: string) {
		convoState = {
			...convoState,
			stateInfo: {
				...convoState.stateInfo,
				[state]: {
					...convoState.stateInfo[state],
					instruction: convoState.stateInfo[state].instruction + 1
				}
			}
		}
	}

	function onPromptClick(state: string, instruction: number, prompt: number, path: string) {
		convoState = {
			activeStates: [...convoState.activeStates, path],
			stateInfo: {
				...convoState.stateInfo,
				[state]: {
					...convoState.stateInfo[state],
					instruction: convoState.stateInfo[state].instruction + 1,
					promptSelections: {
						...convoState.stateInfo[state].promptSelections,
						[instruction]: prompt
					}
				},
				[path]: {
					instruction: 0,
					promptSelections: {}
				}
			}
		}
	}
</script>

<div class="space-y-8">
	{#each convoState.activeStates as state}
		{#each convo.__machine__.states[state].instructions as instruction, idx}
			{#if idx <= convoState.stateInfo[state].instruction}
				{#if instruction.type === 'system'}
					<SystemMessage message={instruction.text} on:mount={() => onInstructionFinished(state)} />
				{:else if instruction.type === 'type'}
					<Typer
						actions={instruction.actions}
						ctx={instruction.ctx}
						on:done={() => onInstructionFinished(state)}
					/>
				{:else if instruction.type === 'prompt'}
					<div class="w-full flex flex-col items-end space-y-2">
						{#if convoState.stateInfo[state].promptSelections[idx] !== undefined}
							<Prompt
								prompt={instruction.options[convoState.stateInfo[state].promptSelections[idx]]
									.prompt}
								isSelected
							/>
						{:else}
							{#each instruction.options as { prompt, path }, optionIdx}
								<Prompt {prompt} on:click={() => onPromptClick(state, idx, optionIdx, path)} />
							{/each}
						{/if}
					</div>
				{/if}
			{/if}
		{/each}
	{/each}
</div>
