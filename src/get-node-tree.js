export default function getNodeTree(startNode, endNode = node.parentNode) {
  let currNode = startNode
  let tree = []
  
  while(currNode !== endNode) {
    tree.push(currNode)

    if(currNode.parentNode) {
      currNode = currNode.parentNode
    } else {
      currNode = endNode
    }
  }

  return tree
}