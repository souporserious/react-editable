import React, { Component, PropTypes } from 'react'
import getSelectionNode from './get-selection-node'

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
  }
  
  componentDidUpdate() {
    if(this._node.innerHTML !== this.props.html) {
      this._node.innerHTML = this.props.html
    }
  }
  
  _emitChange = (type, e) => {
    const html = this._node.innerHTML

    if(html !== this._lastHTML) {
      e.target.value = html
      this.props.onChange(e)
    }

    // call desired event if requested
    if(this.props[type]) {
      this.props[type](e)
    }

    this._lastHTML = html
  }

  _mouseChange = (type, e) => {
    let selection = null

    if(e.type === 'mousedown') {
      this._dragging = true
    }

    if(this._dragging) {
      selection = getSelectionNode(document.getSelection())
    }

    if(e.type === 'mouseup') {
      this._dragging = false
    }

    // call desired event if requested
    if(this.props[type]) {
      this.props[type](e, selection)
    }
  }
  
  render() {
    const { editable, html, placeholder } = this.props
    
    return React.createElement(
      this.props.component,
      {
        ...this.props,
        contentEditable: editable,
        onBlur: this._emitChange.bind(null, 'onBlur'),
        onInput: this._emitChange.bind(null, 'onInput'),
        onMouseDown: this._mouseChange.bind(null, 'onMouseDown'),
        onMouseMove: this._mouseChange.bind(null, 'onMouseMove'),
        onMouseUp: this._mouseChange.bind(null, 'onMouseUp'),
        dangerouslySetInnerHTML: {__html: html},
        'data-placeholder': placeholder
      }
    )
  }
}

export default Editable