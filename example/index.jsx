import React, { Component, Children, PropTypes, createElement } from 'react'
import Command from './Command'
import Color from './Color'
import Size from './Size'
import Align from './Align'
import wysiwyg from 'wysiwyg.js'
import { Editable, Icons, utils } from '../src/react-editable'
const { getCaret, getCurrentStyles, insertHTML, stripHTML } = utils

import './main.scss';

class WYSIWYG extends React.Component {
  _exec(role, value = null) {
    this._editor[role](value)
  }
  
  _handleOnChange = (html, nodes) => {
    this.props.onChange(html)
  }

  render() {
    return(
      <div className="wysiwyg-editor">
        <div className="wysiwyg-controls">
          <Size
            onChange={value => this._exec('fontSize', value)}
          />
          <Command
            role="bold"
            title="⌘B"
            editor={this._editor}
          />
          <Command
            role="italic"
            title="⌘I"
            editor={this._editor}
          />
          <Command
            role="underline"
            title="⌘U"
            editor={this._editor}
          />
          <Command
            role="strikethrough"
            title="⌘S"
            editor={this._editor}
          />
          <Align
            onChange={value => this._exec('align', value)}
          />
          <Command
            role="insertList"
            value={true}
            editor={this._editor}
          />
          <Command
            role="insertList"
            value={false}
            editor={this._editor}
          />
          <Command
            role="indent"
            value={true}
            editor={this._editor}
          />
          <Command
            role="indent"
            editor={this._editor}
          />
          <Color
            onChange={(role, value) => this._exec(role, value)}
          />
          <Icons.CreateLink 
            onMouseDown={(e) => {
              e.preventDefault()
              this._exec('insertLink', prompt('Please enter a URL', 'http://'))
            }}
          />
          <Command
            role="formatBlock"
            value="blockquote"
            editor={this._editor}
          />
          <Command
            role="removeFormat"
            editor={this._editor}
          />
        </div>
        <Editable
          getEditor={e => this._editor = e}
          className="wysiwyg-content"
          html={this.props.html}
          onChange={this._handleOnChange}
        />
      </div>
    )
  }
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
    selection: window.getSelection(),
    currentStyles: []
  }

  _clearHtml = (e) => {
    this.setState({html: ''})
  }

  _setHtml = () => {
    this.setState({html: '<b>Bold Tags Are Cool Mannn</b>'})
  }

  _handleOnTextAreaChange = (e) => {
    this.setState({html: e.target.value})
  }

  render() {
    return(
      <div>
        <WYSIWYG
          html={this.state.html}
          onChange={html => this.setState({html})}
        />
        <div className="current-html">
          <p>
            <strong>raw html:</strong>
            <textarea
              style={{width: '100%', height: 150}}
              value={this.state.html}
              onChange={this._handleOnTextAreaChange}
            />
          </p>
          <p>
            <strong>word count:</strong> {stripHTML(this.state.html).split(' ').length}
          </p>
          <button onClick={this._clearHtml}>Clear Content</button>
          <button onClick={this._setHtml}>Set HTML</button>
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));