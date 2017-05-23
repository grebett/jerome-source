import React from 'react'

import Incipit from './Incipit'
import NextEvents from './NextEvents'
import PlanetBar from './PlanetBar'
import Carousel from './Carousel'
import Footer from '../common/Footer'

const Home = () => (
  // find something for this margin...
  <div style={{marginTop:'54px', width:'100%'}}>
    <Incipit />
    <NextEvents />
    <PlanetBar />
    <Carousel />
    <Footer />
  </div>
)

export default Home
