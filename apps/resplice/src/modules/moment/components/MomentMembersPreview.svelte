<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { AvatarGroup } from '@resplice/components'
	import type { Moment } from '$modules/moment/moment.types'

	export let moment: Moment

	const shownMembers = moment.members.length > 5 ? moment.members.slice(0, 5) : moment.members
</script>

{#if moment.members.length}
	<div>
		<button
			class="flex space-x-2 items-center"
			on:click={() => push(`/moment/${moment.id}/members`)}
		>
			<AvatarGroup
				profiles={shownMembers.map((member) => ({
					seed: member.id.toString(),
					source: member.avatarUrl
				}))}
				size="sm"
			/>
			{#if moment.members.length > 5}
				<span class="text-sm text-slate-600">+{moment.members.length - 5} more</span>
			{/if}
		</button>
	</div>
{/if}
