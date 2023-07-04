<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import useRespliceProtocol from '$common/hooks/useRespliceProtocol'
	import Modal from '@resplice/components/package/Modal.svelte'
	import Button from '@resplice/components/package/ButtonAlt.svelte'

	const dispatch = createEventDispatcher()
	const protocol = useRespliceProtocol()

	export let attributeId: number
</script>

<Modal on:close={() => dispatch('close')} let:close>
	<div class="mt-8 px-4 w-full">
		<Button
			class="!border-red-600 !text-red-600"
			on:click={async () => {
				await protocol.attribute.delete(attributeId)
				close()
			}}
		>
			Delete Attribute
		</Button>
	</div>
</Modal>
