<script lang="ts">
	import { ShareIcon } from '@resplice/components'

	async function share() {
		await navigator.share({
			title: 'Resplice',
			text: 'Your Data. Your Control.',
			url: 'https://www.resplice.com'
		})
	}
</script>

{#if navigator.share}
	<button
		class="bg-brand-primary text-white rounded-xl p-3 transform transition duration-75 ease-out active:scale-90 focus:outline-none"
		on:click={share}
	>
		<ShareIcon width={24} height={24} />
	</button>
{/if}
