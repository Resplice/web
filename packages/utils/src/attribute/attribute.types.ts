export enum AttributeType {
	ADDRESS = 'ADDRESS',
	COORDINATE = 'COORDINATE',
	CREDENTIAL = 'CREDENTIAL',
	DATE_TIME = 'DATE_TIME',
	EMAIL = 'EMAIL',
	LINK = 'LINK',
	PHONE = 'PHONE',
	SOCIAL = 'SOCIAL',
	TEXT = 'TEXT'
}

interface BaseAttribute {
	id: number
	type: AttributeType
	name: string
	value: AttributeValue
	sortOrder: number
}

export interface Address extends BaseAttribute {
	type: AttributeType.ADDRESS
	value: AddressValue
}
export type AddressValue = {
	streetAddress1: string
	streetAddress2: string
	locality: string
	region: string
	postalCode: string
	country: string
}

export interface Coordinate extends BaseAttribute {
	type: AttributeType.COORDINATE
	value: CoordinateValue
}
export type CoordinateValue = {
	latitude: number
	longitude: number
}

export interface Credential extends BaseAttribute {
	type: AttributeType.CREDENTIAL
	value: CredentialValue
}
export type CredentialValue = {
	identity: string
	passcode: string
}

export interface DateTime extends BaseAttribute {
	type: AttributeType.DATE_TIME
	value: DateTimeValue
}
export type DateTimeValue = {
	year: number
	month: number
	day: number
	hour?: number
	minute?: number
	timezone?: string
}

export interface Email extends BaseAttribute {
	type: AttributeType.EMAIL
	value: EmailValue
}
export type EmailValue = {
	email: string
}

export interface Link extends BaseAttribute {
	type: AttributeType.LINK
	value: LinkValue
}
export type LinkValue = {
	url: string
}

export interface Phone extends BaseAttribute {
	type: AttributeType.PHONE
	value: PhoneValue
}
export type PhoneValue = {
	number: string
	smsEnabled: boolean
}

export interface Social extends BaseAttribute {
	type: AttributeType.SOCIAL
	value: SocialValue
}
export type SocialValue = {
	handle: string
	url: string
}

export interface Text extends BaseAttribute {
	type: AttributeType.TEXT
	value: TextValue
}
export type TextValue = {
	text: string
}

export type AttributeValue =
	| AddressValue
	| CoordinateValue
	| CredentialValue
	| DateTimeValue
	| EmailValue
	| LinkValue
	| PhoneValue
	| SocialValue
	| TextValue

export type Attribute =
	| Address
	| Coordinate
	| Credential
	| DateTime
	| Email
	| Link
	| Phone
	| Social
	| Text

export enum AttributeAction {
	Calendar = 'CALENDAR',
	Call = 'CALL',
	Copy = 'COPY',
	Email = 'EMAIL',
	Link = 'LINK',
	Locate = 'LOCATE',
	Navigate = 'NAVIGATE',
	Sms = 'SMS'
}

export type AttributeTypeConfig = {
	type: AttributeType
	name: string
	verifiable: boolean
	actions: AttributeAction[]
	handleAction: (action: AttributeAction, value: AttributeValue) => void
	valueToString: (value: AttributeValue) => string
}
