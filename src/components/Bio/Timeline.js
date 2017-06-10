import React from 'react'
import Radium from 'radium'
import * as Contentful from '../../services/contentful'

import Planet from '../common/Planet'
import Card from '../common/Card'

class Timeline extends React.Component {
  constructor() {
    super()
    this.state = {
      displayModal: false,
      experiences: [],
    }
    Contentful.getEntries('pieces').then(value => {
      let experiences = value.items.map(item => {
        let value = item.fields
        value.date = new Date(value.date).getFullYear()

        return value
      })
      experiences.sort((a, b) => a.date > b.date)
      this.setState({experiences})
    }, error => {
      console.error(error)
    })
  }

  render() {
    const experiences = this.state.experiences
    // [
    //   { date: 1989, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 1995, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 1998, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 1999, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2001, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2002, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2003, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2004, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2005, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2010, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2012, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    //   { date: 2014, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    // ]
    let step = 120
    if (document.querySelector('body').offsetWidth >= 1440) {
      step = 175
    } else if (window.outerWidth < 1024) {
      step = 150
    }

    const containerStyles = {
      position: 'relative',
      top: '0px',
      margin: 'auto',
      width: '148.5px',
      heigth: '100%',
    }
    containerStyles['@media (max-width: 1023px)'] = {
      width: '100%',
      top: '-400px',
      zIndex: '4',
    }
    const rayStyles = {
      position: 'relative',
      margin: '50%',
      width: '1px',
      backgroundColor: '#dedede',
      height: experiences.length * step + 75 + 'px',
      top:'0px',
    }
    rayStyles['@media (max-width: 1023px)'] = {
      margin: 0,
      left: '73px',
    }

    let isMobile = window.outerWidth < 1024

    return (
      <div style={containerStyles}>
        <div style={rayStyles}></div>
        <Planet size='l' x={0} y={0} text='Parcours' text-centered='true' force-active />
        { experiences.map((experience, i) => {
          let y = step * (i + 1) + 75
          let left = '-380px'
          let right = '85px'
          if (isMobile) {
            left = '85px'
          }
          return (
            <div key={i}>
              <Planet size='xs' x={48.25} y={y} force-active unit="px" />
              <div style={{position: 'absolute', top: y, left: i % 2 === 0 ? right : left}}>
                <Card
                  title={experience.date.toString()}
                  text={experience.description}
                  text-align={i % 2 === 0 || isMobile ? 'left' : 'right'}
                  width={isMobile ? '100%' : 400}
                  no-ui />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Radium(Timeline)
