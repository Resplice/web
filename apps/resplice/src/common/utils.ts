type RecordItem = {
	name: string
}

export function sortRecordsByName<T extends RecordItem>(record: T[]): T[] {
	return record.sort((a, b) => a.name.localeCompare(b.name))
}
