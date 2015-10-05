import React from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Portal from './Portal'

class Drop extends React.Component {
  render() {
    const { children, visible, dimensions, topOffset, leftOffset, getRef, onLeave } = this.props
    
    return(
      <Portal>
        <Transition
          onlyChild={true}
          enter={{
            scale: spring(1, [400, 38]),
            opacity: spring(1, [400, 38])
          }}
          leave={{
            scale: spring(0.98, [380, 34]),
            opacity: spring(0, [380, 34])
          }}
          onLeave={onLeave}
        >
          {
            visible &&
            <div
              ref={c => getRef(c)}
              {...this.props}
              style={{
                transformOrigin: '0 0',
                position: 'absolute',
                top: dimensions.bottom + document.body.scrollTop + topOffset + 'px',
                left: dimensions.left + document.body.scrollTop + leftOffset + 'px'
              }}
            >
              {children}
            </div>
          }
        </Transition>
      </Portal>
    )
  }
}

Drop.defaultProps = {
  visible: false,
  dimensions: {top: 0, left: 0},
  topOffset: 0,
  leftOffset: 0,
  getRef: () => null
}

export default Drop