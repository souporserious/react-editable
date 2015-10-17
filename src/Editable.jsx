import React, { Component, PropTypes } from 'react'
import wysiwyg from 'wysiwyg.js'

const noop = () => null

class Editable extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    html: PropTypes.string,
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    getEditor: PropTypes.func,
    onChange: PropTypes.func
  }
  static defaultProps = {
    component: 'div',
    html: '',
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
    const element = React.findDOMNode(this)
    const onSelection = this._handleSelection.bind(this)

    // initialize editor
    this._editor = wysiwyg({element, onSelection})

    // pass editor up to allow format execution 
    getEditor(this._editor.setHTML(html))
  }
  
  componentDidUpdate(prevProps) {
    const { html, editable } = this.props

    if(this._editor.getHTML() !== html) {
      this._editor.setHTML(html)
    }

    if(prevProps.editable !== editable) {
      this._editor.readOnly(editable)
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