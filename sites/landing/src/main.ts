import './main.css'
import * as three from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Renderer
const renderer = new three.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Camera
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
camera.lookAt(0, 0, 0)
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.enableDamping = true
cameraControls.enableZoom = true
cameraControls.enablePan = false

// Lighting
const directionalLight = new three.DirectionalLight(0xffffff, 1)
directionalLight.position.z = 5
directionalLight.position.y = 3

// Nodes
const geometry = new three.SphereGeometry(1)
const material = new three.MeshLambertMaterial({ color: 0xffff00 })
const node = new three.Mesh(geometry, material)

// Build Scene
const scene = new three.Scene()
scene.add(node)
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
