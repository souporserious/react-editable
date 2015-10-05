import React from 'react'
import { Editable, Icons, utils } from '../src/react-editable'
import Select from './Select'

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        '#ED5565', '#DA4453', '#FC6E51', '#E9573F',
        '#FFCE54', '#F6BB42', '#A0D468', '#8CC152',
        '#48CFAD', '#37BC9B', '#4FC1E9', '#3BAFDA',
        '#5D9CEC', '#4A89DC', '#AC92EC', '#967ADC',
        '#EC87C0', '#D770AD', '#F5F7FA', '#E6E9ED',
        '#CCD1D9', '#AAB2BD', '#656D78', '#434A54'
      ],
      selected: '#ED5565',
      type: 'foreColor'
    }
    this._handleOnChange = this._handleOnChange.bind(this)
    this._renderOption = this._renderOption.bind(this)
    this._renderFooter = this._renderFooter.bind(this)
  }
  
  _handleOnChange({value}) {
    this.setState({selected: value}, () => {
      this.props.onChange(this.state.type, value)
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
        <Icons.ColorWheel />
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
        className="popout__link color-picker__swatch"
        onMouseDown={this._handleMouseDown.bind(null, onSelect)}
      >
        {option.label}
      </li>
    )
  }
  
  _renderFooter() {
    const { type } = this.state
    let className = 'color-picker__type'

    return(
      <footer className="color-picker__types">
        <div
          onMouseDown={e => e.preventDefault()}
          onClick={() => this.setState({type: 'foreColor'})}
          className={className + (type === 'foreColor' ? ` ${className}--active` : '')}
        >Foreground</div>
        <div
          onMouseDown={e => e.preventDefault()}
          onClick={() => this.setState({type: 'hiliteColor'})}
          className={className + (type === 'hiliteColor' ? ` ${className}--active` : '')}
        >Background</div>
      </footer>
    )
  }

  render() {
    return(
      <Select
        name="color"
        options={this.state.colors.map(color =>
          ({ value: color, label: <span style={{display: 'block', width: '100%', height: '100%', background: color}} /> })
        )}
        selected={this.state.selected}
        onChange={this._handleOnChange}
        renderButton={this._renderButton}
        renderOption={this._renderOption}
        renderFooter={this._renderFooter}
      />
    )
  }
}

export default Color