import React from 'react'
import Radium from 'radium'

import Back from '../common/Back'

const containerStyles = {
  margin: '100px 50px 0 50px',
}
containerStyles['@media (max-width: 1023px)'] = {
  margin: '80px 10px 20px 10px',
}

const backStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  height: '68.5px',
}
const titleStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  fontFamily: 'Kano, sans-serif',
  textTransform: 'uppercase',
  fontSize: '24px',
  marginLeft: '15px',
}

const BackTitle = (props) => (
  <div style={containerStyles}>
    <div style={backStyles}>
      <Back to=".."/>
    </div>
    <div style={titleStyle}>
      {props.title}
    </div>
  </div>
)

export default Radium(BackTitle)
