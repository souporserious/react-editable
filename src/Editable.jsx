import React, { Component, PropTypes } from 'react'
import getSelectionNode from './get-selection-node'

require('mutationobserver-shim')

function saveSelection() {
  let savedRange = null

  if(window.getSelection) {
    savedRange = window.getSelection().getRangeAt(0)
  }
  else if(document.selection) { 
    savedRange = document.selection.createRange()
  } 

  return savedRange
}

function restoreSelection(node, savedRange) {
  // All major browsers
  if(window.getSelection) {
    let s = window.getSelection()
    
    if(s.rangeCount > 0) {
      s.removeAllRanges()
    }

    s.addRange(savedRange)
  }
  // Non IE and no-selection
  else if(document.createRange) {
    window.getSelection().addRange(savedRange)
  }
  // IE
  else if(document.selection) {
    savedRange.select()
  }
}


var isInFocus = false;
function onDivBlur()
{
    isInFocus = false;
}

class Editable extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    component: 'div',
    editable: true,
    placeholder: '',
    onChange: () => null
  }
  _node = null
  _lastHTML = ''

  shouldComponentUpdate(nextProps) {
    return this.props.editable !== nextProps.editable ||
           this._node.innerHTML !== nextProps.html
  }

  componentDidMount() {
    this._node = React.findDOMNode(this)

    this._observer = new MutationObserver(this._onMutation);
    this._observer.observe(this._node, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    })
  }
  
  componentDidUpdate() {
    if(this._node.innerHTML !== this.props.html) {
      this._node.innerHTML = this.props.html
    }
  }

  componentWillUnmount() {
    this._observer.disconnect()
  }

  _onMutation = () => {
    this._emitChange('MutationObserver', null)
  }
  
  _emitChange = (type, e) => {
    const html = this._node.innerHTML
    const event = this.props[type]
    const selection = getSelectionNode()

    if(type !== 'MutationObserver') {
      this._savedRange = saveSelection()
    }
    
    // call on change if html has changed
    if(html !== this._lastHTML || type === 'MutationObserver') {
      this.props.onChange(html, selection)
    }

    // call original event
    if(event) {
      event(e, selection)
    }

    restoreSelection(this._node, this._savedRange)

    this._lastHTML = html
  }
  
  render() {
    const { editable, html, placeholder } = this.props

    return React.createElement(
      this.props.component,
      {
        ...this.props,
        contentEditable: editable,
        onBlur: this._emitChange.bind(null, 'onBlur'),
        onKeyDown: this._emitChange.bind(null, 'onKeyDown'),
        onKeyUp: this._emitChange.bind(null, 'onKeyUp'),
        onMouseUp: this._emitChange.bind(null, 'onMouseUp'),
        dangerouslySetInnerHTML: {__html: html},
        'data-placeholder': placeholder
      }
    )
  }
}

export default Editable