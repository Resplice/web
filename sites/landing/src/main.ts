import './main.css'
import * as three from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import nodeData from './sample-nodes.json'

// Trying to go for something like this:
// https://github.com/davidpiegza/Graph-Visualization/blob/master/src/layouts/force-directed-layout.js

// Renderer
const renderer = new three.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Camera
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 60, 50)
camera.lookAt(0, 0, 0)
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.enableDamping = true
cameraControls.enableZoom = true
cameraControls.enablePan = true

// Lighting
const directionalLight = new three.DirectionalLight(0xffffff, 1)
directionalLight.position.z = 5
directionalLight.position.y = 3

// Nodes
type NodeEntity = (typeof nodeData)[number] & {
	depth: number
	childCount: number
	mesh: three.Mesh
}
const nodeEntities: Map<number, NodeEntity> = new Map()

// Parent Node
const parentNodeMesh = new three.Mesh()
parentNodeMesh.position.set(0, 0, 0)
nodeEntities.set(0, {
	accountId: 0,
	name: 'root',
	invitedBy: 0,
	childCount: 0,
	mesh: parentNodeMesh,
	depth: 0
})

const nodeGeometry = new three.SphereGeometry(0.5)
const nodeMaterial = new three.MeshLambertMaterial({ color: 0xffff00 })

nodeData.forEach((node) => {
	const parent = nodeEntities.get(node.invitedBy)
	if (!parent) return console.error(`Node ${node.accountId} has no parent`)

	// increase parent children count
	parent.childCount++

	const depth = parent.depth + 1

	const nodeMesh = new three.Mesh(nodeGeometry, nodeMaterial)
	nodeMesh.position.set(parent.childCount, -Math.abs(depth) * 5, 0)

	nodeEntities.set(node.accountId, { ...node, childCount: 0, depth, mesh: nodeMesh })
})

// Build Scene
const scene = new three.Scene()
nodeEntities.forEach((n) => scene.add(n.mesh))
const axesHelper = new three.AxesHelper(5)
scene.add(axesHelper)
scene.add(directionalLight)

// Events
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// Render
function render() {
	requestAnimationFrame(render)

	renderer.render(scene, camera)
}

render()
