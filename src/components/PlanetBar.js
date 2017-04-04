import React from 'react'

import Planet from './common/Planet';

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class PlanetBar extends React.Component {
  render() {
    const containerStyle = {
      position: 'relative',
      margin: '450px 0 100px 0',
      height: '254px',
      width: '100%',
      backgroundColor: 'transparent'
    }

    return (
      <div style={containerStyle}>
        <Planet size='l' text='Piano' to='piano' x={146} y={70} />
        <Planet size='m' text='Clavecin' to='clavecin' x={405} y={178} grad1='#13547a' grad2='#80d0c7'/>
        <Planet size='xl' text='Improvisation' to='improvisation' x={633} y={0} grad1='#fccb90' grad2='#d57eeb'/>
        <Planet size='s' text='Recherche' to='recherche' x={917} y={80} grad1='#5ee7df' grad2='#b490ca'/>
        <Planet size='l' text='Composition' to='composition' x={1198} y={121} grad1='#30cfd0' grad2='#330867'/>
      </div>
    )
  }
}

export default PlanetBar
