<script lang="ts">
	export let value: number
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: 'primary' | 'secondary' = 'primary'
</script>

<div class="w-full rounded bg-gray-100">
	<div
		class="rounded"
		class:bg-brand-primary={color === 'primary'}
		class:bg-indigo-600={color === 'secondary'}
		class:h-1={size === 'sm'}
		class:h-2={size === 'md'}
		class:h-4={size === 'lg'}
		style="width: {value}%;"
	></div>
</div>
