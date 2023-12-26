<script lang="ts">
	import { faqs } from '@content/_data'

	let opened = new Set<string>()

	function toggleQuestion(question: string) {
		const newOpened = new Set(opened)
		if (newOpened.has(question)) {
			newOpened.delete(question)
		} else {
			newOpened.add(question)
		}
		opened = newOpened
	}
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900" id="faq">
				Frequently asked questions
			</h2>
			<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
				{#each faqs as faq (faq.question)}
					<div class="pt-6">
						<dt>
							<!-- Expand/collapse question button -->
							<button
								type="button"
								class="flex w-full items-start justify-between text-left text-gray-900"
								aria-controls="faq-0"
								aria-expanded="false"
								on:click={() => toggleQuestion(faq.question)}
							>
								<span class="text-base font-semibold leading-7">{faq.question}</span>
								<span class="ml-6 flex h-7 items-center">
									{#if opened.has(faq.question)}
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
										</svg>
									{:else}
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#if opened.has(faq.question)}
							<dd class="mt-2 pr-12" id="faq-0">
								<p class="text-base leading-7 text-gray-600">{faq.answer}</p>
							</dd>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
