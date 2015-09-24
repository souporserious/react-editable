import React, { Component, PropTypes } from 'react'

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
    return this._node.innerHTML !== nextProps.html
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
  
  render() {
    const { editable, html, placeholder } = this.props
    
    return React.createElement(
      this.props.component,
      {
        ...this.props,
        contentEditable: editable,
        onBlur: this._emitChange.bind(null, 'onBlur'),
        onInput: this._emitChange.bind(null, 'onInput'),
        dangerouslySetInnerHTML: {__html: html},
        'data-placeholder': placeholder
      }
    )
  }
}

export default Editable