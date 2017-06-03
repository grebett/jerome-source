import React from 'react'
import Radium from 'radium'

import Title from '../common/Title'
import Event from './Event'

class NextEvents extends React.Component {
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
      overflow: 'hidden',
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
      left: '-220px',
      overflow: 'visible',
      width: '100%',
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
    // mobile
    subcontainerStyles['@media (max-width: 1023px)'] = {
      position: 'absolute',
      boxSizing: 'border-box',
      paddingLeft: '15px',
      top: '50px',
      left: '220px',
      width: '100%',
    }


    const eventsStyles = {
      marginTop: '17px',
      marginLeft: '5px',
      maxHeight: '140px',
      overflowX: 'hidden',
      overflowY: 'scroll',
    }
    // mobile
    eventsStyles['@media (max-width: 1023px)'] = {
      position: 'relative',
      top: '0px',
      overflowX: 'visible',
      overflowY: 'visible',
      maxHeight: 'auto',
    }

    const events = [{
      date: '22 JANVIER',
      hour: '17h',
      place: 'Centre Diocésain',
      city: 'Besançon'
    }, {
      date: '14 NOVEMBRE',
      hour: '14h30',
      place: 'Institut Goethe',
      city: 'Lyon'
    }, {
      date: '14 NOVEMBRE',
      hour: '14h30',
      place: 'Institut Goethe',
      city: 'Lyon'
    }]

    let customSize = null
    if (window.outerWidth <= 1024) {
      customSize = '1.5em'
    }

    return (
      <div style={containerStyles}>
        <div style={subcontainerStyles}>
          <Title size="h2" custom-size={customSize} text="prochains evenements"/>
          <div style={eventsStyles}>
            {events.map((event, i) => <Event key={i} data={event}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(NextEvents)
