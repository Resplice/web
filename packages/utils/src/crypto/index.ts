import { btob64, b64tob64u } from '$utils/converters/base64'
// const LARGEST_INT_32 = 4294967295

export function generateAesKey() {
	return crypto.subtle.generateKey(
		{
			name: 'AES-GCM',
			length: 128
		},
		true,
		['encrypt', 'decrypt']
	)
}

export function generateBaseIV() {
	return crypto.getRandomValues(new Uint8Array(8))
}

export async function exportKey(key: CryptoKey) {
	const rawBuf = await crypto.subtle.exportKey('raw', key)
	return new Uint8Array(rawBuf)
}

export async function encrypt(
	key: CryptoKey,
	iv: Uint8Array,
	data: Uint8Array
): Promise<Uint8Array> {
	const encryptedBuffer: ArrayBuffer = await crypto.subtle.encrypt(
		{
			name: 'AES-GCM',
			iv
		},
		key,
		data
	)

	return new Uint8Array(encryptedBuffer)
}

export async function decrypt(
	key: CryptoKey,
	iv: Uint8Array,
	cipherText: Uint8Array
): Promise<Uint8Array> {
	const decryptedBuffer = await crypto.subtle.decrypt(
		{
			name: 'AES-GCM',
			iv // The initialization vector you used to encrypt
			// additionalData: ArrayBuffer, // The additionalData you used to encrypt (if any)
		},
		key,
		cipherText
	)
	return new Uint8Array(decryptedBuffer)
}

export function sign(key: CryptoKey, data: Uint8Array) {
	return crypto.subtle.sign('HMAC', key, data)
}

export function verify(key: CryptoKey, signature: Uint8Array, data: Uint8Array) {
	return crypto.subtle.verify('HMAC', key, signature, data)
}

export function importPublicKey(rawKey: ArrayBuffer): Promise<CryptoKey> {
	return crypto.subtle.importKey(
		'jwk',
		buildJwk(rawKey),
		{
			name: 'RSA-OAEP',
			hash: 'SHA-256'
		},
		false,
		['encrypt']
	)
}

function buildJwk(rawKey: ArrayBuffer): JsonWebKey {
	// NOTE: 'AQAB' = base64(65537)
	const b64Key = btob64(rawKey)
	const b64UrlKey = b64tob64u(b64Key)
	return {
		kty: 'RSA',
		e: 'AQAB',
		n: b64UrlKey,
		alg: 'RSA-OAEP-256',
		ext: true
	}
}

export async function publicKeyEncrypt(key: CryptoKey, data: Uint8Array): Promise<Uint8Array> {
	const encryptedBuffer = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, data)

	return new Uint8Array(encryptedBuffer)
}

// ac = auth client
// as = auth server
// c = client
// s = server
// IV structure: [ac, ac, as, as, c, c, c, c, s, s, s, s]

export function buildClientIV(ivCounter: number, isAuth = false): Uint8Array {
	const ivBuf = new ArrayBuffer(12)
	const ivArr = new Uint8Array(ivBuf)

	if (isAuth) {
		// set last 10 bytes to 0
		ivArr.set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 2)
		// set first 2 bytes to counter
		new DataView(ivBuf).setUint16(0, ivCounter)

		return ivArr
	}

	// set first & last 4 bytes to 0
	ivArr.set([0, 0, 0, 0], 0)
	ivArr.set([0, 0, 0, 0], 8)
	// set the remaining 4 bytes with counter
	new DataView(ivBuf).setUint32(4, ivCounter)

	return ivArr
}

export function buildServerIV(ivCounter: number, isAuth = false): Uint8Array {
	const ivBuf = new ArrayBuffer(12)
	const ivArr = new Uint8Array(ivBuf)

	if (isAuth) {
		// set the first 2 bytes to 0
		ivArr.set([0, 0], 0)
		// set the last 8 bytes to 0
		ivArr.set([0, 0, 0, 0, 0, 0, 0, 0], 4)
		// set the remaining 2 bytes to counter
		new DataView(ivBuf).setUint16(2, ivCounter)

		return ivArr
	}

	// set first 8 bytes to 0
	ivArr.set([0, 0, 0, 0, 0, 0, 0, 0], 0)
	// set last 4 bytes to counter
	new DataView(ivBuf).setUint32(8, ivCounter)

	return ivArr
}

export function parseServerCipher(cipher: Uint8Array): {
	iv: Uint8Array
	cipherText: Uint8Array
} {
	const iv = cipher.slice(0, 4) // TODO: Add base IV
	const cipherText = cipher.slice(4)

	return {
		iv,
		cipherText
	}
}

export function combineBufferArrays(arr1: Uint8Array, arr2: Uint8Array): Uint8Array {
	const newBuf = new ArrayBuffer(arr1.byteLength + arr2.byteLength)
	const newBufView = new Uint8Array(newBuf)
	newBufView.set(arr1)
	newBufView.set(arr2, arr1.byteLength)
	return newBufView
}

export type ReCrypto = {
	key: CryptoKey
	rawKey: Uint8Array
	baseIV: Uint8Array
}
export async function buildReCrypto(): Promise<ReCrypto> {
	const key = await generateAesKey()
	const rawKey = await exportKey(key)
	const baseIV = generateBaseIV()

	return {
		key,
		rawKey,
		baseIV
	}
}
