import React from 'react'
import { Editable, Icons, utils } from '../src/react-editable'
import Select from './Select'

class Align extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { value: 'justifyLeft', label: <Icons.JustifyLeft /> },
        { value: 'justifyCenter', label: <Icons.JustifyCenter /> },
        { value: 'justifyRight', label: <Icons.JustifyRight /> },
        { value: 'justifyFull', label: <Icons.JustifyFull /> }
      ],
      selected: 'justifyLeft'
    }
    this._handleOnChange = this._handleOnChange.bind(this)
    this._renderOption = this._renderOption.bind(this)
  }
  
  _handleOnChange({value}) {
    this.setState({selected: value}, () => {
      this.props.onChange(value)
    })
  }

  _handleMouseDown(onSelect, e) {
    e.preventDefault()
    onSelect()
  }
  
  _renderOption(option, onSelect) {
    return(
      <li
        key={option.value}
        className="popout__link"
        onMouseDown={this._handleMouseDown.bind(null, onSelect)}
      >
        <div className="popout__link__label">  
          {option.label}
        </div>
      </li>
    )
  }
  
  render() {
    return(
      <Select
        options={this.state.options}
        selected={this.state.selected}
        onChange={this._handleOnChange}
        renderOption={this._renderOption}
      />
    )
  }
}

export default Align