import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MenuTab from './components/MenuTab'

// Home page (should be in its own file later)
const Home = () => (
  <div>
    <MenuTab name="gallery" title="Gallerie"/>
    <MenuTab name="home" title="Accueil"/>
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
    </div>
  </Router>
)

export default App
