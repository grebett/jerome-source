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
    const linkStyles = {
      color: '#f6d365',
      fontWeight: 'bold',
      textDecoration: 'none'
    }

    return (
      <div style={containerStyles}>
        <Title size='h1' text='jerome bertier' />
        <p style={pStyles}>
          «&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»
          &nbsp;<Link style={linkStyles} to='bio'>Découvrir ma biographie</Link>
        </p>
      </div>
    )
  }
}

export default Radium(Incipit)
