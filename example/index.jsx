import React, { Component, Children, PropTypes } from 'react';
import Editable from '../src/editable';

import './main.scss';

/*
sources:
https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla#Executing_Commands
https://developer.mozilla.org/en-US/docs/Web/API/document.execCommand
http://stackoverflow.com/a/27255103/1461204

Allow placeholder in content editable
[contenteditable="true"] {
cursor: text;
color: #212121;

&:empty::after {
  color: #a0a0a0;
  font-style: italic;
  content: attr(data-placeholder);    
}
}*/

function getSelectionText() {
  let text = '';
  if(window.getSelection) {
    text = window.getSelection().toString();
  } else if(document.selection && document.selection.type !== "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

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
  constructor() {
    super()
    this.state = {
      html:
      `
        <b>Let's make a statement!</b>
        <br/>
        <i>This is an italicized sentence.</i>
        <br/>
        <u>Very important information.</u>
      `
    }
    this._handleClear = this._handleClear.bind(this)
    this._handleOnChange = this._handleOnChange.bind(this)
  }
  
  _exec(role, value = null) {
    console.log(role, value);
    document.execCommand(role, false, value);
  }
  
  _handleClear(e) {
    this.setState({html: ''})
  }
  
  _handleOnChange(html) {
    this.setState({html})
  }
  
  render() {
    return(
      <div>
        <div className="wysiwyg-editor">
          <div className="wysiwyg-controls">
            <a href='#' onClick={() => this._exec('bold')} title="⌘B">B</a>
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
          />
        </div>
        <div className="current-html">
          <p>
            <strong>word count:</strong> {this.state.html.split(' ').length}
          </p>
          <p>
            <strong>raw html:</strong>
            <textarea
              style={{width: '100%', height: 150}}
              value={this.state.html}
              onChange={e => this._handleOnChange(e.target.value)}
            />
          </p>
          <button onClick={this._handleClear}>Clear Content</button>
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));