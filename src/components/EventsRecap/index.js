import React from 'react'
import Footer from '../common/Footer'
import Title from '../common/Title'
import * as Contentful from '../../services/contentful'

class EventsRecap extends React.Component {
  constructor() {
    super()
    this.state = {
      eventsDisplayed: [],
      allEvents: [],
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
      this.setState({
        allEvents: performances,
        eventsDisplayed: performances.filter(p => new Date(p.date).getMonth() === new Date().getMonth()
        && new Date(p.date).getFullYear() === new Date().getFullYear()),
      })
    }, error => {
      console.error(error)
    })
    this.filter = this.filter.bind(this)
  }

  filter(predicate) {
    this.setState({eventsDisplayed: this.state.allEvents.filter(p => predicate(p))})
  }

  render() {
    const performancesStyles = {
      padding: '50px 0',
    }
    console.log(window.innerWidth)
    const performanceStyles = {
      listStyle: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.75)',
      margin: '20px',
      padding: '20px 15px',
      width: window.innerWidth <= 414 ? '83vw' : '400px',
      maxHeight: '200px',
      display: 'inline-block',
      verticalAlign: 'top',
    }
    const controlsStyles = {
      marginTop: '100px',
      marginLeft: '20px',
    }

    const buttonStyles = {
      display : window.innerWidth <= 414 ? 'block' : '',
      border: 'none',
      fontFamily: 'Arial',
      verticalAlign: 'middle',
      cursor: 'pointer',
      background: 'rgba(246, 211, 101, 0.6)',
      color: 'black',
      margin:  window.innerWidth <= 414 ? '10px auto' : '10px',
      position: 'relative',
      height: '50px',
      width: window.innerWidth <= 414 ? '200px' : '120px',
      fontSize: '12px',
      paddingTop: '3px',
      outline: 'none',
    }

    const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    const Performances = this.state.eventsDisplayed.map((e, i) => (<li key={i} style={performanceStyles}>
      <div>
        <Title size="h4" text={`${new Date(e.date).getDate()} ${months[new Date(e.date).getMonth()]} ${new Date(e.date).getFullYear()}`} font-family="Helvetica Neue"/><br/>
        <Title size="h5" text={e.venue} font-family="Helvetica Neue"/>
        <p style={{fontSize: '0.9em', fontFamily:'Helvetica Neue'}} dangerouslySetInnerHTML={{__html: e.description}} />
    </div>
    </li>))

    return (
      <div style={{marginTop:'54px', width:'100%'}}>
        <div style={controlsStyles}>Afficher :
          <button style={buttonStyles} onClick={() => this.filter(p => p.date < new Date().getTime())}>Tous les évènements passés</button>
          <button style={buttonStyles} onClick={() => this.filter(p => p.date > new Date().getTime())}>Tous les évènements à venir</button>
          <button style={buttonStyles} onClick={() => this.filter(p => new Date(p.date).getMonth() === new Date().getMonth() && new Date(p.date).getFullYear() === new Date().getFullYear())}>Ce mois-ci</button>
          <button style={buttonStyles} onClick={() => this.filter(p => true)}>Tous les évènements</button>
        </div>
        <ul style={performancesStyles}>
          {Performances}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default EventsRecap
