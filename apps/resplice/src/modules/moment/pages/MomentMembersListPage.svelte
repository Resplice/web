<script lang="ts">
	import { pop } from 'svelte-spa-router'
	import momentStore from '$modules/moment/moment.store'
	import Page from '$common/layouts/Page.svelte'
	import Header from '$common/components/Header.svelte'

	export let params: { id: string }
	$: moment = $momentStore.get(parseInt(params.id, 10))!

	$: {
		if (!moment) {
			pop()
		}
	}
</script>

<Page>
	<Header />
	<main class="bg-white rounded-t-3xl w-full max-w-xl m-auto flex-1 overflow-auto">
		Members list
	</main>
</Page>
