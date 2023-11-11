import { writable } from 'svelte/store'

type SearchHistoryType = 'attribute' | 'contact' | 'contactAttribute' | 'invite'

const queryStore = writable<string>('')
const historyStore = writable<{ type: SearchHistoryType; id: number }>()

const searchStores = {
	query: queryStore,
	history: historyStore
}

export type SearchStore = typeof searchStores

export default searchStores
