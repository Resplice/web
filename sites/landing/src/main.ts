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
	.nodeColor(() => '#1BBC9B')
	.enableNodeDrag(false)

// Build Context
const renderNodeContext = initializeNodeContext()

// Events
window.addEventListener('resize', () => {
	graph.width(window.innerWidth).height(window.innerHeight)
})
graph.onNodeClick((node) => renderNodeContext(node as Node))
