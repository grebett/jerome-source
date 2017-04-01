import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './components/NavBar'
import PlanetBar from './components/PlanetBar'
import Card from './components/common/Card'

// Pages (should be components later)
// Home page
const Home = () => (
  // find something for this margin...
  <div style={{marginTop:'54px'}}>
    {/* <PlanetBar /> */}

    <Card title="piano" text="« Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »"/>
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
