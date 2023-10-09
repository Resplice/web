<script lang="ts">
	import SelectField from '$lib/form/SelectField.svelte'
	import SocialIcon from '$lib/icons/SocialIcon.svelte'
	import type { SocialNetwork } from '@resplice/utils'

	const socials: { label: string; value: SocialNetwork }[] = [
		{ label: 'Cash App', value: 'cashapp' },
		{ label: 'Discord', value: 'discord' },
		{ label: 'Etsy', value: 'etsy' },
		{ label: 'Facebook', value: 'facebook' },
		{ label: 'Flickr', value: 'flickr' },
		{ label: 'GitHub', value: 'github' },
		{ label: 'Goodreads', value: 'goodreads' },
		{ label: 'Instagram', value: 'instagram' },
		{ label: 'Kickstarter', value: 'kickstarter' },
		{ label: 'Line', value: 'line' },
		{ label: 'LinkedIn', value: 'linkedin' },
		{ label: 'Mastodon', value: 'mastodon' },
		{ label: 'Medium', value: 'medium' },
		{ label: 'Patreon', value: 'patreon' },
		{ label: 'PayPal', value: 'paypal' },
		{ label: 'Pinterest', value: 'pinterest' },
		{ label: 'Playstation Network', value: 'playstation' },
		{ label: 'Reddit', value: 'reddit' },
		{ label: 'Snapchat', value: 'snapchat' },
		{ label: 'SoundCloud', value: 'soundcloud' },
		{ label: 'Spotify', value: 'spotify' },
		{ label: 'Stack Overflow', value: 'stackoverflow' },
		{ label: 'Steam', value: 'steam' },
		{ label: 'Telegram', value: 'telegram' },
		{ label: 'TikTok', value: 'tiktok' },
		{ label: 'Twitch', value: 'twitch' },
		{ label: 'Venmo', value: 'venmo' },
		{ label: 'WeChat', value: 'wechat' },
		{ label: 'WhatsApp', value: 'whatsapp' },
		{ label: 'YouTube', value: 'youtube' },
		{ label: 'X', value: 'x' },
		{ label: 'Xbox', value: 'xbox' },
		{ label: 'Website', value: 'other' },
		{ label: 'Other', value: 'other' }
	]

	export let value: string
</script>

<SelectField
	name="social"
	label="Select Social Network"
	options={socials}
	bind:value
	Icon={SocialIcon}
	iconProps={{ network: value }}
/>
