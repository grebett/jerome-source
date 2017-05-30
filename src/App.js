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
