import React, { Component } from 'react';

class Italic extends Component {
  static defaultProps = {
    style: {
      width: 24,
      height: 21,
    }
  }

  render() {
    return(
      <svg viewBox="0 0 24 21" {...this.props}>
        <path d="M15.876,5l-0.116,0.512c-0.16,0.005-0.37,0.028-0.628,0.07s-0.45,0.08-0.574,0.116
          c-0.217,0.067-0.372,0.171-0.465,0.31s-0.16,0.293-0.202,0.461l-1.866,8.037c-0.01,0.035-0.018,0.076-0.023,0.122
          s-0.008,0.088-0.008,0.124c0,0.119,0.026,0.22,0.078,0.302c0.052,0.083,0.145,0.155,0.279,0.217
          c0.078,0.036,0.248,0.079,0.512,0.128c0.264,0.049,0.46,0.079,0.589,0.089L13.336,16H8.124l0.116-0.512
          c0.145-0.01,0.351-0.026,0.62-0.047s0.46-0.052,0.574-0.093c0.202-0.072,0.354-0.172,0.457-0.298
          c0.103-0.127,0.173-0.28,0.209-0.461l1.859-8.047c0.01-0.047,0.018-0.093,0.023-0.14c0.006-0.047,0.009-0.093,0.009-0.14
          c0-0.103-0.023-0.194-0.067-0.271c-0.044-0.078-0.136-0.147-0.275-0.209s-0.329-0.12-0.57-0.174
          c-0.24-0.054-0.417-0.087-0.531-0.097L10.666,5H15.876z"/>
      </svg>
    )
  }
}

export default Italic