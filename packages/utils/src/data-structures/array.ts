export function intersection<T>(a: T[], b: T[]): T[] {
	const setB = new Set(b)
	return a.filter((value) => setB.has(value))
}

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest

	test('finds intersection of two arrays', () => {
		const arrA = [1, 2, 3, 4, 5]
		const arrB = [3, 4, 5, 6, 7]
		const expected = intersection(arrA, arrB)
		expect(expected).toEqual([3, 4, 5])
	})

	test('handles empty array', () => {
		const expectedA = intersection([1, 2], [])
		expect(expectedA).toEqual([])

		const expectedB = intersection([], [1, 2, 3])
		expect(expectedB).toEqual([])
	})

	test('maintains duplicates in first array', () => {
		const expected = intersection(['one', 'two', 'three', 'two', 'four'], ['two', 'four'])
		expect(expected).toEqual(['two', 'two', 'four'])
	})
}
