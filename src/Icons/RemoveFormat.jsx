import React, { Component } from 'react';

class RemoveFormat extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <path d="M14.6,7.984h-0.535c-0.047-0.186-0.131-0.407-0.252-0.663c-0.122-0.256-0.259-0.497-0.409-0.725
          c-0.155-0.238-0.326-0.446-0.51-0.624c-0.184-0.178-0.362-0.28-0.533-0.306c-0.16-0.021-0.362-0.036-0.607-0.047
          c-0.244-0.01-0.47-0.016-0.676-0.016h-0.451v8.798c0,0.171,0.036,0.327,0.109,0.469c0.072,0.142,0.199,0.252,0.38,0.329
          c0.093,0.036,0.288,0.085,0.586,0.147s0.529,0.096,0.695,0.101V16h-5.2v-0.55c0.145-0.01,0.366-0.031,0.664-0.062
          s0.503-0.07,0.617-0.116c0.171-0.067,0.296-0.164,0.376-0.291c0.08-0.127,0.12-0.296,0.12-0.508V5.605h-0.45
          c-0.16,0-0.36,0.004-0.598,0.012C7.688,5.624,7.46,5.641,7.243,5.667C7.072,5.687,6.895,5.789,6.711,5.973
          C6.528,6.156,6.358,6.364,6.203,6.597c-0.155,0.233-0.292,0.479-0.411,0.74S5.59,7.814,5.543,7.984H5V5h9.6V7.984z"/>
        <polygon points="19,11.714 18.286,11 16.5,12.786 14.714,11 14,11.714 15.786,13.5 14,15.286 14.714,16 
          16.5,14.214 18.286,16 19,15.286 17.214,13.5"/>
      </svg>
    )
  }
}

export default RemoveFormat