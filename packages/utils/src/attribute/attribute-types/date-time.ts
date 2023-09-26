import { zonedTimeToUtc } from 'date-fns-tz'
import { copyText, openCalendar } from '$utils/attribute/attribute-actions'
import {
	AttributeType,
	AttributeAction,
	type DateTimeValue,
	type AttributeTypeConfig
} from '$utils/attribute/attribute.types'
import { getLocalTimezone } from '$utils/parsers/date-time'

function valueToString(value: DateTimeValue) {
	const dateTime = zonedTimeToUtc(
		new Date(value.year, value.month - 1, value.day, value.hour, value.minute),
		value.timezone || getLocalTimezone()
	)
	return dateTime.toISOString()
}

function handleAction(action: AttributeAction, value: DateTimeValue) {
	switch (action) {
		case AttributeAction.Calendar:
			openCalendar(valueToString(value))
			break
		case AttributeAction.Call:
			throw new Error('Cannot call a date')
		case AttributeAction.Copy:
			copyText(valueToString(value))
			break
		case AttributeAction.Email:
			throw new Error('Cannot email a date')
		case AttributeAction.Link:
			throw new Error('Cannot link a date')
		case AttributeAction.Locate:
			throw new Error('Cannot geolocate a date')
		case AttributeAction.Navigate:
			throw new Error('Cannot navigate to a date')
		case AttributeAction.Sms:
			throw new Error('Cannot text a date')
		default:
	}
}

const dateType: AttributeTypeConfig = {
	type: AttributeType.DATE_TIME,
	name: 'Date',
	verifiable: false,
	actions: [AttributeAction.Calendar, AttributeAction.Copy],
	handleAction,
	valueToString
}

export default dateType
