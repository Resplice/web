<script lang="ts">
	import { onMount } from 'svelte'
	import cx from 'clsx'
	import RespliceRoundIcon from './RespliceRoundIcon.svelte'
	// @ts-ignore
	import Type from 'typewriter-effect/dist/core'

	type TypeCommand = {
		type: 'type'
		text: string
	}
	type PauseCommand = {
		type: 'pause'
		duration: number
	}
	type GoCommand = {
		type: 'go'
	}
	type Commands = TypeCommand | PauseCommand | GoCommand

	export let commands: Commands[]
	export let ctx: 'resplice' | 'person'
	let messageEl: HTMLParagraphElement

	onMount(() => {
		const type = new Type(messageEl, { delay: 50 })
		commands.forEach((command: any) => {
			switch (command.type) {
				case 'type':
					type.typeString(command.text)
					break
				case 'pause':
					type.pauseFor(command.duration)
					break
				case 'go':
					type.start()
					break
			}
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
			'rounded-tr-none': ctx === 'person'
		})}
		bind:this={messageEl}
	></p>
</div>
