<script lang="ts">
	import { RespliceWideIcon } from '@resplice/components'

	let context: 'apple' | 'android' = 'apple'
</script>

<main class="w-full min-h-full max-w-lg m-auto flex flex-col overlow-auto bg-white">
	<div class="flex-none">
		<header class="w-full p-4 bg-[#5E6FC5] rounded-b-3xl">
			<RespliceWideIcon width="100%" />
		</header>

		<p class="mt-4 px-8 py-4">
			Resplice is not a traditional app you can install from the App Store or Google Play. Instead,
			it's a web app that you can install on your phone or computer. See instructions below:
		</p>
	</div>

	<div class="flex items-center space-x-4 px-8">
		<button
			class="w-full font-bold text-lg py-4 px-8 rounded-full whitespace-nowrap"
			class:bg-[#5E6FC5]={context === 'apple'}
			class:text-white={context === 'apple'}
			class:text-slate-800={context === 'android'}
			on:click={() => (context = 'apple')}
		>
			iOS
		</button>
		<button
			class="w-full font-bold text-lg py-4 px-8 rounded-full whitespace-nowrap"
			class:bg-[#5E6FC5]={context === 'android'}
			class:text-white={context === 'android'}
			class:text-slate-800={context === 'apple'}
			on:click={() => (context = 'android')}
		>
			Android
		</button>
	</div>

	{#if context === 'apple'}
		<section>
			<h2 class="text-2xl font-bold px-8 py-4">Install on iPhone or iPad</h2>
			<p class="px-8 py-4">
				To install Resplice on your iPhone or iPad, you'll need to use Safari:
			</p>
			<ol class="px-8 list-decimal list-inside">
				<li>Make sure you have this website opened in Safari.</li>
				<li>Tap the "Share" icon at the bottom of the screen.</li>
				<li>Select “Add to Home Screen” from the options.</li>
				<li>Confirm the installation by tapping the “Add” button.</li>
			</ol>
			<!-- <div class="flex justify-center items-center">
				<img
					src="/assets/images/ios-install-1.png"
					alt="Tap the share button at the bottom of the screen"
					class="w-1/2"
				/>
			</div>
			<div class="flex justify-center items-center">
				<img src="/assets/images/ios-install-2.png" alt="Tap 'Add to Home Screen'" class="w-1/2" />
			</div>
			<div class="flex justify-center items-center">
				<img src="/assets/images/ios-install-3.png" alt="Tap 'Add'" class="w-1/2" />
			</div> -->
		</section>
	{:else if context === 'android'}
		<section>
			<h2 class="text-2xl font-bold px-8 py-4">Install on Android</h2>
			<p class="px-8 py-4">
				To install Resplice on your Android phone or tablet, you'll need to use Chrome:
			</p>
			<ol class="px-8 list-decimal list-inside">
				<li>Make sure you have this website opened in Chrome.</li>
				<li>
					Some Android devices will prompt you automatically to install at the bottom of the screen.
					If you see this click "install" otherwise continue to the next step.
				</li>
				<li>Open your browser's settings by tapping the icon at the top right of the screen.</li>
				<li>Select “Add to Home Screen” from the options.</li>
				<li>Confirm the installation by tapping the “Add” button.</li>
			</ol>
			<!-- <div class="flex justify-center items-center">
				<img
					src="/assets/images/android-install-1.png"
					alt="Tap the menu button at the top right of the screen"
					class="w-1/2"
				/>
			</div>
			<div class="flex justify-center items-center">
				<img
					src="/assets/images/android-install-2.png"
					alt="Tap 'Add to Home Screen'"
					class="w-1/2"
				/>
			</div>
			<div class="flex justify-center items-center">
				<img src="/assets/images/android-install-3.png" alt="Tap 'Add'" class="w-1/2" />
			</div> -->
		</section>
	{/if}
</main>
