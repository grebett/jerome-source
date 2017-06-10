import React from 'react'
import ReactDOM from 'react-dom'
import {StyleRoot} from 'radium'
import App from './App'
import './index.css'

ReactDOM.render(
  (<StyleRoot>
    <App />
  </StyleRoot>),
  document.getElementById('root')
);


// import * as Contentful from './services/contentful'
//
// Contentful.getEntries('page').then(value => {
//   console.log(JSON.stringify(value))
// }, error => {
//   console.error(error)
// })
