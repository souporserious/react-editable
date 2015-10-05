import React, { Component } from 'react';

class Indent extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <rect x="4" y="4" width="16" height="1"/>
        <rect x="10" y="8" width="10" height="1"/>
        <rect x="10" y="12" width="10" height="1"/>
        <rect x="4" y="16" width="16" height="1"/>
        <polygon points="4,8.707 4.707,8 7.207,10.5 4.707,13 4,12.293 5.793,10.5 "/>
      </svg>
    )
  }
}

export default Indent
