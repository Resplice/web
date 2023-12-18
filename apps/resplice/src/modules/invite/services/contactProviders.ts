import { parsePhoneNumber } from 'libphonenumber-js'
import { isSupported, intersection } from '@resplice/utils'
import config from '$services/config'

export type InviteState = 'invited' | 'connected' | 'ignored'

export type ProviderContactAttribute = {
	type: 'phone' | 'email'
	name: string
	value: string
}
export type ProviderContact = {
	id: string
	name: string
	avatar: string
	attributes: ProviderContactAttribute[]
	inviteState?: InviteState
}

type GoogleToken = {
	access_token: string
	expires_in: number
	scope: string
	token_type: string
}
export function getGoogleContacts(): Promise<ProviderContact[]> {
	return new Promise((resolve, reject) => {
		async function onGoogleToken(token: GoogleToken) {
			const contacts = await fetchGoogleContacts(token.access_token)
			resolve(contacts)
		}

		// No types for google lib
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (!(window as any).google) reject('Google OAuth library not loaded')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const client = (window as any).google.accounts.oauth2.initTokenClient({
			client_id: config.googleOAuthClientId,
			scope: 'https://www.googleapis.com/auth/contacts.readonly',
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			callback: onGoogleToken,
			error_callback: () => reject()
		})
		client.requestAccessToken()
	})
}

export async function fetchGoogleContacts(accessToken: string): Promise<ProviderContact[]> {
	const response = await fetch(
		'https://people.googleapis.com/v1/people/me/connections?personFields=names,photos,phoneNumbers&sortOrder=LAST_NAME_ASCENDING',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
	if (!response.ok) throw new Error('Failed to fetch google contacts')
	const googleContacts = await response.json()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return googleContacts.connections.map((person: any) => {
		const id = person.resourceName
		const name = person.names && person.names[0] ? person.names[0].displayName : 'Unknown'
		const avatar = person.photos && person.photos[0] ? person.photos[0].url : ''
		const attributes: ProviderContactAttribute[] = []
		if (person.phoneNumbers) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			person.phoneNumbers.forEach((number: any, idx: number) => {
				const phone = parsePhoneNumber(number.value, 'US')
				if (phone) attributes.push({ type: 'phone', name: `Phone ${idx + 1}`, value: phone.number })
			})
		}
		if (person.emailAddresses) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			person.emailAddresses.forEach((email: any, idx: number) =>
				attributes.push({ type: 'email', name: `Email ${idx + 1}`, value: email.value })
			)
		}

		return { id, name, avatar, attributes }
	})
}

export async function getNativeContacts(): Promise<ProviderContact[]> {
	const isContactPickerSupported = isSupported('contacts')
	if (!isContactPickerSupported) throw new Error('Contact picker not supported')

	const properties = intersection(
		['name', 'tel', 'icon'],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(navigator as any).contacts.getProperties()
	)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const contacts: any[] = await (navigator as any).contacts.select(properties, {
		multiple: true
	})

	return contacts.map((c, idx) => {
		const attributes: ProviderContactAttribute[] = []
		let avatar = ''

		if (c.tel) {
			c.tel.forEach((tel: string, idx: number) => {
				const phone = parsePhoneNumber(tel, 'US')
				if (phone) attributes.push({ type: 'phone', name: `Phone ${idx + 1}`, value: phone.number })
			})
		}

		if (c.email) {
			c.email.forEach((email: string, idx: number) =>
				attributes.push({ type: 'email', name: `Email ${idx + 1}`, value: email })
			)
		}

		if (c.icon && c.icon[0] instanceof Blob) avatar = URL.createObjectURL(c.icon[0])

		return {
			id: idx.toString(),
			name: c.name[0],
			avatar,
			attributes: attributes
		}
	})
}

export async function getContactsFromCsv(csv: Blob): Promise<ProviderContact[]> {
	return new Promise((resolve) => {
		const reader = new FileReader()
		reader.onload = (e) => {
			const csvStr = (e.target as FileReader).result as string
			const headers = csvStr.slice(0, csvStr.indexOf('\n')).split(',')
			const rows = csvStr.slice(csvStr.indexOf('\n') + 1).split('\n')

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const data: any[] = []

			rows.forEach((row) => {
				const vals = row.split(',')
				const valMap = vals.reduce<Record<string, string>>((map, v, idx) => {
					map[headers[idx]] = v
					return map
				}, {})
				data.push(valMap)
			})

			const contacts = data.map((d, idx) => ({
				id: idx.toString(),
				name: d.name,
				avatar: '',
				attributes: [d.email, d.phone]
			}))

			resolve(contacts)
		}
		reader.readAsText(csv)
	})
}
