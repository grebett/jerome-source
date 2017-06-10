import React from 'react'
import Radium from 'radium'

import Close from './Close'

class Modal extends React.Component {
  render() {
    const containerStyles = {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '100',
      fontFamily: 'Kano',
      color: '#4a4a4a',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      display: this.props.display ? 'flex' : 'none',
    }
    const bodyStyles = {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      alignSelf: 'center',
    }
    const closeStyles = {
      position: 'absolute',
      top: '0px',
      right: '30px',
      color: '#ffffff',
      cursor: 'pointer',
      zIndex: 2,
    }

    let body
    let width = window.outerWidth > 640 ? 640 : '100%'
    let height = 360
    switch(this.props.type) {
      case 'image':
        body = <img width="100%" src={this.props.target} alt=""/>
        break
      case 'vidéo':
        body = <iframe type="text/html" width={width} height={height} src={this.props.target} frameBorder="0"></iframe>
        break
      case 'audio':
        body = <iframe type="text/html" width={width} height={height} src={this.props.target} frameBorder="0"></iframe>
        break
      default:
        body = <p>toto</p>
    }
    // could check if this.props.size is a valid hx element
    return (
      <div ref="container" style={containerStyles}>
        <div style={closeStyles} onClick={this.props.onClose}>
          <Close />
        </div>
        <div style={bodyStyles}>
          {body}
        </div>
      </div>
    )
  }
}

export default Radium(Modal)
