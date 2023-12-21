import { getNavigatorOperatingSystem } from '$utils/navigator/getOperatingSystem'

export function openCalendar(dateTime: string): void {
	console.log('Opening Calendar', dateTime)
	// WARNING: Hardcode the open calendar action for now
	window.open(
		`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231116T210000Z%2F20231117T040000Z&text=Resplice%20Launch%20Party&location=The+Burrow+-+Oakdale%2C+7053+10th+St+N%2C+Oakdale%2C+MN+55128%2C+USA`
	)
}

export function callPhone(phone: string): void {
	window.open(`tel:${phone}`, '_blank')
}

export async function copyText(text: string): Promise<void> {
	if (navigator.clipboard) {
		await navigator.clipboard.writeText(text)
	} else {
		throw Error('Failed to write text to clipboard')
	}
}

export function email(email: string, subject = '', body = ''): void {
	window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank')
}

export function goto(url: string): void {
	window.open(url, '_blank')
}

type locateParams =
	| {
			locationType: 'coordinate'
			location: { latitude: number; longitude: number }
	  }
	| {
			locationType: 'address'
			location: string
	  }
export function locate(params: locateParams, navigate = false) {
	const googleMapsUrl = navigate
		? 'https://www.google.com/maps/dir/?api=1&destination='
		: 'https://www.google.com/maps/search/?api=1&query='
	let query = ''

	if (params.locationType === 'coordinate') {
		query = `${params.location.latitude},${params.location.longitude}`
	} else {
		query = encodeURI(params.location)
	}

	window.open(`${googleMapsUrl}${query}`, '_blank')
}

export function openSms(phone: string, text = ''): void {
	const OS = getNavigatorOperatingSystem()
	if (OS === 'iOS') {
		window.open(`sms:${phone}&body=${text}`)
	} else {
		window.open(`sms:${phone}?body=${text}`)
	}
}
