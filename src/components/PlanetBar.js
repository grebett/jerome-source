import React from 'react'

import Planet from './common/Planet';

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class PlanetBar extends React.Component {
  render() {
    const containerStyle = {
      height: '254px',
      width: '100%',
      backgroundColor: 'steelblue'
    }

    return (
      <div style={containerStyle}>
        <Planet size='l' text='Piano' to='piano' />
        <Planet size='m' text='Clavecin' to='clavecin' />
        <Planet size='xl' text='Improvisation' to='improvisation' />
        <Planet size='s' text='Recherche' to='recherche' />
        <Planet size='l' text='Composition' to='composition' />
      </div>
    )
  }
}

export default PlanetBar
