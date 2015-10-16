import React, { Component, PropTypes } from 'react'
import wysiwyg from 'wysiwyg.js'

const noop = () => null

class Editable extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    getEditor: PropTypes.func,
    onChange: PropTypes.func
  }
  static defaultProps = {
    component: 'div',
    editable: true,
    placeholder: '',
    getEditor: noop,
    onChange: noop
  }
  _editor = null
  _lastHTML = null

  shouldComponentUpdate(nextProps) {
    return this.props.editable !== nextProps.editable ||
           this._editor.getHTML() !== nextProps.html
  }

  componentDidMount() {
    const { html, getEditor } = this.props
    const onSelection = this._handleSelection.bind(this)

    this._editor = wysiwyg({
      element: React.findDOMNode(this),
      onSelection
    })

    getEditor(this._editor.setHTML(html))
  }
  
  componentDidUpdate() {
    const { html } = this.props

    if(this._editor.getHTML() !== html) {
      this._editor.setHTML(html)
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