import proto, { deserializeMessage, serializeCommand } from '@resplice/proto'
import {
	generateAesKey,
	type Fetch,
	importPublicKey,
	joinBuffers,
	exportKey,
	publicKeyEncrypt
} from '@resplice/utils'
import config from '$services/config'
import type { DB } from '$services/db'
import { sendCommand } from '$common/protocol/helpers'
import type { SocketCommuter } from '$common/workers/socket/socketCommuter'
import type { Session } from '$modules/session/session.types'
import type { SessionStore } from '$modules/session/session.store'
import { SocketCommandType } from '$common/workers/socket/socket.types'

export interface SessionProtocol {
	load(): Promise<Session | null>
	logout(): Promise<void>
}

type Dependencies = {
	fetch: Fetch
	cache: DB
	store: SessionStore
	commuter: SocketCommuter
}
function sessionProtocolFactory({ fetch, cache, store, commuter }: Dependencies): SessionProtocol {
	async function startSession(accessToken: string, persist: boolean): Promise<Session> {
		const [ipAddress, publicKeyEncoded, clientAesKey, serverAesKey] = await Promise.all([
			fetch.get<string>({ endpoint: '/ip-address', content: 'text' }),
			fetch.get<string>({ endpoint: '/public-key', content: 'text' }),
			generateAesKey(),
			generateAesKey(),
			cache.delete()
		])
		await cache.open()

		const publicKey = await importPublicKey(publicKeyEncoded.trim())
		const exportedKeys = joinBuffers(await exportKey(clientAesKey), await exportKey(serverAesKey))
		const accessKey = await publicKeyEncrypt(publicKey, exportedKeys)

		const cryptoKeys = {
			client: clientAesKey,
			server: serverAesKey,
			accessKey
		}
		const payload: proto.Command['payload'] = {
			$case: 'startSession',
			startSession: {
				accessToken,
				persist,
				ipAddress,
				userAgent: navigator.userAgent
			}
		}
		const [id] = await cache.insert('commands', persist ? payload : '')
		const command: proto.Command & { id: number } = {
			id,
			payload
		}
		const serializedCommand = await serializeCommand(
			command,
			cryptoKeys.client,
			cryptoKeys.accessKey
		)
		const messageBytes = await fetch.post<ArrayBuffer>({
			endpoint: '/auth',
			data: serializedCommand
		})
		const { event, state, error } = await deserializeMessage(
			new Uint8Array(messageBytes),
			cryptoKeys.server
		)
		if (error || state) return null
		if (event.payload?.$case !== 'sessionStarted') return null

		const session: Session = {
			id: event.payload.sessionStarted.sessionId,
			cryptoKeys,
			persisted: persist,
			userAgent: event.payload.sessionStarted.userAgent,
			ipAddress: event.payload.sessionStarted.ipAddress
		}

		await cache.upsert('session', session, 0)
		history.replaceState({}, '', window.location.origin + window.location.pathname)

		return session
	}

	function loadSession(): Promise<Session> {
		return cache.getById<Session>('session', 0)
	}

	return {
		async load() {
			const params = new URLSearchParams(window.location.search)
			const accessToken = params.get('resplice-access-token')
			const persist = params.get('persist') === 'true'

			const currentSession = accessToken
				? await startSession(accessToken, persist)
				: await loadSession()

			if (currentSession) store.set({ currentSession: { id: 0, ...currentSession }, sessions: [] })

			return currentSession
		},
		async logout() {
			sendCommand(commuter, {
				$case: 'endSession',
				endSession: {
					sessionId: 0
				}
			})
			commuter.postMessage({ type: SocketCommandType.CLOSE })
			await cache.delete()
			location.replace(config.authUrl)
		}
	}
}

export default sessionProtocolFactory
