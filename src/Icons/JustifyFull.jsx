import React, { Component } from 'react';

class JustifyFull extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <rect x="4.125" y="4.125" width="15.75" height="0.75"/>
        <rect x="4.125" y="8.125" width="15.75" height="0.75"/>
        <rect x="4.125" y="12.125" width="15.75" height="0.75"/>
        <rect x="4.125" y="16.125" width="15.75" height="0.75"/>
      </svg>
    )
  }
}

export default JustifyFull