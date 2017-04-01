import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Menu from './components/Menu'

// Home page (should be in its own file later)
const Home = () => (
  <div>
    <Menu />
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/bio" component={Home}/>
      <Route path="/gallerie" component={Home}/>
      <Route path="/contact" component={Home}/>
    </div>
  </Router>
)

export default App
