import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './components/NavBar/index'
import Home from './components/Home'
import Bio from './components/Bio'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Page from './components/Page'
import EventsRecap from './components/EventsRecap'

const App = () => (
  // for animation and scollToTop, see: https://reacttraining.com/react-router/web/guides/scroll-restoration
  <Router>
    <div>
      <NavBar />

      <Route exact path="/" component={Home}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/gallerie" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/page/:skill" component={Page}/>
      <Route path="/evenements" component={EventsRecap}/>
    </div>
  </Router>
)

export default App
