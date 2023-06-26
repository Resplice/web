<script lang="ts">
	import cx from 'clsx'

	export let href: string = '#'
	export let useNewWindow: boolean = false
	export let link: (node: HTMLAnchorElement) => void = () => {}
</script>

{#if useNewWindow}
	<a
		class={cx(
			$$props.class,
			'underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600'
		)}
		{href}
		target="_blank"
		rel="noreferrer"
	>
		<slot>link</slot>
	</a>
{:else}
	<a
		class={cx(
			$$props.class,
			'underline underline-offset-4 decoration-brand-primary decoration-2 text-gray-600'
		)}
		{href}
		use:link
	>
		<slot>link</slot>
	</a>
{/if}
