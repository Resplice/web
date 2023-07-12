<script lang="ts">
	import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import store, { AuthStatus } from '$lib/store'
	import {
		AttributeItem,
		TextField,
		LockClosedIcon,
		ShieldCheckmarkIcon,
		Spinner
	} from '@resplice/components'
	import { AttributeType, type Email, type Phone } from '@resplice/utils'

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
	$: accessToken = $store.accessToken

	let emailCode = ''
	let emailPromise: Promise<boolean>
	let emailCodeError = ''
	$: emailVerified = $store.status === AuthStatus.PENDING_PHONE_VERIFICATION

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

	async function submitEmailCode(verificationCode: number): Promise<boolean> {
		const { event, error } = await protocol.verifyAuthEmail({
			email: email.value.email,
			phone: phone.value.number,
			verificationCode,
			accessToken
		})

		if (error) {
			if (error.type === 'INVALID_STATE') location.replace('/')
			emailCodeError = $t(`auth.errors.${error.type}`)
			return false
		}

		store.update((state) => ({
			...state,
			status: AuthStatus.PENDING_PHONE_VERIFICATION,
			accessToken: event.accessToken
		}))

		return true
	}

	async function submitPhoneCode(verificationCode: number): Promise<boolean> {
		const { event, error } = await protocol.verifyAuthPhone({
			email: email.value.email,
			phone: phone.value.number,
			verificationCode,
			accessToken
		})

		if (error) {
			if (error.type === 'INVALID_STATE') location.replace('/')
			phoneCodeError = $t(`auth.errors.${error.type}`)
			return false
		}

		store.update((state) => ({
			...state,
			status: AuthStatus.PENDING_PHONE_VERIFICATION,
			accessToken: event.accessToken
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
