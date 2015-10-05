export default function getSelectionNode() {
  const selection = document.getSelection()
  let node = selection.anchorNode
  let content = node && node.textContent

  // use sibling if space, tab, or newline
  if(/^\s*$/.test(content)) {
    node = node.nextSibling ? node.nextSibling : node.previousSibling
  }

  return node && (node.nodeType === 3 ? node.parentNode : node)
}