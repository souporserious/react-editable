import getNodeTree from './get-node-tree'

const COMMANDS = {
  B: 'bold',
  STRONG: 'bold',
  I: 'italic',
  U: 'underline'
}

const STYLES = {
  textAlign: ['left', 'center', 'right', 'justify'],
  fontSize: [1, 2, 3, 4, 5, 6, 7],
  fontStyle: 'italic',
  textDecoration: ['overline', 'line-through', 'underline']
}

// get all the styles that are associated with a node
export default function getCurrentStyles(startNode, endNode) {
  const nodes = getNodeTree(startNode, endNode)
  let commands = []
  
  nodes.forEach(node => {
    let tagName = node.tagName

    for(let style in STYLES) {
      if(style === STYLES) {
        commands.push(STYLES[style])
      }
    }

    for(let command in COMMANDS) {
      if(command === tagName) {
        commands.push(COMMANDS[command])
      }
    }
  })
  return commands
}