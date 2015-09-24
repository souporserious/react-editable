import getSelectionNode from './get-selection-node'

export default function getCaret(node) {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const preCoordRange = range.cloneRange()
  const preCaretRange = range.cloneRange()
  let offset = 0
  let top = 0
  let left = 0
  
  // bail out if nothing selected
  if(selection.rangeCount <= 0) return {node: null, offset, top, right}

  // get the current position of the caret
  if(preCoordRange.getClientRects) {
    preCoordRange.collapse(true);
    if(preCoordRange.getClientRects().length > 0) {
      const rect = preCoordRange.getClientRects()[0]
      top = rect.top
      left = rect.left
    }
  }

  preCaretRange.selectNodeContents(node)
  preCaretRange.setEnd(range.endContainer, range.endOffset)

  return {
    node: getSelectionNode(selection),
    offset: preCaretRange.toString().length || 0,
    top,
    left
  }
} 