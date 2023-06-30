<script lang="ts">
	export let code: string
</script>

<div class="p-4 bg-slate-600 text-slate-200 rounded-lg w-full flex items-start justify-between">
	<textarea class="overflow-auto bg-transparent w-full h-96" bind:value={code} />
</div>
