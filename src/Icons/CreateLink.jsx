import React, { Component } from 'react';

class CreateLink extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <rect x="8" y="10" width="8" height="1"/>
        <path d="M9,12.5H5c-0.551,0-1-0.449-1-1v-2c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1h1c0-1.105-0.895-2-2-2H5
          c-1.105,0-2,0.895-2,2v2c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2h-1C10,12.051,9.551,12.5,9,12.5z"/>
        <path d="M15,12.5h4c0.551,0,1-0.449,1-1v-2c0-0.551-0.449-1-1-1h-4c-0.551,0-1,0.449-1,1h-1c0-1.105,0.895-2,2-2h4
          c1.105,0,2,0.895,2,2v2c0,1.105-0.895,2-2,2h-4c-1.105,0-2-0.895-2-2h1C14,12.051,14.449,12.5,15,12.5z"/>
      </svg>
    )
  }
}

export default CreateLink