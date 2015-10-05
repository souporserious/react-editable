import React, { Component } from 'react';

class Blockquote extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <path d="M7,12.478v1.484c2.308,0,4-1.506,4-3.628V7.038H7V10.5h2.442C9.442,11.622,8.49,12.478,7,12.478z"/>
        <path d="M13,12.478v1.484c2.308,0,4-1.506,4-3.628V7.038h-4V10.5h2.442C15.442,11.622,14.49,12.478,13,12.478z"/>
      </svg>
    )
  }
}

export default Blockquote
