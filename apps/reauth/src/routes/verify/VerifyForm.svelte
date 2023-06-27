<script lang="ts">
	import { goto } from '$app/navigation'
	// import { t } from '$lib/i18n'
	import useProtocol from '$lib/hooks/useProtocol'
	import store, { AuthStep, type AuthStore } from '$lib/store'
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
		value: { email: ($store as AuthStore).email },
		sortOrder: 1
	}
	const phone: Phone = {
		id: 1,
		type: AttributeType.PHONE,
		name: 'Phone',
		value: { number: ($store as AuthStore).phone },
		sortOrder: 2
	}
	$: accessKey = ($store as AuthStore).accessKey

	let emailCode = ''
	let emailPromise: Promise<boolean>
	$: emailVerified = $store.step === AuthStep.VERIFY_PHONE

	let phoneCode = ''
	let phonePromise: Promise<boolean>

	$: {
		emailCode = emailCode.toUpperCase().substring(0, CODE_LENGTH)
		if (emailCode.length >= CODE_LENGTH) {
			emailPromise = submitEmailCode(parseInt(emailCode, 10))
		}
	}
	$: {
		phoneCode = phoneCode.toUpperCase().substring(0, CODE_LENGTH)
		if (phoneCode.length >= CODE_LENGTH) {
			phonePromise = submitPhoneCode(parseInt(emailCode, 10))
		}
	}
	$: {
		if ($store.step === AuthStep.CREATE_ACCOUNT) goto('/create-account')
	}

	async function submitEmailCode(verificationCode: number): Promise<boolean> {
		const authEvent = await protocol.verifyAuthEmail({
			email: email.value.email,
			phone: phone.value.number,
			verificationCode,
			accessKey
		})
		// TODO: Handle errors
		// if (authEvent.status !== AuthStatus.PENDING_PHONE_VERIFICATION)
		// 	throw Error('Verification code did not work')

		store.set({
			step: AuthStep.VERIFY_PHONE,
			email: email.value.email,
			phone: phone.value.number,
			accessKey: authEvent.accessKey
		})
		return true
	}

	async function submitPhoneCode(verificationCode: number): Promise<boolean> {
		const authEvent = await protocol.verifyAuthPhone({
			email: email.value.email,
			phone: phone.value.number,
			verificationCode,
			accessKey
		})
		// TODO: Handle errors
		// if (authEvent.status !== AuthStatus.PENDING_USER_REGISRATION)
		// 	throw Error('Verification code did not work')

		if (authEvent.accountExists) {
			store.set({
				step: AuthStep.FINISHED,
				accessKey: authEvent.accessKey
			})
		} else {
			store.set({
				step: AuthStep.CREATE_ACCOUNT,
				email: email.value.email,
				phone: phone.value.number,
				accessKey: authEvent.accessKey
			})
		}

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
					label="Enter Code"
					autocomplete="one-time-code"
					bind:value={emailCode}
					disabled={emailCode.length >= CODE_LENGTH}
					Icon={LockClosedIcon}
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
					label={emailVerified ? 'Enter Code' : 'Verify Email'}
					autocomplete="one-time-code"
					bind:value={phoneCode}
					disabled={!emailVerified || phoneCode.length >= CODE_LENGTH}
					Icon={LockClosedIcon}
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
