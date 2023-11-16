import * as search from 'js-search'
import type { RespliceDocuments } from '$modules/search/search.types'

class SearchService {
	#engine: {
		attributes: search.Search
		connections: search.Search
		invites: search.Search
	}
	constructor(documents: RespliceDocuments) {
		this.#engine = {
			attributes: new search.Search('id'),
			connections: new search.Search('id'),
			invites: new search.Search('value-id')
		}

		this.#engine.attributes.addIndex('name')
		this.#engine.attributes.addIndex('value')

		this.#engine.connections.addIndex('name')
		this.#engine.connections.addIndex('alias')

		this.#engine.invites.addIndex('name')

		this.#engine.attributes.addDocuments(documents.attributes)
		this.#engine.connections.addDocuments(documents.connections)
		this.#engine.invites.addDocuments(documents.invites)
	}

	query(query: string): RespliceDocuments {
		const attributeResults = this.#engine.attributes.search(query)
		const connectionResults = this.#engine.connections.search(query)
		const inviteResults = this.#engine.invites.search(query)

		return {
			attributes: attributeResults as RespliceDocuments['attributes'],
			connections: connectionResults as RespliceDocuments['connections'],
			invites: inviteResults as RespliceDocuments['invites']
		}
	}
}

export default SearchService
