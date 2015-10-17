export default function getNodeTree(startNode, endNode = document.activeElement) {
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