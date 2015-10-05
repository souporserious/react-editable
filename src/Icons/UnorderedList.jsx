import React, { Component } from 'react';

class UnorderedList extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <circle cx="5.5" cy="6.5" r="1.5"/>
        <circle cx="5.5" cy="14.5" r="1.5"/>
        <rect x="10" y="16" width="10" height="1"/>
        <rect x="10" y="12" width="10" height="1"/>
        <rect x="10" y="8" width="10" height="1"/>
        <rect x="10" y="4" width="10" height="1"/>
      </svg>
    )
  }
}

export default UnorderedList