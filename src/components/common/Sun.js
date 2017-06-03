import React from 'react'
import Radium from 'radium'

class Sun extends React.Component {
  render() {
    const containerStyles = {
      position: 'absolute',
      top: '-113px',
      right: '20px',
      height: '582px',
      width: '582px',
      backgroundColor: 'rgba(246, 211, 101, 0.6)',
      borderRadius: '50%',
      overflow: 'hidden',
      zIndex: 3,
    }
    containerStyles['@media (max-width: 1439px)'] = {
      height: '532px',
      width: '532px',
    }
    containerStyles['@media (max-width: 1279px)'] = {
      height: '485px',
      width: '485px',
    }
    containerStyles['@media (max-width: 1139px)'] = {
      height: '465px',
      width: '465px',
    }
    containerStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      top: '-270px',
      left: '-270px',
      height: '465px',
      width: '465px',
    }

    return (
      <div style={containerStyles}></div>
    )
  }
}

export default Radium(Sun)
