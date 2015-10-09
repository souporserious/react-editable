import React, { Component, Children, PropTypes, createElement } from 'react'
import Command from './Command'
import Color from './Color'
import Size from './Size'
import Align from './Align'
import { Editable, Icons, utils } from '../src/react-editable'
const { getCaret, getCurrentStyles, stripHTML } = utils

import './main.scss';

class WYSIWYG extends React.Component {
  state = {
    selection: window.getSelection(),
    currentStyles: []
  }
  
  _exec(role, value = null) {
    document.execCommand(role, false, value);
  }

  _onChange(html) {
    this.props.onChange(html)
  }
  
  _handleOnChange = (html, selection) => {
    const currentStyles = getCurrentStyles(selection, React.findDOMNode(this.refs['editor']))
    //console.log(currentStyles)
    this.setState({currentStyles})
    this._onChange(html)
  }

  _handleKeyUp = (e) => {
    const caret = getCaret(e.target)
    const currentChar = stripHTML(e.target.innerHTML).substr(caret.offset-1, 1)
    //console.log(currentChar)
  }

  _handleMouseUp = (e, selection) => {
    const currentStyles = getCurrentStyles(selection, React.findDOMNode(this.refs['editor']))
    //this.setState({currentStyles})
  }

  render() {
    const { currentStyles } = this.state

    return(
      <div className="wysiwyg-editor">
        <div className="wysiwyg-controls">
          <Size
            onChange={value => this._exec('fontSize', value)}
          />
          <Command
            active={currentStyles}
            role="bold"
            title="⌘B"
          />
          <Command
            active={currentStyles}
            role="italic"
            title="⌘I"
          />
          <Command
            active={currentStyles}
            role="underline"
            title="⌘U"
          />
          <Command
            active={currentStyles}
            role="strikeThrough"
            title="⌘S"
          />
          <Align
            onChange={role => this._exec(role)}
          />
          <Command
            active={currentStyles}
            role="insertOrderedList"
          />
          <Command
            active={currentStyles}
            role="insertUnorderedList"
          />
          <Command
            active={currentStyles}
            role="outdent"
          />
          <Command
            active={currentStyles}
            role="indent"
          />
          <Color
            onChange={(role, value) => this._exec(role, value)}
          />
          <Icons.CreateLink 
            onMouseDown={(e) => {
              e.preventDefault()
              this._exec('createLink', prompt('Please enter a URL', 'http://'))
            }}
          />
          <Icons.Blockquote />
          <Command
            active={currentStyles}
            role="removeFormat"
          />
        </div>
        <Editable
          ref="editor"
          className="wysiwyg-content"
          html={this.props.html}
          onChange={this._handleOnChange}
          onKeyUp={this._handleKeyUp}
          onMouseUp={this._handleMouseUp}
          onBlur={() => this.setState({currentStyles: []})}
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

  _handleClear = (e) => {
    this._onChange('')
  }

  _handleOnTextAreaChange = (e) => {
    this._onChange(e.target.value)
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
          <button onClick={this._handleClear}>Clear Content</button>
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));