<script lang="ts">
	import useProtocol from '$common/protocol/useProtocol'
	import sessionStore from '$modules/session/session.store'
	import { Button, CheckmarkIcon, CloseIcon } from '@resplice/components'

	const protocol = useProtocol()

	let rsvp: 'yes' | 'no' | '' = (localStorage.getItem('rsvp') as 'yes' | 'no') || ''

	async function yes() {
		rsvp = 'yes'
		try {
			await protocol.rsvp($sessionStore.currentSession.cryptoKeys.accessKey, 'yes')
			localStorage.setItem('rsvp', 'yes')
		} catch (err) {
			console.error(err)
			rsvp = ''
		}
	}
	async function no() {
		rsvp = 'no'
		try {
			await protocol.rsvp($sessionStore.currentSession.cryptoKeys.accessKey, 'no')
			localStorage.setItem('rsvp', 'no')
		} catch (err) {
			console.error(err)
			rsvp = ''
		}
	}
	function reset() {
		rsvp = ''
		localStorage.removeItem('rsvp')
	}
</script>

<div class="w-full p-6 pt-2 space-y-4">
	{#if !rsvp}
		<p class="text-lg">Do you plan to attend?</p>

		<div class="flex space-x-4">
			<button
				class="w-full flex space-x-4 rounded-xl border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none"
				on:click={yes}
			>
				Yes, I'll be there
			</button>
			<button
				class="w-full flex space-x-4 rounded-xl border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none"
				on:click={no}
			>
				No, I can't be there
			</button>
		</div>
	{/if}
	{#if rsvp}
		<div class="w-full flex justify-between items-center">
			<div class="flex items-center space-x-2">
				{#if rsvp === 'yes'}
					<div class="p-2 rounded-full bg-brand-primary bg-opacity-20 text-brand-primary">
						<CheckmarkIcon height={24} width={24} />
					</div>
				{:else if rsvp === 'no'}
					<div class="p-2 rounded-full bg-red-200 text-red-700">
						<CloseIcon height={24} width={24} />
					</div>
				{/if}
				<p class="text-lg capitalize">RSVP: {rsvp}</p>
			</div>
			<Button class="text-xs uppercase" color="gray" on:click={reset}>Change</Button>
		</div>
	{/if}
	{#if rsvp === 'yes'}
		<div>
			<p>We are so glad you can make it!</p>
			<br />
			<ul class="list-disc list-inside">
				<li>Your Resplice account is your ticket.</li>
				<li>One account is needed for each adult.</li>
				<li>Kids are welcome!</li>
			</ul>
			<br />
			<p>
				We are excited for you to be part of our journey to becoming the best sharing platform on
				the internet!
			</p>
			<br />
			<p>Stay tuned for more updates.</p>
		</div>
	{/if}
	{#if rsvp === 'no'}
		<div>
			<p>Bummer. But we do understand how busy life gets.</p>
			<br />
			<p>Even though you are not able to make the party...</p>
			<p>
				We are excited for you to be part of our journey to becoming the best sharing platform on
				the internet!
			</p>
			<br />
			<p>Stay tuned for more updates.</p>
		</div>
	{/if}
</div>
