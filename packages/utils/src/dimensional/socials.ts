export type SocialNetwork =
	| 'alipay'
	| 'apple'
	| 'cashapp'
	| 'discord'
	| 'etsy'
	| 'facebook'
	| 'flickr'
	| 'github'
	| 'goodreads'
	| 'google'
	| 'instagram'
	| 'kickstarter'
	| 'line'
	| 'linkedin'
	| 'mastodon'
	| 'medium'
	// | 'onlyfans'
	| 'patreon'
	| 'paypal'
	| 'pinterest'
	| 'playstation'
	| 'reddit'
	| 'snapchat'
	| 'soundcloud'
	| 'spotify'
	| 'stackoverflow'
	| 'steam'
	| 'telegram'
	| 'tiktok'
	| 'twitch'
	| 'venmo'
	| 'wechat'
	| 'whatsapp'
	| 'youtube'
	| 'x'
	| 'xbox'
	| 'other'

export function getSocialUrl(network: SocialNetwork, handle: string) {
	switch (network) {
		case 'cashapp':
			return `https://cash.app/$${handle}`
		case 'discord':
			return `https://discordapp.com/users/${handle}`
		case 'etsy':
			return `https://www.etsy.com/people/${handle}`
		case 'facebook':
			return `https://www.facebook.com/${handle}`
		case 'flickr':
			return `https://www.flickr.com/people/${handle}`
		case 'github':
			return `https://www.github.com/${handle}`
		case 'goodreads':
			return `https://www.goodreads.com/${handle}`
		case 'instagram':
			return `https://www.instagram.com/${handle}`
		case 'kickstarter':
			return `https://www.kickstarter.com/profile/${handle}`
		case 'line':
			return `https://line.me/ti/p/~${handle}`
		case 'linkedin':
			return `https://www.linkedin.com/in/${handle}`
		case 'medium':
			return `https://medium.com/${handle}`
		// case 'onlyfans':
		// 	return `https://www.onlyfans.com/${handle}`
		case 'patreon':
			return `https://www.patreon.com/${handle}`
		case 'paypal':
			return `https://www.paypal.me/${handle}`
		case 'pinterest':
			return `https://www.pinterest.com/${handle}`
		case 'playstation':
			return `https://my.playstation.com/profile/${handle}`
		case 'reddit':
			return `https://www.reddit.com/user/${handle}`
		case 'snapchat':
			return `https://www.snapchat.com/add/${handle}`
		case 'soundcloud':
			return `https://www.soundcloud.com/${handle}`
		case 'spotify':
			return `https://open.spotify.com/user/${handle}`
		case 'stackoverflow':
			return `https://www.stackoverflow.com/users/${handle}`
		case 'steam':
			return `https://www.steamcommunity.com/id/${handle}`
		case 'telegram':
			return `https://t.me/${handle}`
		case 'tiktok':
			return `https://www.tiktok.com/@${handle}`
		case 'twitch':
			return `https://www.twitch.tv/${handle}`
		case 'venmo':
			return `https://account.venmo.com/u/${handle}`
		case 'wechat':
			return `https://weixin.qq.com/${handle}`
		case 'whatsapp':
			return `https://wa.me/${handle}`
		case 'youtube':
			return `https://www.youtube.com/channel/${handle}`
		case 'x':
			return `https://www.x.com/${handle}`
		case 'xbox':
			return `https://account.xbox.com/en-us/profile?gamertag=${handle}`
		default:
			return ''
	}
}

export function getSocialNetworkFromUrl(url: string): SocialNetwork {
	switch (new URL(url).hostname) {
		case 'cash.app':
			return 'cashapp'
		case 'discordapp.com':
			return 'discord'
		case 'www.etsy.com':
			return 'etsy'
		case 'www.facebook.com':
			return 'facebook'
		case 'www.flickr.com':
			return 'flickr'
		case 'www.github.com':
			return 'github'
		case 'www.goodreads.com':
			return 'goodreads'
		case 'www.instagram.com':
			return 'instagram'
		case 'www.kickstarter.com':
			return 'kickstarter'
		case 'line.me':
			return 'line'
		case 'www.linkedin.com':
			return 'linkedin'
		case 'www.medium.com':
			return 'medium'
		// case 'www.onlyfans.com':
		// 	return 'onlyfans'
		case 'www.patreon.com':
			return 'patreon'
		case 'www.paypal.me':
			return 'paypal'
		case 'www.pinterest.com':
			return 'pinterest'
		case 'my.playstation.com':
			return 'playstation'
		case 'www.reddit.com':
			return 'reddit'
		case 'www.snapchat.com':
			return 'snapchat'
		case 'www.soundcloud.com':
			return 'soundcloud'
		case 'open.spotify.com':
			return 'spotify'
		case 'www.stackoverflow.com':
			return 'stackoverflow'
		case 'www.steamcommunity.com':
			return 'steam'
		case 't.me':
			return 'telegram'
		case 'www.tiktok.com':
			return 'tiktok'
		case 'www.twitch.tv':
			return 'twitch'
		case 'account.venmo.com':
			return 'venmo'
		case 'weixin.qq.com':
			return 'wechat'
		case 'wa.me':
			return 'whatsapp'
		case 'www.youtube.com':
			return 'youtube'
		case 'www.x.com':
			return 'x'
		case 'account.xbox.com':
			return 'xbox'
		default:
			return 'other'
	}
}
