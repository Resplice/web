import './main.css'
import ForceGraph from '3d-force-graph'
import graphData from './sample-graph.json'
import { initializeNodeContext, type Node } from './nodeContext'

console.log(graphData)

// Build Graph
const graph = ForceGraph({ controlType: 'orbit', rendererConfig: { antialias: true, alpha: true } })
graph(document.getElementById('graph') as HTMLElement)
	.graphData(graphData)
	.dagMode('radialout')
	.dagLevelDistance(75)
	.backgroundColor('#242424')
	.nodeVal((n) => {
		const node = n as Node
		if (node.name === 'Genesis') return 5
		if (node.name === 'Anonymous') return 1
		return 2
	})
	.nodeColor((n) => {
		const node = n as Node
		if (node.name === 'Anonymous') return '#94A3B8'
		return '#1BBC9B'
	})
	.enableNodeDrag(false)

// Build Context
const renderNodeContext = initializeNodeContext()

// Events
window.addEventListener('resize', () => {
	graph.width(window.innerWidth).height(window.innerHeight)
})
graph.onNodeClick((node) => renderNodeContext(node as Node))
