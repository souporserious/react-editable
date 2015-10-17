export default function getSelectionNode() {
  let node = document.getSelection().anchorNode
  let content = node && node.textContent

  // use sibling if space, tab, or newline
  if(/^\s*$/.test(content)) {
    node = node.nextSibling ? node.nextSibling : node.previousSibling
  }

  return node && (node.nodeType === 3 ? node.parentNode : node)
}