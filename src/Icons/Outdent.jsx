import React, { Component } from 'react';

class Outdent extends Component {
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
        <polygon points="7,8.707 6.293,8 3.793,10.5 6.293,13 7,12.293 5.207,10.5 "/>
      </svg>
    )
  }
}

export default Outdent
