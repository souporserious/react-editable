import React from 'react'
import { Editable, Icons, utils } from '../src/react-editable'
import Select from './Select'

class Size extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { value: 1, label: <font size={3}>Small</font> },
        { value: 2, label: <font size={4}>Normal</font> },
        { value: 4, label: <font size={5}>Large</font> },
        { value: 6, label: <font size={6}>Huge</font> }
      ],
      selected: 1
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

  _renderButton() {
    return(
      <button
        type="button"
        className="btn trigger"
      >
        <Icons.FontSize />
        <svg width="9px" height="21px" viewBox="0 0 9 21">
          <polygon points="2.5,12 0,9 5,9 "/>
        </svg>
      </button>
    )
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
        renderButton={this._renderButton}
        renderOption={this._renderOption}
      />
    )
  }
}

export default Size