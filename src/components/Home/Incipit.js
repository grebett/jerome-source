import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'
import { Link } from 'react-router-dom'

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
    // mobile
    containerStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      top: '0px',
      left: '0px',
      padding: '15px',
    }

    const pStyles = {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontWeight: 'lighter',
      fontSize: '18px',
      lineHeight: '21px',
      margin: '0px',
      padding: '32px 34px 0 0'
    }
    pStyles['@media (max-width: 1439px)'] = {
      fontSize: '16px',
      lineHeight: '21px',
      padding: '22px 54px 0 0'
    }
    pStyles['@media (max-width: 1023px)'] = {
      display: 'none',
    }
    const imgStyles = {
      display: 'none',
    }
    imgStyles['@media (max-width: 1023px)'] = {
      display: 'block',
      width: '100%',
      marginTop: '30px',
    }
    const linkStyles = {
      color: '#f6d365',
      fontWeight: 'bold',
      textDecoration: 'none'
    }

    return (
      <div style={containerStyles}>
        <Title size='h1' text='jerome bertier' />
        <p style={pStyles}>
          Pianiste, Claveciniste, Interprète et Improvisateur… un parcours musical au-delà des frontières, une curiosité sans cesse renouvelée pour les musique d’hier, d’aujourd’hui, d’ici et d’ailleurs.
          &nbsp;<Link style={linkStyles} to='bio'>Découvrir ma biographie</Link>
        </p>
        <img style={imgStyles} src="/assets/piano.jpg" alt="" />
      </div>
    )
  }
}

export default Radium(Incipit)
