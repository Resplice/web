import './main.css'
import ForceGraph from '3d-force-graph'
import graphData from './sample-graph.json'
import { type Node } from './nodeContext'

const res = await fetch('https://api.resplice.com/stats')
if (!res.ok) {
	throw new Error('Failed to fetch stats')
}

const stats = await res.json()

console.log(stats)

const graphElement = document.getElementById('graph') as HTMLElement

console.log(graphElement.getBoundingClientRect())

// Build Graph
const graph = ForceGraph({ controlType: 'orbit', rendererConfig: { antialias: true, alpha: true } })
graph(graphElement)
	.width(graphElement.getBoundingClientRect().width)
	.height(graphElement.getBoundingClientRect().height)
	.graphData(graphData)
	.dagMode('radialout')
	.dagLevelDistance(75)
	.backgroundColor('#242424')
	.nodeVal((n) => {
		const node = n as Node
		if (node.name === 'Genesis') return 5
		// if (node.name === 'Anonymous') return 1
		return 2
	})
	.nodeColor(() => {
		// const node = n as Node
		// if (node.name === 'Anonymous') return '#94A3B8'
		return '#1BBC9B'
	})
	.enableNodeDrag(false)

// Build Context
// const renderNodeContext = initializeNodeContext(graph)

// Snap to url node, if exists
// try {
// 	const nodePath = location.pathname.split('/')[1]
// 	if (nodePath) {
// 		const nodeId = parseInt(nodePath)
// 		snapToNodeId(graph, nodeId, renderNodeContext)
// 	}
// } catch (err) {
// 	console.error(err)
// }

// Events
window.addEventListener('resize', () => {
	graph
		.width(graphElement.getBoundingClientRect().width)
		.height(graphElement.getBoundingClientRect().height)
})
// graph.onNodeClick((node) => renderNodeContext(node as Node))
