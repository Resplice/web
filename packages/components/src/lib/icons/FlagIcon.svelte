<script lang="ts">
	import './freakflags.css'

	export let countryCode: string
	export let width = 42
	export let height = 27
</script>

<div
	class="fflag fflag-{countryCode.toUpperCase()} ff-lg rounded-sm overflow-hidden"
	style="width: {width}px; height: {height}px;"
/>
