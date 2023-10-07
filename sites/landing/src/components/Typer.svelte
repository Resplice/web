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
	let messageEl: HTMLParagraphElement
	let isFinished = false

	onMount(() => {
		const type = new Type(messageEl, { delay: 50 })
		actions.forEach((action: any) => {
			switch (action.type) {
				case 'type':
					type.typeString(action.text)
					break
				case 'pause':
					type.pauseFor(action.duration)
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
		<RespliceRoundIcon width={50} height={50} />
	{/if}

	<p
		class={cx('p-4 ring-2 ring-brand-primary w-72 rounded-xl', {
			'rounded-tl-none': ctx === 'resplice',
			'rounded-tr-none': ctx === 'person',
			'hide-cursor': isFinished
		})}
		bind:this={messageEl}
	></p>
</div>

<style>
	:global(.hide-cursor .Typewriter__cursor) {
		display: none;
	}
</style>
