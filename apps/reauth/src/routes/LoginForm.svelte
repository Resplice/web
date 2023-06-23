<script lang="ts">
	import { onMount } from 'svelte'
	import { isValidPhoneNumber, parsePhoneNumber, type CountryCode } from 'libphonenumber-js'
	import { getNavigatorCountry, validateEmail } from '@resplice/utils'
	import { t } from '$lib/i18n'
	import useConfig from '$lib/hooks/useConfig'
	import useProtocol from '$lib/hooks/useProtocol'
	import store from '$lib/store'
	import { Button, PhoneField, TextField, MailIcon } from '@resplice/components'

	const config = useConfig()
	const protocol = useProtocol()

	let phone = {
		value: '',
		countryCode: 'US' as CountryCode
	}
	let email = ''
	let formErrs: Record<string, string> = {}
	let networkErr: Error
	let isLoading = false

	onMount(() => {
		phone.countryCode = (getNavigatorCountry() as CountryCode) || ('US' as CountryCode)
	})

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!isValidPhoneNumber(phone.value, phone.countryCode))
			errs.phone = $t('auth.errors.invalidPhone')
		if (!validateEmail(email)) errs.email = $t('auth.errors.invalidEmail')
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}

	function checkBot(): Promise<boolean> {
		if (config.environment !== 'production') return Promise.resolve(false)

		const grecaptcha: any = (window as any).grecaptcha
		return new Promise((resolve) => {
			grecaptcha.ready(async () => {
				const token = await grecaptcha.execute(config.recaptchaToken, {
					action: 'auth'
				})
				const isBot = await protocol.isBot(token)
				if (isBot) {
					networkErr = new Error($t('auth.errors.botDetected'))
					resolve(true)
				} else {
					resolve(false)
				}
			})
		})
	}

	async function startAuth() {
		try {
			const phoneNumber = parsePhoneNumber(phone.value, phone.countryCode)
			const { accessKey } = await protocol.startAuth({
				email,
				phone: phoneNumber.number
			})
			store.set({ email, phone: phoneNumber.number, accessKey })
		} catch (err) {
			networkErr = err as Error
			isLoading = false
		}
	}

	type SubmitEvent = Event & {
		currentTarget: EventTarget & HTMLFormElement
	}
	async function onSubmit(_e: SubmitEvent) {
		const isValid = validate()
		if (!isValid) return

		isLoading = true

		const isBot = await checkBot()
		if (isBot) return

		startAuth()
	}
</script>

<svelte:head>
	{#if config.environment === 'production'}
		<script
			src={`https://www.google.com/recaptcha/api.js?render=${config.recaptchaToken}`}
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
	</div>

	<div class="flex flex-col items-center justify-center mt-8">
		<div class="w-40 flex flex-col">
			<Button type="submit" {isLoading}>{$t('auth.common.continue')}</Button>
			{#if networkErr}
				<p class="mt-4 text-red-600">{networkErr.message}</p>
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
