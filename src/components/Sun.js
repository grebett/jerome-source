import React from 'react'
import Radium from 'radium'

import Title from './common/Title'
import Event from './Event'

class NextEvents extends React.Component {
  render() {
    const containerStyles = {
      position: 'absolute',
      top: '-113px',
      left: '765px',
      height: '582px',
      width: '582px',
      backgroundColor: 'rgba(246, 211, 101, 0.6)',
      borderRadius: '50%',
      overflow: 'hidden',
      zIndex: 3,
    }
    containerStyles['@media (max-width: 1439px)'] = {
      top: '-113px',
      left: '700px',
      height: '532px',
      width: '532px',
    }
    containerStyles['@media (max-width: 1279px)'] = {
      top: '-113px',
      left: '670px',
      height: '485px',
      width: '485px',
    }
    containerStyles['@media (max-width: 1139px)'] = {
      top: '-113px',
      left: '630px',
      height: '465px',
      width: '465px',
    }

    return (
      <div style={containerStyles}></div>
    )
  }
}

export default Radium(NextEvents)
