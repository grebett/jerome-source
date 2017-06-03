import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'
import Icon from '../common/Icon'

class Infos extends React.Component {
  render() {
    const containerStyles = {
      position: 'absolute',
      top: '-113px',
      right: '20px',
      height: '582px',
      width: '582px',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      border: '1px solid #f6a623',
      overflow: 'hidden'
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
    // mobile
    containerStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      top: '0px',
      left: '0px',
      overflow: 'visible',
      width: '100%',
      height: 'auto',
      border: 'none',
    }
    const subcontainerStyles = {
      position: 'absolute',
      top: '295px',
      left: '125px',
      width: '482px'
    }
    subcontainerStyles['@media (max-width: 1439px)'] = {
      top: '269px'
    }
    subcontainerStyles['@media (max-width: 1279px)'] = {
      top: '260px',
      left: '100px',
    }
    subcontainerStyles['@media (max-width: 1139px)'] = {
      top: '260px',
      left: '100px',
    }
    subcontainerStyles['@media (max-width: 1023px)'] = {
      width: '100%',
      left: '0px',
      top: '0px',
      position: 'relative',
      boxSizing: 'border-box',
      padding: '15px',
    }
    const eventsStyles = {
      marginTop: '17px',
      marginLeft: '5px',
      maxHeight: '140px',
    }

    const contactDetailStyles = {
      marginBottom: '20px'
    }
    const contactDetailTextStyles = {
      fontSize: '20px',
      textAlign: 'left',
      fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
      fontWeight: 'lighter',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '15px'
    }
    contactDetailTextStyles['@media (max-width: 1439px)'] = {
      fontSize: '16px'
    }
    const linkStyles = {
      color: '#4a4a4a',
      textDecoration: 'none'
    }

    return (
      <div style={containerStyles}>
        <div style={subcontainerStyles}>
          <Title size="h2" text="contact"/>
          <div style={eventsStyles}>
            <div style={contactDetailStyles}>
              <Icon name="email" active width="51px" display="inline-block"/>
              <span style={contactDetailTextStyles}>
                MAIL<br/>
                <a style={linkStyles} href="mailto:jerome.bertier@gmail.com" target="_blank">jerome.bertier@gmail.com</a>
              </span>
            </div>
            <div style={contactDetailStyles}>
              <Icon name="linkedin" active width="51px" display="inline-block"/>
              <span style={contactDetailTextStyles}>
                LINKEDIN<br/>
                <a style={linkStyles} href="https://linkedin.com/jeromebertier" target="_blank">linkedin.com/jeromebertier</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Infos)
