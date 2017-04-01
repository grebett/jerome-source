import React from 'react'

import MenuTab from './MenuTab';

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class Menu extends React.Component {
  render() {
    const parentStyle = {
    }

    return (
      <div style={parentStyle}>
        <MenuTab name="home" title="Accueil"/>
        <MenuTab name="bio" title="Bio"/>
        <MenuTab name="gallery" title="Gallerie"/>
        <MenuTab name="email" title="Contact"/>
      </div>
    )
  }
}

export default Menu
