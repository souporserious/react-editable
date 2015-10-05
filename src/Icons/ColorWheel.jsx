import React, { Component } from 'react';

class ColorWheel extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <path fill="#FFB42E" d="M12,10.5h7.5c0-2.776-1.512-5.193-3.753-6.49L12,10.5L12,10.5z"/>
        <path fill="#FFF100" d="M15.747,4.01C14.644,3.371,13.366,3,12,3S9.356,3.371,8.253,4.01L12,10.5L15.747,4.01z"/>
        <path fill="#BB73EF" d="M12,10.5l-3.747,6.49C9.356,17.629,10.633,18,12,18c1.366,0,2.644-0.371,3.747-1.01L12,10.5L12,10.5z"/>
        <path fill="#28BF6D" d="M12,10.5L8.253,4.01C6.012,5.307,4.5,7.724,4.5,10.5L12,10.5L12,10.5z"/>
        <path fill="#F74D2B" d="M19.5,10.5H12l3.747,6.49C17.988,15.693,19.5,13.276,19.5,10.5z"/>
        <path fill="#209DE2" d="M4.5,10.5c0,2.776,1.512,5.193,3.753,6.49L12,10.5H4.5z"/>
      </svg>
    )
  }
}

export default ColorWheel