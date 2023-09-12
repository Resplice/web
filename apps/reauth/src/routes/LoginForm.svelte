<script lang="ts">
	import { onMount } from 'svelte'
	import { isValidPhoneNumber, parsePhoneNumber, type CountryCode } from 'libphonenumber-js'
	import { getNavigatorCountry, validateEmail } from '@resplice/utils'
	import { t } from '$lib/i18n'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'
	import store from '$lib/store'
	import { Button, PhoneField, TextField, MailIcon, Toggle } from '@resplice/components'
	import { errorTypeToString } from '$lib/protocol'

	const config = useConfig()
	const protocol = useProtocol()

	let phone = {
		value: '',
		countryCode: 'US' as CountryCode
	}
	let email = ''
	let persistSession = false
	let formErrs: Record<string, string> = {}
	let systemError: string
	let isLoading = false

	onMount(() => {
		phone.countryCode = (getNavigatorCountry() as CountryCode) || ('US' as CountryCode)
	})

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!isValidPhoneNumber(phone.value, phone.countryCode)) errs.phone = $t('auth.errors.PHONE')
		if (!validateEmail(email)) errs.email = $t('auth.errors.EMAIL')
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}

	function checkBot(): Promise<boolean> {
		if (config.environment === 'local') return Promise.resolve(false)

		const grecaptcha: any = (window as any).grecaptcha
		return new Promise((resolve) => {
			if (!grecaptcha) return resolve(false)
			grecaptcha.ready(async () => {
				try {
					const token = await grecaptcha.execute(config.recaptchaSiteKey, {
						action: 'start_auth'
					})
					const isBot = await protocol.isBot(token)
					if (isBot) systemError = $t('auth.errors.botDetected')

					resolve(isBot)
				} catch (err) {
					console.error(err)
					resolve(false)
				}
			})
		})
	}

	async function startAuth() {
		const phoneNumber = parsePhoneNumber(phone.value, phone.countryCode)
		const { event, error } = await protocol.startAuth({
			email,
			phone: phoneNumber.number
		})

		if (error) {
			const errorString = errorTypeToString(error.type)
			systemError = $t(`auth.errors.${errorString}`)
			isLoading = false
			return
		}

		store.set({
			status: event.authStatus,
			email,
			phone: phoneNumber.number,
			persistSession
		})
	}

	type SubmitEvent = Event & {
		currentTarget: EventTarget & HTMLFormElement
	}
	async function onSubmit(_e: SubmitEvent) {
		const isValid = validate()
		if (!isValid) return

		isLoading = true

		try {
			const isBot = await checkBot()
			if (isBot) return

			await startAuth()
		} catch (err) {
			systemError = $t(`auth.errors.UNRECOGNIZED`)
		}
	}
</script>

<svelte:head>
	{#if config.environment !== 'local'}
		<script
			src={`https://www.google.com/recaptcha/api.js?render=${config.recaptchaSiteKey}`}
			async
			defer
		>
		</script>
	{/if}
</svelte:head>

<form
	class="flex-1 flex flex-col justify-between items-center w-full p-2 overflow-auto"
	on:submit|preventDefault={onSubmit}
>
	<div class="w-full flex flex-col space-y-6">
		<PhoneField name="phone" label={$t('auth.enterPhone')} bind:phone error={formErrs.phone} />
		<TextField
			name="email"
			label={$t('auth.enterEmail')}
			autocomplete="email"
			bind:value={email}
			Icon={MailIcon}
			error={formErrs.email}
		/>
		<Toggle
			name="persistSession"
			label="This is a personal device"
			bind:isActive={persistSession}
		/>
	</div>

	<div class="flex flex-col items-center justify-center mt-8">
		<div class="w-40 flex flex-col">
			<Button type="submit" {isLoading}>{$t('auth.common.continue')}</Button>
			{#if systemError}
				<p class="mt-4 text-red-600">{systemError}</p>
			{/if}
		</div>
		<!-- We have to include this text according to google :( -->
		<!-- https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed -->
		<p class="text-xs text-gray-400 mt-4 w-full">
			This site is protected by reCAPTCHA and the Google
			<a class="underline text-brand-primary" href="https://policies.google.com/privacy">
				Privacy Policy
			</a>
			and
			<a class="underline text-brand-primary" href="https://policies.google.com/terms">
				Terms of Service
			</a> apply.
		</p>
	</div>
</form>

<style>
	:global(.grecaptcha-badge) {
		visibility: hidden;
	}
</style>
