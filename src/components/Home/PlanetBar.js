import React from 'react'
import Radium from 'radium'

import Planet from '../common/Planet';

class PlanetBar extends React.Component {
  render() {
    const containerStyles = {
      position: 'relative',
      marginTop: '330px',
      height: '254px',
      width: '100%',
      backgroundColor: 'transparent',
      '@media (max-width: 1439px)': {
        marginTop: '300px'
      }
    }
    // mobile
    containerStyles['@media (max-width: 1023px)'] = {
      display: 'none',
    }

    return (
      <div style={containerStyles}>
        <Planet size='l' id={0} text='Piano' to='/page/piano' x={118} y={50} onMouseOver={this.props.onMouseOver}/>
        <Planet size='m' id={1} text='Clavecin' to='/page/clavecin' x={405} y={138} grad1='#13547a' grad2='#80d0c7' onMouseOver={this.props.onMouseOver}/>
        <Planet size='xl' id={2} text='Improvisation' to='/page/improvisation' x={633} y={10} grad1='#fccb90' grad2='#d57eeb' onMouseOver={this.props.onMouseOver}/>
        <Planet size='s' id={3} text='Recherche' to='/page/recherche' x={917} y={100} grad1='#5ee7df' grad2='#b490ca' onMouseOver={this.props.onMouseOver}/>
        <Planet size='l' id={4} text='Composition' to='/page/composition' x={1205} y={40} grad1='#30cfd0' grad2='#330867' onMouseOver={this.props.onMouseOver}/>
      </div>
    )
  }
}

export default Radium(PlanetBar)
