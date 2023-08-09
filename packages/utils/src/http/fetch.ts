type Content = 'binary' | 'json' | 'text'

type FetchOptions = {
	endpoint: string
	headers?: Record<string, string>
	content?: Content
	commandType?: number
}

type FetchParams = FetchOptions & { data: unknown }

export interface Fetch {
	get: <T = unknown>(params: FetchOptions) => Promise<T>
	post: <T = unknown>(params: FetchParams) => Promise<T>
	patch: <T = unknown>(params: FetchParams) => Promise<T>
	put: <T = unknown>(params: FetchParams) => Promise<T>
	delete: <T = unknown>(params: FetchParams) => Promise<T>
}

export function fetchFactory(baseUrl: string): Fetch {
	return {
		get: ({ endpoint, headers, content }) =>
			commonFetch({
				URL: baseUrl + endpoint,
				method: 'GET',
				headers,
				content
			}),
		post: ({ endpoint, headers, content, data }) =>
			commonFetch({
				URL: baseUrl + endpoint,
				method: 'POST',
				headers,
				content,
				data
			}),
		patch: ({ endpoint, headers, content, data }) =>
			commonFetch({
				URL: baseUrl + endpoint,
				method: 'PATCH',
				headers,
				content,
				data
			}),
		put: ({ endpoint, headers, content, data }) =>
			commonFetch({
				URL: baseUrl + endpoint,
				method: 'PUT',
				headers,
				content,
				data
			}),
		delete: ({ endpoint, headers, content, data }) =>
			commonFetch({
				URL: baseUrl + endpoint,
				method: 'DELETE',
				headers,
				content,
				data
			})
	}
}

type FetchConfig = {
	URL: string
	method: string
	headers?: Record<string, string>
	content?: Content
	data?: unknown
}
async function commonFetch({ URL, method, headers = {}, content = 'binary', data }: FetchConfig) {
	const res = await fetch(URL, {
		method,
		credentials: 'include',
		headers: {
			'Content-Type': getContentType(content),
			...headers
		},
		body: data as BodyInit
	})
	if (res.status === 500) throw res
	if (res.status === 204) return

	return getBody(res, content)
}

function getContentType(content: Content) {
	switch (content) {
		case 'binary':
			return 'application/octet-stream'
		case 'json':
			return 'application/json'
		case 'text':
			return 'text/plain'
	}
}

function getBody(res: Response, content: Content) {
	switch (content) {
		case 'binary':
			return res.arrayBuffer()
		case 'json':
			return res.json()
		case 'text':
			return res.text()
	}
}
