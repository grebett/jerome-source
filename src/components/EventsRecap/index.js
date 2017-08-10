import React from 'react'
import Footer from '../common/Footer'
import Title from '../common/Title'
import * as Contentful from '../../services/contentful'

class EventsRecap extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }

    Contentful.getEntries('performances').then(value => {
      let performances = value.items.map(item => {
        let value = item.fields
        value.date = new Date(value.date).getTime()

        return value
      })

      // sort
      performances = performances.sort((perf1, perf2) => {
        if (perf1.date < perf2.date) {
          return 1
        } else if (perf1.date > perf2.date) {
          return -1
        } else {
          return 0
        }
      })
      this.setState({events: performances})
    }, error => {
      console.error(error)
    })
  }

  render() {
    const performancesStyles = {
      padding: '50px 0',
    }
    const performanceStyles = {
      listStyle: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '20px 15px',
    }

    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const Performances = this.state.events.map((e, i) => (<li key={i} style={performanceStyles}>
      <div>
        <Title size="h3" text={`${new Date(e.date).getDate()} ${months[new Date(e.date).getMonth()]} ${new Date(e.date).getFullYear()}`}/><br/>
        <Title size="h4" text={e.venue} font-family="Avenir Next"/>
        <p style={{fontSize: '0.9em', fontFamily:'Avenir Next'}} dangerouslySetInnerHTML={{__html: e.description}} />
    </div>
    </li>))

    return (
      <div style={{marginTop:'54px', width:'100%'}}>
        <ul style={performancesStyles}>
          {Performances}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default EventsRecap
