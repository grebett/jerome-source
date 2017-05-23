import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './components/NavBar'
import Incipit from './components/Incipit'
import NextEvents from './components/NextEvents'
import PlanetBar from './components/PlanetBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import BioHeader from './components/BioHeader'
import Sun from './components/Sun'
import Timeline from './components/Timeline'
import GalleryHeader from './components/GalleryHeader'
import GalleryBody from './components/GalleryBody'

// Pages (should be components later)
// Home page
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
// Bio page
const Bio = () => (
  <div style={{marginTop:'54px', width:'100%'}}>
    <Sun />
    <BioHeader />
    <Timeline />
  </div>
)
// Home page
const Gallery = () => (
  <div style={{marginTop:'54px', width:'100%'}}>
    <Sun />
    <GalleryHeader />
    <GalleryBody />
    {/* <iframe width="400" height="180" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&amp;color=0066cc"></iframe>
    <iframe id="ytplayer" type="text/html" width="400" height="180" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"></iframe>*/}
  </div>
)
// Home page
const Contact = () => (
  <div>
    Contact
  </div>
)

const App = () => (
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/gallerie" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)

export default App
