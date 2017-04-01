import React from 'react'

import Menu from './Menu';

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class NavBar extends React.Component {
  render() {
    const containerStyle = {
      position: 'fixed',
      top: '0px',
      left: '0px',
      height: '54px',
      width: '100%',
      backgroundColor: '#4a4a4a',
    }

    return (
      <div style={containerStyle}>
        <Menu />
      </div>
    )
  }
}

export default NavBar
