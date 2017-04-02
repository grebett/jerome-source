import React from 'react'

import Title from './common/Title'
import Event from './Event'

class NextEvents extends React.Component {
  render() {
    const containerStyle = {
      position: 'absolute',
      top: '-113px',
      left: '50%',
      height: '582px',
      width: '582px',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      border: '1px solid #f6a623'
    }
    const subcontainerStyle = {
      position: 'absolute',
      top: '291px',
      left: '100px',
      width: '482px'
    }
    const eventsStyle = {
      marginTop: '20px',
      maxHeight: '140px',
      overflowX: 'hidden',
      overflowY: 'scroll'
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

    return (
      <div style={containerStyle}>
        <div style={subcontainerStyle}>
          <Title size="h2" text="prochains evenements"/>
          <div style={eventsStyle}>
            {events.map((event, i) => <Event key={i} data={event}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default NextEvents
