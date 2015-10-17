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
    const element = React.findDOMNode(this)
    const onSelection = this._handleSelection.bind(this)

    this._editor = wysiwyg({element, onSelection})
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