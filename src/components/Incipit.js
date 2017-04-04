import React from 'react'

import Title from './common/Title'
import { Link } from 'react-router-dom'

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class Incipit extends React.Component {
  render() {
    const containerStyles = {
      position: 'fixed',
      margin: '0px',
      top: '81px',
      left: '118px',
      height: 'auto',
      width: '602px',
      backgroundColor: 'transparent'
    }
    const pStyles = {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontWeight: 'lighter',
      fontSize: '20px',
      lineHeight: '23px',
      margin: '0px',
      padding: '32px 34px 0 15px'
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

export default Incipit
