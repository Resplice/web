<script lang="ts">
	import { push } from 'svelte-spa-router'

	let day = new Date().getDate() === 15 ? 'tomorrow' : 'today'
</script>

<button
	class="flex-none bg-brand-primary px-4 py-2 text-slate-800 font-bold text-center rounded-b-lg"
	on:click={() => push('/party')}
>
	🎉 Resplice launch party {day} @ 4pm CST. Click here for party details!
</button>
