/**
 * Converts a Blob to base64 data URI string
 * @param image - Image Blog to convert
 * @returns Base64 data URI
 */
export function imageToDataUri(image: Blob | null): Promise<string> {
	return new Promise<string>((resolve) => {
		if (!image) return resolve('')
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result as string)
		reader.readAsDataURL(image)
	})
}
