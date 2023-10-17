import { writable } from 'svelte/store'

type SearchHistoryType = 'attribute' | 'contact' | 'contactAttribute' | 'invite'

const queryStore = writable<string>('')
const historyStore = writable<{ type: SearchHistoryType; id: number }>()

const searchStore = {
	query: queryStore,
	history: historyStore
}

export default searchStore
