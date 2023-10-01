<script lang="ts">
	import { isOnline } from '$modules/_context/context.store'
</script>

{#if !$isOnline}
	<div class="fixed top-0 w-full p-2 flex justify-center">
		<div class="bg-gray-200 bg-opacity-25 text-center p-1 rounded-lg z-20">
			<p class="text-sm">Offline</p>
		</div>
	</div>
{/if}
