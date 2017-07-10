import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import * as Contentful from '../../services/contentful'

import Title from '../common/Title'
import Event from './Event'

class NextEvents extends React.Component {
  constructor() {
    super()
    this.state = {
      displayModal: false,
      events: [],
    }
    Contentful.getEntries('performances').then(value => {
      let performances = value.items.map(item => {
        let value = item.fields
        value.date = new Date(value.date)

        return value
      })

      // sort
      performances.sort((a, b) => a.date > b.date)

      // keep the last one (if less than a month) + the 2 next
      let now = new Date()
      let i = performances.length - 1;
      while (performances[i].date > now) {
        i--;
      }
      performances = performances.slice(i, i + 3)

      // delete the first performance if it is older than one month
      let month = performances[0].date.getMonth()
      let past = new Date(performances[0].date.setMonth((month - 1) % 11))
      if (now - past > 1000 * 3600 * 24 * 30) {
        performances.shift()
      }
      this.setState({events: performances})
    }, error => {
      console.error(error)
    })
  }

  render() {
    const containerStyles = {
      position: 'absolute',
      top: '-113px',
      right: '20px',
      height: '582px',
      width: '582px',
      backgroundColor: this.state.events.length > 0 ? 'transparent' : 'rgba(246, 211, 101, 0.6)',
      borderRadius: '50%',
      border: this.state.events.length > 0 ? '1px solid #f6a623' : 'none',
      overflow: 'hidden',
      transition: 'all 0.3s',
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
      marginBottom: this.state.events.length > 0 ? 'auto' : '-400px',
    }

    const subcontainerStyles = {
      position: 'absolute',
      top: '295px',
      left: '125px',
      width: '482px',
      display: this.state.events.length > 0 ? 'block' : 'none',
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

    let customSize = null
    if (window.outerWidth <= 1024) {
      customSize = '1.5em'
    }

    return (
      <div style={containerStyles}>
        <div style={subcontainerStyles}>
          <Link to="/evenements" style={{textDecoration:'none'}}>
            <Title size="h2" custom-size={customSize} text="prochains evenements"/>
          </Link>
          <div style={eventsStyles}>
            {this.state.events.map((event, i) => <Event key={i} data={event}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(NextEvents)
