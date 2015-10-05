import React, { PropTypes } from 'react'
import Measure from 'react-measure'
import Drop from './Drop'

const noop = () => null
const defaultProps = {
  renderButton: (currentOption) =>
    <button
      type="button"
      className="btn trigger"
    >
      {currentOption.label}
      <svg width="9px" height="21px" viewBox="0 0 9 21">
        <polygon points="2.5,12 0,9 5,9 "/>
      </svg>
    </button>,
  renderHeader: noop,
  renderFooter: noop,
  renderOption: (option, onSelect) =>
    <li key={option.value} onClick={onSelect}>
      {option.label}
    </li>
}

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      dimensions: {}
    }
    this._documentClickHandler = (e) => this._documentClick(e)
    this._windowResizeHandler = (e) => this._windowResize(e)
  }
  
  componentDidMount() {
    document.addEventListener('mousedown', this._documentClickHandler)
    window.addEventListener('resize', this._windowResizeHandler)
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', this._documentClickHandler)
    window.removeEventListener('resize', this._windowResizeHandler)
  }

  _documentClick(e) {    
    if(this._trigger.contains(e.target)) {
      this.setState({isOpen: !this.state.isOpen})
    } else if(this._dropdown && !this._dropdown.contains(e.target)) {
      this.setState({isOpen: false})
    }
  }
  
  // force update on resize to get new dimensions
  _windowResize() {
    this.forceUpdate()
  }
  
  _getCurrentOption() {
    const { options, selected } = this.props
    let lookup = {}
    
    for(let i = options.length; i--;) {
      lookup[options[i].value] = options[i]
    }
    
    return lookup[selected]
  }
  
  _handleOptionClick(option) {
    this.props.onChange(option)
    this.setState({isOpen: false})
  }

  _renderButton(currentOption) {
    return this.props.renderButton(currentOption)
  }
  
  _renderOption(option) {
    const onSelect = this._handleOptionClick.bind(this, option)
    return this.props.renderOption(option, onSelect)
  }
  
  _renderFooter() {
    const closeMenu = () => this.setState({isOpen: false}) 
    return this.props.renderFooter(closeMenu)
  }
  
  render() {
    const { name, options, selected, topOffset, leftOffset } = this.props
    const currentOption = this._getCurrentOption()
    const modifier = name && name.toLowerCase()
    let selectClassName = 'react-select'
    let listClassName = 'popout__links'

    if(modifier) {
      selectClassName += ` react-select--${modifier}`
      listClassName += ` popout__links--${modifier}`
    }

    return(
      <div className={selectClassName} {...this.props}>
        <Measure
          ref={c => this._trigger = React.findDOMNode(c)}
          onChange={d => this.setState({dimensions: d})}
        >
          {this._renderButton(currentOption)}
        </Measure>
        <Drop
          getRef={c => this._dropdown = React.findDOMNode(c)}
          visible={this.state.isOpen}
          dimensions={this.state.dimensions}
          topOffset={topOffset}
          leftOffset={leftOffset}
          className="popout"
        >
          <ul className={listClassName}>
            {
              this.props.options.map(option =>
                this._renderOption(option)
              )
            }
          </ul>
          {this._renderFooter()}
        </Drop>
        <input type="hidden" name="option" value={currentOption.value} />
      </div>
    );
  }
}

Select.defaultProps = defaultProps

export default Select