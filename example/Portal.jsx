import React from 'react'

class Portal extends React.Component {
  componentDidMount() {
    const { className, style, renderTo } = this.props
    const portal = document.createElement('div')

    // add a className to help identify it
    portal.className = 'react-portal'

    // take care of any classes or styles passed in
    if(className) {
      portal.className += ` ${className}`
    }
    if(style) {
      Object.keys(style).forEach(prop =>
        portal.style[prop] = style[prop]
      )
    }

    // append to end of body
    renderTo.appendChild(portal)
    
    // store portal to remove later
    this._portal = portal

    // render children to portal
    this._renderPortal(this.props)
  }
  
  componentWillReceiveProps(nextProps) {
    this._renderPortal(nextProps)
  }
  
  componentWillUnmount() {
    React.unmountComponentAtNode(this._portal)
    this._portal.parentNode.removeChild(this._portal)
  }
  
  _renderPortal(props) {
    const child = React.Children.only(props.children)
    const component = React.render(child, this._portal)
    
    this.props.getRef(component)
  }
  
  render() {
    return null
  }
}

Portal.defaultProps = {
  renderTo: document.body,
  getRef: () => null
}

export default Portal