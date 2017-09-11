import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'

class Incipit extends React.Component {
  render() {
    const containerStyles = {
      position: 'absolute',
      margin: '0px',
      top: '81px',
      left: '118px',
      height: 'auto',
      width: '602px',
      backgroundColor: 'transparent',
    }
    containerStyles['@media (max-width: 1439px)'] = {
      left: 118 * 0.9 + 'px',
    }
    containerStyles['@media (max-width: 1279px)'] = {
      left: 118 * 0.8 + 'px',
    }
    containerStyles['@media (max-width: 1139px)'] = {
      left: 118 * 0.7 + 'px',
    }
    containerStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      top: '0px',
      left: '0px',
      overflow: 'visible',
      width: '100%',
      height: 'auto',
      border: 'none',
      boxSizing: 'border-box',
      padding: '15px',
    }

    const pStyles = {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontWeight: 'lighter',
      fontSize: '18px',
      lineHeight: '21px',
      margin: '0px',
      padding: '32px 34px 0 0',
      color: 'rgb(245, 235, 235)',
    }
    pStyles['@media (max-width: 1439px)'] = {
      fontSize: '16px',
      lineHeight: '21px',
      padding: '22px 54px 0 0'
    }
    // const linkStyles = {
    //   color: '#f6d365',
    //   fontWeight: 'bold',
    //   textDecoration: 'none'
    // }

    return (
      <div style={containerStyles}>
        <Title size='h1' text='jerome bertier' color="rgb(245, 235, 235)"/>
        {/* <p>
          <a href="#" style={linkStyles}>Découvrir mes vidéos sur YouTube</a>
        </p>
        <p>
          <a href="#" style={linkStyles}>Découvrir mes morceaux sur SoundCloud</a>
        </p>*/}
      </div>
    )
  }
}

export default Radium(Incipit)
