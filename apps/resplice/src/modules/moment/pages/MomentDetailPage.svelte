<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import Header from '$common/components/Header.svelte'
	import Page from '$common/layouts/Page.svelte'
	import momentStore from '$modules/moment/moment.store'
	import MomentAttributes from '$modules/moment/components/MomentAttributes.svelte'
	import defaultEventImage from '$assets/default-event-bg.png'
	import MomentMembersPreview from '$modules/moment/components/MomentMembersPreview.svelte'

	export let params: { id: string }
	$: moment = $momentStore.get(parseInt(params.id, 10))!

	$: {
		if (!moment) {
			pop()
		}
	}
</script>

{#if moment}
	<Page title={moment.name}>
		<Header showContext />
		<main class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-1 overflow-auto">
			<img
				class="w-full h-24 object-cover"
				alt={`${moment.name} Cover Image`}
				src={moment.coverImageUrl || defaultEventImage}
			/>
			<div class="p-8">
				<h1 class="font-semibold text-2xl">{moment.name}</h1>
				<p class="text-slate-600">{moment.description}</p>
			</div>
			<div class="w-full px-8 space-y-4">
				<MomentMembersPreview {moment} />
				<MomentAttributes {moment} />
			</div>
		</main>
	</Page>
{/if}
