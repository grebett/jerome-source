import React from 'react'
import Radium from 'radium'

import MenuTab from './MenuTab'

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class Menu extends React.Component {
  render() {
    const containerStyles = {
      position: 'absolute',
      top: '10px',
      right: '10px',
    }

    return (
      <div style={containerStyles}>
        <MenuTab name="home" title="Accueil" to="/" hoverable />
        <MenuTab name="bio" title="Bio" to="/bio" hoverable />
        <MenuTab name="gallery" title="Galerie" to="/galerie" hoverable />
        <MenuTab name="agenda" title="Agenda" to="/evenements" hoverable />
        <MenuTab name="email" title="Contact" to="/contact" hoverable />
      </div>
    )
  }
}

export default Radium(Menu)
