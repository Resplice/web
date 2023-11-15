<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte'
	import cx from 'clsx'
	// @ts-ignore
	import Type from 'typewriter-effect/dist/core'
	import type { Action, TypeCtx } from '../lib/convo-machine'
	import RespliceRoundIcon from './RespliceRoundIcon.svelte'

	const dispatch = createEventDispatcher()

	export let actions: Action[]
	export let ctx: TypeCtx
	export let pauseFor: number
	let messageEl: HTMLParagraphElement
	let isFinished = false

	onMount(() => {
		const type = new Type(messageEl, { delay: 50 })
    type.changeCursor('...')
    type.pauseFor(pauseFor)
    type.changeCursor(' ')

		actions.forEach((action: any) => {
			switch (action.type) {
				case 'type':
					type.typeString(action.text)
					break
				case 'delete':
					type.deleteChars(action.characters)
					break
				case 'pause':
					type.pauseFor(action.duration)
					break
				case 'deleteAll':
					type.deleteAll(action.speed)
					break
				case 'stop':
					type.stop()
					break
			}
		})
		type.start()
		type.callFunction(() => {
			dispatch('done')
			isFinished = true
		})
	})
</script>

<div
	class={cx('flex space-x-4', {
		'justify-start': ctx === 'resplice',
		'justify-end': ctx === 'person'
	})}
>

	{#if ctx === 'resplice'}
    <div>
      <img src='/chad-profile-alt.webp' alt='chad@resplice.com' width={50} height={50} />
    </div>
	{/if}

	<p
		class={cx('p-4 w-72 rounded-xl', {
			'ring-2 ring-brand-primary rounded-tl-none': ctx === 'resplice',
			'ring-2 ring-brand-primary rounded-tr-none': ctx === 'person',
			'hide-cursor': isFinished
		})}
		bind:this={messageEl}
	></p>
</div>

<style>
	:global(.hide-cursor .Typewriter__cursor) {
		display: none;
	}

	:global(.Typewriter__wrapper a) {
		color: #1bbc9b;
		text-decoration: underline;
	}
</style>
