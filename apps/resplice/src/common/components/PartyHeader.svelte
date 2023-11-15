<script lang="ts">
	import { push } from 'svelte-spa-router'
</script>

<button
	class="flex-none bg-brand-primary px-4 py-2 text-slate-800 font-bold text-center rounded-b-lg"
	on:click={() => push('/party')}
>
	🎉 Resplice launch party today @ 4pm CST. Click here for party details!
</button>
