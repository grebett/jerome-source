import React from 'react'

import Incipit from './Incipit'
import Infos from './Infos'
import Quote from './Quote'
import Footer from '../common/Footer'

const Contact = () => (
  // find something for this margin...
  <div style={{
      marginTop:'54px',
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: 'calc(100% - 54px)',
      width: '100%',
      backgroundColor: '#161616',
      backgroundImage: 'url(http://res.cloudinary.com/jerome/image/upload/v1500547815/Portrait_2_nezcok.jpg)',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
    }}>
    <Incipit />
    <Infos />
    <Quote text=""/>
    <Footer position="absolute" />
  </div>
)

export default Contact
