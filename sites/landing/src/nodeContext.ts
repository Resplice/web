import * as three from 'three'

export function initializeNodeContext() {
	const ctxContainer = document.createElement('div')
	ctxContainer.className = 'fixed top-0 right-0 p-4'

	const ctxEl = document.createElement('div')
	ctxEl.id = 'node-ctx'
	ctxEl.className = 'bg-black rounded-lg shadow-md p-4 w-72'
	ctxEl.innerHTML = `
    <p class="text-gray-400 text-center">Select an account to see their details</p>
  `

	ctxContainer.appendChild(ctxEl)
	document.body.appendChild(ctxContainer)

	// node material
	let defaultMaterial: three.MeshLambertMaterial | null = null
	let selectedMaterial: three.MeshLambertMaterial | null = null
	let selectedNodeId: string | null = null

	return function renderNodeContext(node: Node) {
		if (node.id === 0) return

		console.log(node)
		const ctxEl = document.getElementById('node-ctx')
		if (!ctxEl) return

		ctxEl.innerHTML = `
      <div class="flex flex-col items-center justify-between space-y-4">
        <div class="w-16 h-16 rounded-full bg-gray-400"></div>
        <div>
          <p class="w-full text-lg text-center font-semibold text-gray-200 truncate">${
						node.name
					}</p>
          <p class="text-sm text-gray-400">Invited by ${node.invitedBy}</p>
        </div>
        ${
					node.name === 'Anonymous'
						? ''
						: `
          <button class="w-full bg-brand-primary text-white font-semibold rounded-lg py-2 px-4 transform transition duration-75 ease-in-out shadow-md focus:ring-4 focus:ring-green-200 focus:outline-none active:shadow-none">
            View Public Profile
          </button>
          `
				}
      </div>
    `

		if (!defaultMaterial) {
			defaultMaterial = node.__threeObj.material as three.MeshLambertMaterial
			selectedMaterial = defaultMaterial.clone()
			selectedMaterial.color = new three.Color(0x6c7dd5)
		}

		history.pushState({ id: node.id }, '', `/${node.id}`)
	}
}

export type Node =
	| {
			id: 0
			name: string
			avatarUrl: null
			invitedBy: null
			__threeObj: three.Mesh
	  }
	| {
			id: number
			name: string
			avatarUrl: string
			invitedBy: string
			__threeObj: three.Mesh
	  }
export function renderNodeContext(node: Node) {
	if (node.id === 0) return

	console.log(node)
	const ctxEl = document.getElementById('node-ctx')
	if (!ctxEl) return

	ctxEl.innerHTML = `
    <div class="flex flex-col items-center justify-between space-y-4">
      <div class="w-16 h-16 rounded-full bg-gray-400"></div>
      <div>
        <p class="w-full text-lg text-center font-semibold text-gray-200 truncate">${node.name}</p>
        <p class="text-sm text-gray-400">Invited by ${node.invitedBy}</p>
      </div>
      ${
				node.name === 'Anonymous'
					? ''
					: `
        <button class="w-full bg-brand-primary text-white font-semibold rounded-lg py-2 px-4 transform transition duration-75 ease-in-out shadow-md focus:ring-4 focus:ring-green-200 focus:outline-none active:shadow-none">
          View Public Profile
        </button>
        `
			}
    </div>
  `

	setNodeSelectedColor(node.__threeObj)
	history.pushState({ id: node.id }, '', `/${node.id}`)
}

function setNodeSelectedColor(node: three.Mesh) {
	const nodeMaterial = node.material as three.MeshLambertMaterial
	const newNodeMaterial = nodeMaterial.clone()
	newNodeMaterial.color = new three.Color(0x6c7dd5)

	node.material = newNodeMaterial
}
