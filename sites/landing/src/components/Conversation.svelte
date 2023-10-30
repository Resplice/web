<script lang="ts">
	import { onMount } from 'svelte'
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
	let convoContainer: HTMLDivElement

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

	onMount(() => {
		if (!convoContainer) return

		let observer = new MutationObserver(() => {
			convoContainer.scroll({
				top: convoContainer.scrollHeight,
				left: 0,
				behavior: 'smooth'
			})
		})
		// On child list change, scroll to bottom
		observer.observe(convoContainer, { childList: true, subtree: true })

		return () => {
			observer.disconnect()
		}
	})
</script>

<div class="space-y-8 w-full h-full overflow-auto p-8" bind:this={convoContainer}>
	{#each convoState.activeStates as state}
		{#each convo.__machine__.states[state].instructions as instruction, idx}
			{#if idx <= convoState.stateInfo[state].instruction}
				{#if instruction.type === 'system'}
					<SystemMessage
            message={instruction.text}
            ctx={instruction.ctx}
            on:mount={() => onInstructionFinished(state)} />
				{:else if instruction.type === 'type'}
					<Typer
						actions={instruction.actions}
						ctx={instruction.ctx}
						pauseFor={instruction.pauseFor}
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
