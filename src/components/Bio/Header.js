import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'
import Card from '../common/Card'

class Header extends React.Component {
  render() {
    const containerStyles = {
      position: 'relative',
      margin: '0px',
      top: '27px',
      left: '118px',
      width: 'calc(100% - 118px)',
    }
    containerStyles['@media (max-width: 1439px)'] = {
      left: 118 * 0.9 + 'px',
      width: `calc(100% - ${118 * 0.9 + 'px'})`,
    }
    containerStyles['@media (max-width: 1279px)'] = {
      left: 118 * 0.8 + 'px',
      width: `calc(100% - ${118 * 0.8 + 'px'})`,
    }
    containerStyles['@media (max-width: 1139px)'] = {
      left: 118 * 0.7 + 'px',
      width: `calc(100% - ${118 * 0.7 + 'px'})`,
    }
    const subcontainerStyles = {
      width:'100%',
      position: 'relative',
      marginTop: '50px',
    }
    const cardStyles = {
      position: 'relative',
      display: 'inline-block',
      zIndex: '2',
      verticalAlign: 'middle',
      marginLeft: '0%',
      width: '35%',
    }
    const imgStyles = {
      backgroundColor: 'transparent',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
      zIndex: '1',
      marginLeft: '-20px',
      maxHeight: '462px',
      padding: '0px',
      width: '65%',
    }

    return (
      <div style={containerStyles}>
        <Title size='h1' text='jerome bertier' />
        <div style={subcontainerStyles}>
          <div style={cardStyles}>
            <Card width='100%' title='piano' text='«&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;»' />
          </div>
          <img style={imgStyles} src='/assets/piano.png' alt='piano' />
        </div>
      </div>
    )
  }
}

export default Radium(Header)
