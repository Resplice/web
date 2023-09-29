<script lang="ts">
	import { type AttributeTypeConfig, type Attribute } from '@resplice/utils'
	import {
		AttributeItem,
		LockClosedIcon,
		ShieldCheckmarkIcon,
		Spinner,
		TextField
	} from '@resplice/components'
	import useProtocol from '$common/protocol/useProtocol'

	const protocol = useProtocol()
	const CODE_LENGTH = 6

	export let attributeTypeConfig: AttributeTypeConfig
	export let attribute: Attribute
	let phoneCode = ''
	let verifyPromise: Promise<boolean>
	let phoneCodeError = ''

	$: {
		if (phoneCode.length >= CODE_LENGTH) {
			verifyPromise = verifyPhone(parseInt(phoneCode, 10))
		}
	}

	async function verifyPhone(code: number) {
		return true
	}
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
	<div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
		<h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
		<AttributeItem itemType="disabled" {attribute} />
	</div>

	<div class="w-full flex items-center">
		<div class="w-full mr-4">
			<TextField
				name="phone-code"
				label="Enter Code"
				autocomplete="one-time-code"
				inputmode="numeric"
				autofocus
				bind:value={phoneCode}
				disabled={phoneCode.length >= CODE_LENGTH && !phoneCodeError}
				Icon={LockClosedIcon}
				bind:error={phoneCodeError}
			/>
		</div>
		<span class="text-brand-primary w-7 h-full">
			{#await verifyPromise}
				<Spinner />
			{:then codeIsValid}
				{#if codeIsValid}
					<ShieldCheckmarkIcon width={24} height={24} />
				{/if}
			{/await}
		</span>
	</div>
</div>
