import React from 'react'
import { Icons, utils } from '../src/react-editable'

function toUpperCaseEachWord(str) {
  const toUpperCaseFirstChar = (str) =>
    (str.substr(0, 1).toUpperCase() + str.substr(1))

  return str.split(' ').map(v => toUpperCaseFirstChar(v)).join(' ')
}

class Command extends React.Component {
  _exec(role, value = null) {
    this.props.editor[role](value)
  }

  _getIcon(role) {
    let type = toUpperCaseEachWord(role)

    // check if command has insert appended
    if(type.indexOf('Insert') > -1) {
      type = type.replace('Insert', '')
    }

    return type
  }

  render() {
    const { active, role, value, onClick } = this.props
    let Type = this._getIcon(role)
    let className = `btn btn--${role}`
    let style = {}

    // if(active.indexOf(role) > -1) {
    //   className += ` btn--active`
    // }

    return(
      <button
        {...this.props}
        type="button"
        className={className}
        style={style}
        onMouseDown={e => {
          e.preventDefault()
          this._exec(role, value)
        }}
      >
        {/*React.createElement(Icons[Type])*/}
        {Type}
      </button>
    )
  }
}

export default Command