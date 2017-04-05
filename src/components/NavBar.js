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
      backgroundColor: '#4a4a4a',
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
