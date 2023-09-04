<script lang="ts">
	import { AttributeType, type Email } from '@resplice/utils'
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

	const emailPreview: Email = {
		id: 0,
		type: AttributeType.EMAIL,
		name: 'Email',
		value: { email: $store.email },
		sortOrder: 1
	}
	let emailCode = ''
	let emailPromise: Promise<boolean>
	let emailCodeError = ''

	$: {
		if (emailCode.length >= CODE_LENGTH) {
			emailPromise = submitEmailCode(parseInt(emailCode, 10))
		}
	}

	async function submitEmailCode(verifyCode: number): Promise<boolean> {
		const { event, error } = await protocol.verifyEmail({
			email: $store.email,
			phone: $store.phone,
			verifyCode
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.UNAUTHORIZED].includes(error.type))
				location.replace('/')
			if (error.type === ErrorType.INVALID_INPUT) {
				const errorString = errorFieldToString(error.fields[0])
				emailCodeError = $t(`auth.errors.${errorString}`)
			}

			return false
		}

		store.update((state) => ({
			...state,
			status: event.authStatus
		}))

		return true
	}
</script>

<div class="flex flex-col space-y-4 items-center">
	<AttributeItem attribute={emailPreview} itemType="disabled" showSecondAction={false} />
	<div class="w-full flex items-center">
		<div class="w-full mr-4">
			<TextField
				name="email-code"
				label={$t('auth.enterCode')}
				autocomplete="one-time-code"
				inputmode="numeric"
				bind:value={emailCode}
				disabled={emailCode.length >= CODE_LENGTH && !emailCodeError}
				Icon={LockClosedIcon}
				bind:error={emailCodeError}
			/>
		</div>
		<span class="text-brand-primary w-7 h-full">
			{#await emailPromise}
				<Spinner />
			{:then codeIsValid}
				{#if codeIsValid}
					<ShieldCheckmarkIcon width={24} height={24} />
				{/if}
			{/await}
		</span>
	</div>
</div>
