import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// import NavBar from './components/NavBar'
// import Incipit from './components/Incipit'
// import NextEvents from './components/NextEvents'
// import PlanetBar from './components/PlanetBar'
// import Carousel from './components/Carousel'
// import Footer from './components/Footer'
// import BioHeader from './components/BioHeader'
// import Sun from './components/Sun'
// import Timeline from './components/Timeline'
// import GalleryHeader from './components/GalleryHeader'
// import GalleryBody from './components/GalleryBody'

import NavBar from './components/NavBar/index'
import Home from './components/Home'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
// Home page
// const Contact = () => (
//   <div>
//     Contact
//   </div>
// )

const App = () => (
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/gallerie" component={Gallery}/>
      {/* <Route path="/contact" component={Contact}/> */}
    </div>
  </Router>
)

export default App
