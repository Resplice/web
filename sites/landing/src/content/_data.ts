export type Feature = {
	title: string
	description: string
	icon: string
}
export const features: Feature[] = [
	{
		title: 'Identity Solved',
		description:
			'A hub for your online identity. Add your social media accounts, websites, address, emails, and more to your profile. You are in control of your data, you can choose what to share and what to keep private.',
		icon: 'id-card'
	},
	{
		title: 'Self-managed Community',
		description:
			'Whether you want to manage a professional network or just your community of friends and family, we have you covered. Your network manages themselves, if someone changes their email or address, you will automatically see the new value.',
		icon: 'people'
	},
	{
		title: 'Quick & Simple Connections',
		description:
			'Connect with someone else on Resplice in seconds using a QR code scan. No need to type in long email addresses or usernames. Just scan and connect. You can also invite someone using their phone number.',
		icon: 'qr-code'
	},
	{
		title: 'Advanced Security',
		description:
			'We use industry standard encryption and security practices to ensure your data is safe. We are also password-less, no need to remember long passwords or worry about password requirements.',
		icon: 'finger-print'
	}
]

export type SocialIcon = 'twitter' | 'github' | 'youtube'
export type Social = {
	name: SocialIcon
	url: string
}
export const socials: Social[] = [
	{
		name: 'twitter',
		url: 'https://twitter.com/respliceapp'
	},
	{
		name: 'github',
		url: 'https://github.com/Resplice'
	},
	{
		name: 'youtube',
		url: 'https://www.youtube.com/channel/UCZfE4uwxdFG7Kxtobgj-rfw'
	}
]

export type FAQ = {
	question: string
	answer: string
}
export const faqs: FAQ[] = [
	{
		question: 'What is Resplice?',
		answer:
			'Resplice is a platform for managing your online identity. Connect with individuals, groups, or businesses on your terms, all while maintaining full transparency and control.'
	},
	{
		question: 'How do I sign up for Resplice?',
		answer:
			'You can sign up for Resplice using your mobile phone number. After entering your number, we will ask you for your full name and you can optionally upload an image of yourself. This will complete the sign-up process.'
	},
	{
		question: 'What can I add to my Resplice account?',
		answer:
			'You can add many attributes about yourself to your Resplice account. Social media accounts, websites, addresses, emails, phone numbers, and more. We are planning to add live locations, crypto wallets, embedded videos, audio recordings just to name a few.'
	},
	{
		question: 'How do I connect with others on Resplice?',
		answer:
			'You can connect with someone on Resplice directly via QR codes. Additionally, you can invite to non-users via phone number and they will receive an invitation to connect with you on Resplice.'
	},
	{
		question: 'How do I share my attributes with others?',
		answer:
			'After you have connected with someone, you should now see them in your connections list on the homepage. You can share or takeaway information from them by tapping their profile and then tapping `Change` at the buttom in the `Sharing` section. From there you can just toggle your attributes on or off.'
	},
	{
		question: 'Can I decline a connection request?',
		answer:
			'Yes! You can simply ignore the pending connection or click into the connection and open the settings menu at the top right. From there, just tap `Decline Invite` in the modal.'
	},
	{
		question: 'Can I change or remove attributes from my account?',
		answer:
			'Yes! You can change or remove attributes at any time in your profile. Just tap the attribute you want to change and then tap `Edit` at the bottom of the modal. From there you can update or remove the attribute. When you update an attribute, anyone you are currently sharing that attribute to will get your change instantly. If you remove your attribute, no one will no longer see that attribute in your profile.'
	},
	{
		question: 'How secure is my information on Resplice?',
		answer:
			'Resplice prioritizes the security of your data. We use industry-standard encryption and security practices to protect your information. You have full control over what attributes you share and with whom.'
	},
	{
		question: "Why isn't Resplice in the App Store?",
		answer:
			'Our app is just a mobile website that you can install from your web browser. We decided to keep our app out of app stores for a few reasons; We can get feature updates and bug fixes out to you much faster, you can use this app on all of your platforms; Android, iPhone, Mac, Windows, even your smart fridge, the app experience will always be the same across all platforms, no missing features in Android for example, and sharing the app is easy! Just send them to https://app.resplice.com.'
	},
	{
		question: 'How do I install the App?',
		answer:
			'You can install this app by clicking the `Install App` button at the top of this page. This will take you to the app with instructions on how to install it on your device. You can also just go to https://app.resplice.com/#/install on your mobile device and follow the instructions there.'
	},
	{
		question: 'How can I give feedback or request features?',
		answer:
			'Just go to this form and let us know what you are thinking! https://forms.gle/64t4ffDjHMAnPej39'
	},
	{
		question: 'I have more questions. How can I reach out?',
		answer:
			'For any further queries or concerns, feel free to contact our support team at support@resplice.com.'
	}
]

export type Person = {
	name: string
	role: string
	image: string
	bio: string
}
export const people: Person[] = [
	{
		name: 'Marcus Virginia',
		role: 'Co-Founder',
		image:
			'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio: 'Marcus has also spent his entire career (over 5 years) building web applications and data systems for a few companies. Data interoperability between customers has always been an issue for companies and is costing them millions to intake, verify its correctness, and clean for internal usage and insights.'
	},
	{
		name: 'Chad Capra',
		role: 'Co-Founder',
		image:
			'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		bio: "Chad has spent the majority of his career (over 20 years) building web applications for various companies. At every company, there was a struggle to ensure we had people's up-to-date information. We used custom and off-the-shelf CRMs. No matter what we used, there was bad data."
	}
]
