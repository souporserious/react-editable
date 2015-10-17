import React, { Component, PropTypes } from 'react'
import getSelectionNode from './get-selection-node'
import wysiwyg from 'wysiwyg.js'

const noop = () => null

// http://www.hitmaroc.net/313505-3806-contenteditable-how-add-paragraph-blockquote-enter-key-press.html
function isTag(tagName) {
  const sel = window.getSelection()
  let containerNode

  tagName = tagName.toUpperCase()
  
  if(sel.rangeCount > 0) {
    containerNode = sel.getRangeAt(0).commonAncestorContainer
  }
  while(containerNode) {
    if(containerNode.nodeType === 1 &&
       containerNode.tagName === tagName) {
      return true
    }
    containerNode = containerNode.parentNode
  }
  return false
}

function wrapSelection(tag = 'span') {
  const sel = window.getSelection()
  const newNode = document.createElement(tag)

  if(sel.rangeCount) {
    const range = sel.getRangeAt(0).cloneRange()
    const currNode = getSelectionNode()

    // get the node at the start of the range
    let startNode = range.startContainer

    // find the first parent that is a real HTML tag and not a text node
    while(startNode.nodeType !== 1) startNode = startNode.parentNode

    // place the marker before the node
    startNode.parentNode.insertBefore(newNode, startNode)

    // append the currNode to the new one
    newNode.appendChild(currNode)

    // restore the selection
    sel.removeAllRanges()
    sel.addRange(range)
  }
}

function formatBlock(tag) {
  const isFormatted = isTag(tag)

  // if already formatted toggle the format off by unwrapping the node
  if(isFormatted) {
    console.log('unformat')
  }
  else {
    wrapSelection(tag)
  }
}

class Editable extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    html: PropTypes.string,
    readOnly: PropTypes.bool,
    getEditor: PropTypes.func,
    onChange: PropTypes.func
  }
  static defaultProps = {
    component: 'div',
    html: '',
    readOnly: false,
    getEditor: noop,
    onChange: noop
  }
  _editor = null
  _lastHTML = null

  shouldComponentUpdate(nextProps) {
    return this.props.readOnly !== nextProps.readOnly ||
           this._editor.getHTML() !== nextProps.html
  }

  componentDidMount() {
    const { html, readOnly, getEditor } = this.props
    const element = React.findDOMNode(this)
    const onSelection = this._handleSelection.bind(this)

    // initialize editor
    this._editor = wysiwyg({element, onSelection, readOnly})

    // add method to editor to format blocks
    this._editor.formatBlock = formatBlock

    // pass editor up to allow format execution 
    getEditor(this._editor.setHTML(html))

    // normalize editing creation from blank state
    element.addEventListener('keypress', e => {
      if(element.innerHTML === '' ||
         element.innerHTML === '<br>') {

        e.preventDefault()

        const char = String.fromCharCode(e.which)
        const node = document.createElement('div')
        const sel = window.getSelection()
        let range = sel.getRangeAt(0)

        // insert character into node
        node.innerHTML = char

        // insert node into range
        range.insertNode(node)
        range.setStart(node, 1)
        range.collapse(true)

        // move selection to end of node
        sel.removeAllRanges()
        sel.addRange(range)
      }
    })
  }
  
  componentDidUpdate(prevProps) {
    const { html, readOnly } = this.props

    if(this._editor.getHTML() !== html) {
      this._editor.setHTML(html)
    }

    if(prevProps.readOnly !== readOnly) {
      this._editor.readOnly(readOnly)
    }
  }

  _handleSelection(collapsed, rect, nodes, rightclick) {
    const html = this._editor.getHTML()
    this.props.onChange(html, nodes)
  }
  
  _emitChange = (type, e) => {
    const html = this._editor.getHTML()
    const event = this.props[type]
    
    // call on change if html has changed
    if(html !== this._lastHTML) {
      this.props.onChange(html)
    }

    // call original event
    if(event) {
      event(e)
    }

    this._lastHTML = html
  }

  render() {
    return React.createElement(
      this.props.component,
      {
        ...this.props,
        onBlur: this._emitChange.bind(null, 'onBlur'),
        onInput: this._emitChange.bind(null, 'onInput')
      }
    )
  }
}

export default Editable