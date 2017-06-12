import React from 'react'

import Incipit from './Incipit'
import NextEvents from './NextEvents'
import PlanetBar from './PlanetBar'
import Carousel from './Carousel'
import Footer from '../common/Footer'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      activeSlide: 0
    }
  }

  render() {
    return (
      <div style={{marginTop:'54px', width:'100%'}}>
        <Incipit />
        <NextEvents />
        <PlanetBar onMouseOver={this.handleMouseOver.bind(this)}/>
        <Carousel activeSlide={this.state.activeSlide}/>
        <Footer />
      </div>
    )
  }

  handleMouseOver(e) {
    this.setState({activeSlide: parseInt(e.target.getAttribute('data-id'))})
  }
}

export default Home
