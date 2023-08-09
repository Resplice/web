<script lang="ts">
	import { AttributeType, type Email, type Phone } from '@resplice/utils'
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import { ErrorType, errorFieldToString } from '$lib/protocol'
	import store, { AuthStatus } from '$lib/store'
	import {
		AttributeItem,
		TextField,
		LockClosedIcon,
		ShieldCheckmarkIcon,
		Spinner
	} from '@resplice/components'

	const CODE_LENGTH = 6

	const protocol = useProtocol()

	const email: Email = {
		id: 0,
		type: AttributeType.EMAIL,
		name: 'Email',
		value: { email: $store.email },
		sortOrder: 1
	}
	const phone: Phone = {
		id: 1,
		type: AttributeType.PHONE,
		name: 'Phone',
		value: { number: $store.phone, smsEnabled: true },
		sortOrder: 2
	}

	let emailCode = ''
	let emailPromise: Promise<boolean>
	let emailCodeError = ''
	$: emailVerified = $store.status === AuthStatus.VERIFY_PHONE

	let phoneCode = ''
	let phonePromise: Promise<boolean>
	let phoneCodeError = ''

	$: {
		emailCode = emailCode.toUpperCase().substring(0, CODE_LENGTH)
		if (emailCode.length >= CODE_LENGTH) {
			emailPromise = submitEmailCode(parseInt(emailCode, 10))
		}
	}

	$: {
		phoneCode = phoneCode.toUpperCase().substring(0, CODE_LENGTH)
		if (phoneCode.length >= CODE_LENGTH) {
			phonePromise = submitPhoneCode(parseInt(phoneCode, 10))
		}
	}

	async function submitEmailCode(verifyCode: number): Promise<boolean> {
		const { authInfo, error } = await protocol.verifyEmail({
			email: email.value.email,
			phone: phone.value.number,
			verifyCode
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.INVALID_SESSION].includes(error.type))
				location.replace('/')
			if (error.type === ErrorType.INVALID_INPUT) {
				const errorString = errorFieldToString(error.fields[0])
				emailCodeError = $t(`auth.errors.${errorString}`)
			}

			return false
		}

		store.update((state) => ({
			...state,
			status: authInfo.status
		}))

		return true
	}

	async function submitPhoneCode(verifyCode: number): Promise<boolean> {
		const { authInfo, error } = await protocol.verifyPhone({
			email: email.value.email,
			phone: phone.value.number,
			verifyCode
		})

		if (error) {
			if ([ErrorType.INVALID_STATE, ErrorType.INVALID_SESSION].includes(error.type))
				location.replace('/')
			if (error.type === ErrorType.INVALID_INPUT) {
				const errorString = errorFieldToString(error.fields[0])
				emailCodeError = $t(`auth.errors.${errorString}`)
			}

			return false
		}

		store.update((state) => ({
			...state,
			status: authInfo.status
		}))

		return true
	}
</script>

<div class="flex-1 space-y-16">
	<div class="flex flex-col space-y-4 items-center">
		<AttributeItem attribute={email} itemType="disabled" showSecondAction={false} />
		<div class="w-full flex items-center">
			<div class="w-full mr-4">
				<TextField
					name="email-code"
					label={$t('auth.enterCode')}
					autocomplete="one-time-code"
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
	<div class="flex flex-col space-y-4 items-center">
		<AttributeItem attribute={phone} itemType="disabled" showSecondAction={false} />
		<div class="w-full flex items-center">
			<div class="w-full mr-4">
				<TextField
					name="phone-code"
					label={emailVerified ? $t('auth.enterCode') : $t('auth.verifyEmail')}
					autocomplete="one-time-code"
					bind:value={phoneCode}
					disabled={(!emailVerified || phoneCode.length >= CODE_LENGTH) && !phoneCodeError}
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
</div>
