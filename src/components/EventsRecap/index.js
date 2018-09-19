import React from 'react'
import Footer from '../common/Footer'
import Title from '../common/Title'
import * as Contentful from '../../services/contentful'

class EventsRecap extends React.Component {
  constructor() {
    super()
    this.state = {
      thisMonthPerformances: [],
      nextPerformances: [],
      pastPerformances: [],
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
          return -1
        } else if (perf1.date > perf2.date) {
          return 1
        } else {
          return 0
        }
      })
      this.setState({
        allEvents: performances,
        thisMonthPerformances: performances.filter(p => new Date(p.date).getMonth() === new Date().getMonth() && new Date(p.date).getFullYear() === new Date().getFullYear()),
        nextPerformances: performances.filter(p => new Date() < p.date),
        pastPerformances: performances.filter(p => new Date() > p.date),
      })
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
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
      marginBottom: '30px',
      padding: '20px 15px',
      width: window.innerWidth <= 600 ? '83vw' : '50%',
      maxHeight: '200px',
      display: 'inline-block',
      verticalAlign: 'top',
    }
    const controlsStyles = {
      marginTop: '100px',
      marginLeft: '20px',
    }


    const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    const buildPerformancesElement = perf => perf.map((e, i) => (<li key={i} style={performanceStyles}>
      <div>
        <Title size="h5" text={`${new Date(e.date).getDate()} ${months[new Date(e.date).getMonth()]} ${new Date(e.date).getFullYear()}`} font-family="Helvetica Neue"/><br/>
        <Title size="h5" text={e.venue} font-family="Helvetica Neue"/>
        <p style={{fontSize: '0.9em', fontFamily:'Helvetica Neue'}} dangerouslySetInnerHTML={{__html: e.description}} />
    </div>
    </li>));

    const thisMonthPerformances = buildPerformancesElement(this.state.thisMonthPerformances);
    const nextPerformances = buildPerformancesElement(this.state.nextPerformances);
    const pastPerformances = buildPerformancesElement(this.state.pastPerformances);

    return (
      <div style={{marginTop:'54px', width:'100%', padding: '30px 0 0 30px'}}>
        <Title size="h2" text="Ce mois-ci" font-family="Helvetica Neue"/>
        <ul style={performancesStyles}>
          {thisMonthPerformances}
        </ul>
        <Title size="h2" text="Tous les évènements à venir" font-family="Helvetica Neue"/>
        <ul style={performancesStyles}>
          {nextPerformances}
        </ul>
        <Title size="h2" text="Les évènements passés" font-family="Helvetica Neue"/>
        <ul style={performancesStyles}>
          {pastPerformances}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default EventsRecap
