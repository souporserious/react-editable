import React, { Component, Children, PropTypes } from 'react';
import { Editable, utils } from '../src/react-editable';

const { getCaret, stripHTML } = utils

import './main.scss';

const COMMAND_ALIASES = {
  B: 'bold',
  I: 'italic',
  U: 'underline'
}

// TODOS:
// need IE support for HTML insertion
// figure out how to build control components
// thinking something along the lines of this:
// <Bold render={(icon) => <div>{icon}</div>}/>
// maybe a list of controls could be like:
// renderControls('Cool', 'This').map(control => <li>{control.icon}</li>)

class Formatting extends React.Component {
  constructor(props) {
    super(props)
    this._handleOnChange = this._handleOnChange.bind(this)
  }
  
  _handleOnChange(e) {
    this.props.onChange('formatBlock', '<'+ e.target.value +'>')
  }
  
  render() {
    const formats = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre']
    
    return(
      <select {...this.props} onChange={this._handleOnChange}>
        <option selected disabled>Formatting</option>
        {formats.map(format =>
          <option key={format} value={format}>
            {React.createElement(format, null, format)}
          </option>
        )}
      </select>
    )
  }
}

class FontSize extends React.Component {
  constructor(props) {
    super(props)
    this._handleOnChange = this._handleOnChange.bind(this)
  }
  
  _handleOnChange(e) {
    this.props.onChange('fontSize', e.target.value)
  }
  
  _getFontSizes() {
    const { smallest, biggest } = this.props
    let total = biggest
    let sizes = []
    
    for(let i = smallest; i <= total; i++) {
      sizes.push(<option key={i} value={i}>{i}</option>)
    }
    
    return sizes
  }
  
  render() {
    return(
      <select {...this.props} onChange={this._handleOnChange}>
        <option selected disabled>Font Size</option>
        {this._getFontSizes()}
      </select>
    )
  }
}

FontSize.defaultProps = {
  smallest: 1,
  biggest: 7
}

class App extends React.Component {
  state = {
    html:
    `
      <b>Let's make a statement!</b>
      <br/>
      <i>This is an italicized sentence.</i>
      <br/>
      <u>Very important information.</u>
    `,
    selection: window.getSelection()
  }
  
  _exec(role, value = null) {
    document.execCommand(role, false, value);
  }
  
  _handleClear = (e) => {
    this.setState({html: ''})
  }
  
  _handleOnChange = (e) => {
    const node = e.target
    const html = node.value
    this.setState({html})
  }

  _handleKeyUp = (e) => {
    const caret = getCaret(e.target)
    const currentChar = stripHTML(e.target.innerHTML).substr(caret.offset-1, 1)
    console.log(currentChar)
  }

  _handleMouseUp = (e, selection) => {
    console.log(selection.nodeName);
  }
  
  render() {
    return(
      <div>
        <div className="wysiwyg-editor">
          <div className="wysiwyg-controls">
            <a href='#' onClick={() => this._exec('foreColor', 'red')}>red</a>
            <a href='#' onClick={() => this._exec('bold')} title="⌘B">B</a>
            <a href='#' onClick={() => this._exec('insertHTML', 'WHAT')} title="⌘B">insertHTML</a>
            <a href='#' onClick={() => this._exec('italic')}>I</a>
            <a href='#' onClick={() => this._exec('underline')}>U</a>
            <a href='#' onClick={() => this._exec('strikeThrough')}>S</a>
            <a href='#' onClick={() => this._exec('justifyLeft')} title="Align Left">
              <i className="menu-left"></i>
            </a>
            <a href='#' onClick={() => this._exec('justifyCenter')} title="Center">
              <i className="menu-center"></i>
            </a>
            <a href='#' onClick={() => this._exec('justifyRight')} title="Align Right">
              <i className="menu-right"></i>
            </a>
            <a href='#' onClick={() => this._exec('justifyFull')} title="Justify">
              <i className="menu-justify"></i>
            </a>
            <FontSize onChange={this._exec} />
            <Formatting onChange={this._exec} />
          </div>
          <Editable
            className="wysiwyg-content"
            html={this.state.html}
            onChange={this._handleOnChange}
            onKeyUp={this._handleKeyUp}
            onMouseUp={this._handleMouseUp}
          />
        </div>
        <div className="current-html">
          <p>
            <strong>raw html:</strong>
            <textarea
              style={{width: '100%', height: 150}}
              value={this.state.html}
              onChange={this._handleOnChange}
            />
          </p>
          <p>
            <strong>word count:</strong> {stripHTML(this.state.html).split(' ').length}
          </p>
          <button onClick={this._handleClear}>Clear Content</button>
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));