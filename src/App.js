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

// Pages (should be components later)
// Home page
const Home = () => (
  // find something for this margin...
  <div style={{marginTop:'54px'}}>
    <Incipit />
    <NextEvents />
    <PlanetBar />
    <Carousel />
    <Footer />
  </div>
)
// Bio page
const Bio = () => (
  <div style={{marginTop:'54px'}}>
    <BioHeader />
  </div>
)
// Home page
const Gallery = () => (
  <div>
    Gallery
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
