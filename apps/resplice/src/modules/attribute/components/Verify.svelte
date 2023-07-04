<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import useRespliceProtocol from '$common/hooks/useRespliceProtocol'
	import Modal from '@resplice/components/package/Modal.svelte'
	import TextField from '@resplice/components/package/form/TextField.svelte'
	import LockClosedIcon from '@resplice/components/package/icons/LockClosedIcon.svelte'
	import Spinner from '@resplice/components/package/skeleton/Spinner.svelte'

	const CODE_LENGTH = 6

	const dispatch = createEventDispatcher()
	const protocol = useRespliceProtocol()

	export let attributeId: number
	let code = ''
	let codePromise: Promise<void>

	async function verifyAttribute(code: number) {
		await protocol.attribute.verify(attributeId, code)
		dispatch('close')
	}

	$: {
		code = code.toUpperCase().substring(0, CODE_LENGTH)
		if (code.length >= CODE_LENGTH) {
			codePromise = verifyAttribute(parseInt(code, 10))
		}
	}
</script>

<Modal on:close={() => dispatch('close')}>
	<div class="w-full flex items-center p-8">
		<div class="w-full mr-4">
			<TextField
				name="code"
				label="Enter Code"
				autocomplete="one-time-code"
				bind:value={code}
				disabled={code.length >= CODE_LENGTH}
				Icon={LockClosedIcon}
			/>
		</div>
		<span class="text-brand-primary w-7 h-full">
			{#await codePromise}
				<Spinner />
			{/await}
		</span>
	</div>
</Modal>
