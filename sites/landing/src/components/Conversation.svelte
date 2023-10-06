<script lang="ts">
	import Typer from './Typer.svelte'
</script>

<div class="space-y-8">
	<Typer
		commands={[
			{
				type: 'type',
				text: 'Hello and welcome to Resplice.'
			},
			{ type: 'go' }
		]}
		ctx="resplice"
	/>

	<Typer
		commands={[
			{
				type: 'type',
				text: 'Hello and welcome to Resplice.'
			},
			{ type: 'go' }
		]}
		ctx="person"
	/>
</div>
