<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import { BackIcon, EllipsisHorizontalIcon, IconButton, Skeleton } from '@resplice/components'
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<nav class="flex-none flex items-center justify-between p-4">
		<IconButton Icon={BackIcon} on:click={() => pop()} />
		<IconButton Icon={EllipsisHorizontalIcon} />
	</nav>
	<main
		class="bg-white rounded-t-3xl rounded-b-3xl w-full max-w-xl m-auto flex-1 flex flex-col items-center overflow-auto mb-4"
	>
		<div class="w-full flex flex-col items-center justify-center space-y-2 my-8">
			<Skeleton variant="circle" width="144px" />
			<Skeleton variant="rect" width="75%" height="2.5rem" />
		</div>
		<div class="flex-1 flex flex-col space-y-4 w-full p-4">
			{#each Array(4) as _}
				<div class="w-full overflow-hidden flex items-center justify-between">
					<Skeleton variant="rect" width="48px" height="48px" />
					<div
						class="flex flex-col items-start justify-start text-left mx-4 flex-1 overflow-hidden"
					>
						<Skeleton variant="rect" width="125px" height="1.5rem" />
						<Skeleton variant="rect" width="200px" height="1.5rem" />
					</div>
					<Skeleton variant="rect" width="48px" height="48px" />
				</div>
			{/each}
		</div>
	</main>
</div>
