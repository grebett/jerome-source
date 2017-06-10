import React from 'react'
import Radium from 'radium'

import Menu from './Menu';

class NavBar extends React.Component {
  render() {
    const containerStyles = {
      position: 'fixed',
      top: '0px',
      left: '0px',
      height: '54px',
      width: '100%',
      backgroundColor: '#202020',
      zIndex: 100
    }

    return (
      <div style={containerStyles}>
        <Menu />
      </div>
    )
  }
}

export default Radium(NavBar)
