import React from 'react'
import Radium from 'radium'

import Planet from './common/Planet'
import Card from './common/Card'

class Timeline extends React.Component {
  render() {
    const experiences = [
      { date: 1989, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 1995, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 1998, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 1999, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2001, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2002, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2003, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2004, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2005, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2010, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2012, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
      { date: 2014, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'},
    ]
    let step = 120
    if (document.querySelector('body').offsetWidth >= 1440) {
      step = 175
    }

    const containerStyles = {
      position: 'relative',
      top: '0px',
      margin: 'auto',
      width: '148.5px',
      heigth: '100%',
    }
    const rayStyles = {
      position: 'relative',
      margin: '50%',
      width: '1px',
      backgroundColor: '#dedede',
      height: experiences.length * step + 75 + 'px',
      top:'0px',
    }

    return (
      <div style={containerStyles}>
        <div style={rayStyles}></div>
        <Planet size='l' x={0} y={0} text='Parcours' text-centered='true' force-active />
        { experiences.map((experience, i) => {
          let y = step * (i + 1) + 75

          return (
            <div key={i}>
              <Planet size='xs' x={48.25} y={y} force-active unit="px" />
              <div style={{position: 'absolute', top: y, left: i % 2 === 0 ? '85px' : '-380px'}}>
                <Card
                  title={experience.date.toString()}
                  text={experience.text}
                  text-align={i % 2 === 0 ? 'left' : 'right'}
                  width={400}
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