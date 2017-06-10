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
