import * as three from 'three'

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

export function initializeNodeContext() {
	// node material
	let previousNode: {
		mesh: three.Mesh
		material: three.MeshLambertMaterial
	} | null = null
	let activeNodeMaterial: three.MeshLambertMaterial | null = null

	return function renderNodeContext(node: Node) {
		if (node.id === 0) return

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

		if (!activeNodeMaterial) {
			activeNodeMaterial = (node.__threeObj.material as three.MeshLambertMaterial).clone()
			activeNodeMaterial.color = new three.Color(0x6c7dd5)
		}

		if (previousNode) {
			previousNode.mesh.material = previousNode.material
		}

		previousNode = {
			mesh: node.__threeObj,
			material: node.__threeObj.material as three.MeshLambertMaterial
		}

		node.__threeObj.material = activeNodeMaterial

		history.pushState({ id: node.id }, '', `/${node.id}`)
	}
}
