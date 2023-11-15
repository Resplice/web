<script lang="ts">
	import PartyHeader from '$common/components/PartyHeader.svelte'

	const showPartyHeader = new Date().getDate() === 15
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	{#if showPartyHeader}
		<PartyHeader />
	{/if}
	<slot />
</div>
