<script lang="ts">
	import { AttributeType, type Phone } from '@resplice/utils'
	import { t } from '$lib/i18n'
	import { ErrorType, errorFieldToString } from '$lib/protocol'
	import useProtocol from '$lib/hooks/useProtocol'
	import store from '$lib/store'
	import {
		AttributeItem,
		TextField,
		LockClosedIcon,
		ShieldCheckmarkIcon,
		Spinner
	} from '@resplice/components'

	const protocol = useProtocol()

	const CODE_LENGTH = 6

	const phonePreview: Phone = {
		id: 1,
		type: AttributeType.PHONE,
		name: 'Phone',
		value: { number: $store.phone, smsEnabled: true },
		sortOrder: 2
	}
	let phoneCode = ''
	let phonePromise: Promise<boolean>
	let phoneCodeError = ''

	$: {
		if (phoneCode.length >= CODE_LENGTH) {
			phonePromise = submitPhoneCode(parseInt(phoneCode, 10))
		}
	}

	async function submitPhoneCode(verifyCode: number): Promise<boolean> {
		const { event, error } = await protocol.verifyPhone({
			phone: $store.phone,
			verifyCode
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.UNAUTHORIZED].includes(error.type))
				location.replace('/')
			if (error.type === ErrorType.INVALID_INPUT) {
				const errorString = errorFieldToString(error.fields[0])
				phoneCodeError = $t(`auth.errors.${errorString}`)
			}

			return false
		}

		store.update((state) => ({
			...state,
			status: event.authStatus,
			accessToken: event.accessToken
		}))

		return true
	}
</script>

<div class="flex flex-col space-y-4 items-center">
	<AttributeItem attribute={phonePreview} itemType="disabled" showSecondAction={false} />
	<div class="w-full flex items-center">
		<div class="w-full mr-4">
			<TextField
				name="phone-code"
				label={$t('auth.enterCode')}
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
			{#await phonePromise}
				<Spinner />
			{:then codeIsValid}
				{#if codeIsValid}
					<ShieldCheckmarkIcon width={24} height={24} />
				{/if}
			{/await}
		</span>
	</div>
</div>
