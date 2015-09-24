export default function getCaretCoords(node) {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const preCaretRange = range.cloneRange()
  const preCoordRange = range.cloneRange()
  let top = 0
  let left = 0
  
  preCaretRange.selectNodeContents(node)
  preCaretRange.setEnd(range.endContainer, range.endOffset)

  if(preCoordRange.getClientRects()) {
    preCoordRange.collapse(true)
    const rect = preCoordRange.getClientRects()[0]
    top = rect.top
    left = rect.left
  }

  return {
    offset: preCaretRange.toString().length || 0,
    top,
    left
  }
} 