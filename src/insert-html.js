// http://stackoverflow.com/a/6691294/1461204
export default function insertHTML(html, selectPastedContent = true) {
  const selection = window.getSelection()
  
  if(selection.getRangeAt && selection.rangeCount) {
    let range = selection.getRangeAt(0)
    range.deleteContents()

    // Range.createContextualFragment() would be useful here but is
    // only relatively recently standardized and is not supported in
    // some browsers (IE9, for one)
    const div = document.createElement('div')
    const frag = document.createDocumentFragment()
    let node, lastNode

    div.innerHTML = html

    while((node = div.firstChild)) {
      lastNode = frag.appendChild(node)
    }
    
    const firstNode = frag.firstChild

    range.insertNode(frag)

    // Preserve the selection
    if(lastNode) {
      range = range.cloneRange()
      range.setStartAfter(lastNode)

      if(selectPastedContent) {
        range.setStartBefore(firstNode)
      } else {
        range.collapse(true)
      }

      selection.removeAllRanges()
      selection.addRange(range)
    }
  }
}