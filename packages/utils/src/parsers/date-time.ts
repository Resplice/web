import { format, formatDistance } from 'date-fns'
import { format as formatTz, utcToZonedTime } from 'date-fns-tz'

export function formatDateTime(dateTime: Date, tz: string, fmt: string) {
	const zonedDateTime = utcToZonedTime(dateTime, tz)
	return formatTz(zonedDateTime, fmt, { timeZone: tz })
}

export function getLocalTimezone() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone
}

// Number of milliseconds since 2020
const RESPLICE_EPOCH = 1577836800 * 1000

export function respliceDateTimeToDateTime(respliceSeconds: number) {
	const respliceMs = respliceSeconds * 1000
	return new Date(RESPLICE_EPOCH + respliceMs)
}

export function dateTimeToRespliceDateTime(dateTime: Date): number {
	return (dateTime.getTime() - RESPLICE_EPOCH) / 1000
}

export function getRespliceNow() {
	return dateTimeToRespliceDateTime(new Date())
}

export function formatRespliceDateTime(dateTime: number, fmt: string) {
	const dt = respliceDateTimeToDateTime(dateTime)
	return format(dt, fmt)
}

export function formatRespliceDateTimeInTimezone(dateTime: number, timezone: string, fmt: string) {
	const dt = respliceDateTimeToDateTime(dateTime)
	return formatDateTime(dt, timezone, fmt)
}

export function formatRespliceDateTimeDistance(start: number, end: number) {
	const startDt = respliceDateTimeToDateTime(start)
	const endDt = respliceDateTimeToDateTime(end)
	return formatDistance(endDt, startDt)
}
