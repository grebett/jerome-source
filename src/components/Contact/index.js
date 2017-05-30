import React from 'react'

import Incipit from './Incipit'
import Infos from './Infos'
import Quote from './Quote'
import Footer from '../common/Footer'

const Contact = () => (
  // find something for this margin...
  <div style={{marginTop:'54px', width:'100%', color: 'steeblue'}}>
    <Incipit />
    <Infos />
    <Quote text="« citation »"/>
    <Footer />
  </div>
)

export default Contact
