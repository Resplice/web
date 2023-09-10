const DB_NAME = 'RESPLICE_CACHE'
const DB_VERSION = 1

type Store =
	| 'session'
	| 'commands'
	| 'events'
	| 'account'
	| 'attributes'
	| 'chats'
	| 'contacts'
	| 'invites'
	| 'profile'
	| 'sessions'

let db: IDBDatabase | null = null

function createDatabase(newDB: IDBDatabase) {
	// Remove existing stores except for context
	const DOMStringStores = newDB.objectStoreNames
	for (let i = 0; i < DOMStringStores.length; i++) {
		if (DOMStringStores[i] === 'context') continue
		newDB.deleteObjectStore(DOMStringStores[i])
	}

	// Create new stores
	newDB.createObjectStore('commands', { autoIncrement: true })
	newDB.createObjectStore('events', { keyPath: 'id' })
	newDB.createObjectStore('account', { autoIncrement: true })
	newDB.createObjectStore('attributes', { keyPath: 'id' })
	newDB.createObjectStore('chats', { keyPath: 'id' })
	newDB.createObjectStore('contacts', { keyPath: 'id' })
	newDB.createObjectStore('invites', { keyPath: 'id' })
	newDB.createObjectStore('sessions', { keyPath: 'id' })
}

function deleteDatabase(): Promise<void> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.deleteDatabase(DB_NAME)
		request.onsuccess = () => {
			db = null
			resolve()
		}
		request.onerror = (e) => {
			reject(e)
		}
	})
}

function open(): Promise<void> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION)
		request.onsuccess = () => {
			db = request.result
			resolve()
		}
		request.onerror = (e) => {
			reject(e)
		}
		request.onupgradeneeded = () => {
			createDatabase(request.result)
		}
	})
}

function read<T>(store: Store): Promise<Record<Store, T[]>>
function read<T>(stores: Store[]): Promise<Record<Store, T[]>>
function read<T>(store: Store | Store[]) {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const transaction = db.transaction(store, 'readonly')
		const results = {} as Record<Store, T>

		if (Array.isArray(store)) {
			store.forEach((s) => {
				transaction.objectStore(s).getAll().onsuccess = (e) => {
					results[s] = (e.target as IDBRequest).result
				}
			})
		} else {
			transaction.objectStore(store).getAll().onsuccess = (e) => {
				results[store] = (e.target as IDBRequest).result
			}
		}

		transaction.oncomplete = () => {
			// transaction.commit()
			resolve(results)
		}
	})
}

function getById<T>(store: Store, id: number): Promise<T | undefined> {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const transaction = db.transaction(store, 'readonly')
		transaction.objectStore(store).get(id).onsuccess = (e) => {
			resolve((e.target as IDBRequest).result)
		}
	})
}

function insert<T>(store: Store, data: T): Promise<number[]>
function insert<T>(store: Store, data: T[]): Promise<number[]>
function insert<T>(store: Store, data: T | T[]) {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const transaction = db.transaction(store, 'readwrite')
		const results: number[] = []

		if (Array.isArray(data)) {
			data.forEach((d) => {
				transaction.objectStore(store).add(d).onsuccess = (e) => {
					results.push((e.target as IDBRequest).result)
				}
			})
		} else {
			transaction.objectStore(store).add(data).onsuccess = (e) => {
				results.push((e.target as IDBRequest).result)
			}
		}

		transaction.oncomplete = () => {
			// transaction.commit()
			resolve(results)
		}
	})
}

function upsert<T>(store: Store, data: T): Promise<number[]>
function upsert<T>(store: Store, data: T[]): Promise<number[]>
function upsert<T>(store: Store, data: T, key: number): Promise<number[]>
function upsert<T>(store: Store, data: T | T[], key?: number) {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const transaction = db.transaction(store, 'readwrite')
		const results: T[] = []

		if (Array.isArray(data)) {
			data.forEach((d) => {
				transaction.objectStore(store).put(d).onsuccess = (e) => {
					results.push((e.target as IDBRequest).result)
				}
			})
		} else {
			transaction.objectStore(store).put(data, key).onsuccess = (e) => {
				results.push((e.target as IDBRequest).result)
			}
		}

		transaction.oncomplete = () => {
			// transaction.commit()
			resolve(results)
		}
	})
}

function remove(store: Store, id: number): Promise<void>
function remove(store: Store, ids: number[]): Promise<void>
function remove(store: Store, id: number | number[]): Promise<void> {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const transaction = db.transaction(store, 'readwrite')

		if (Array.isArray(id)) {
			id.forEach((i) => {
				transaction.objectStore(store).delete(i)
			})
		} else {
			transaction.objectStore(store).delete(id)
		}

		transaction.oncomplete = () => {
			// transaction.commit()
			resolve()
		}
	})
}

function clear(): Promise<void> {
	return new Promise((resolve, reject) => {
		if (!db || db.version !== DB_VERSION) {
			reject('Please open the database before using it.')
			return
		}

		const DOMStringStores = db.objectStoreNames
		const stores: Store[] = []
		for (let i = 0; i < DOMStringStores.length; i++) {
			stores[i] = DOMStringStores[i] as Store
		}

		const transaction = db.transaction(stores, 'readwrite')
		stores.forEach((s) => {
			transaction.objectStore(s).clear()
		})

		transaction.oncomplete = () => resolve()
	})
}

const DBWrapper = {
	open,
	read,
	getById,
	insert,
	upsert,
	remove,
	clear,
	delete: deleteDatabase
}

export type DB = typeof DBWrapper

export default DBWrapper
