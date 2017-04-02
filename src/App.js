import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './components/NavBar'
// import PlanetBar from './components/PlanetBar'
import Icon from './components/common/Icon'

// Pages (should be components later)
// Home page
const Home = () => (
  // find something for this margin...
  <div style={{marginTop:'54px'}}>
    {/* <PlanetBar /> */}
    <Icon name="agenda" active width="100px"/>
  </div>
)
// Bio page
const Bio = () => (
  <div>
    Bio
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
