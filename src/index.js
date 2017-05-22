import React from 'react'
import ReactDOM from 'react-dom'
import {StyleRoot} from 'radium'
import App from './App'
import './index.css'

// import * as Contentful from './services/contentful'
//
// Contentful.getEntries('performances').then(value => {
//   console.log(value)
// }, error => {
//   console.error(error)
// })

ReactDOM.render(
  (<StyleRoot>
    <App />,
  </StyleRoot>),
  document.getElementById('root')
);
