import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import wysiwyg from 'wysiwyg.js'

const noop = () => null

// TODO:
// http://www.neotericdesign.com/blog/2013/3/working-around-chrome-s-contenteditable-span-bug
// http://stackoverflow.com/questions/15015019/prevent-chrome-from-wrapping-contents-of-joined-p-with-a-span
// http://codereview.stackexchange.com/questions/28882/custom-wysiwyg-editor
// https://github.com/adamsanderson/wysiwyg
// https://github.com/maccman/wysiwyg/blob/master/src/wysiwyg.coffee

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
    const element = ReactDOM.findDOMNode(this)
    const onSelection = this._handleSelection.bind(this)

    // initialize editor
    this._editor = wysiwyg({element, onSelection, readOnly})

    // pass editor up to allow format execution 
    getEditor(this._editor.setHTML(html))
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