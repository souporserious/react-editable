import React, { Component, Children, PropTypes } from 'react'

class Editable extends React.Component {
  constructor() {
    super()
    this._node = ''
    this._lastHTML = ''
    this._emitChange = this._emitChange.bind(this)
  }
  
  shouldComponentUpdate(nextProps) {
    return this._node.innerHTML !== nextProps.html
  }
  
  componentDidUpdate() {
    if(this._node.innerHTML !== this.props.html) {
      this._node.innerHTML = this.props.html;
    }
  }
  
  _emitChange(e) {
    const html = e.target.innerHTML
    
    if(this.props.onChange && html !== this._lastHTML) {
      this.props.onChange(e.target.innerHTML, e)
    }
    this._lastHTML = html
  }
  
  render() {
    const { editable, html } = this.props
    
    return React.createElement(
      this.props.component,
      {
        ...this.props,
        ref: c => this._node = React.findDOMNode(c),
        contentEditable: editable,
        onInput: this._emitChange,
        onBlur: this._emitChange,
        dangerouslySetInnerHTML: {__html: html}
      }
    )
  }
}

Editable.defaultProps = {
  component: 'div',
  editable: true
}

export default Editable