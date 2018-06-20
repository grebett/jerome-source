import React from 'react'

import Incipit from './Incipit'
import Infos from './Infos'
import Quote from './Quote'
import Footer from '../common/Footer'

const styles = {
  soutien: window.innerWidth <= 414 ? {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
  } : {
    position: 'absolute',
    bottom: '30px',
    left: '30px',
    color: 'white',
  },
  logo: window.innerWidth <= 414 ? {
    position: 'relative',
    display: 'block',
    margin: '20px auto',
    width: '50%',
  } : {
    display: 'block',
    width: '10vw',
    marginTop: '10px',
    marginLeft: '10px',
  }
}

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
    <p style={styles.soutien}>
      ARTISTE SOUTENU PAR
      <img style={styles.logo} src="https://res.cloudinary.com/grebett/image/upload/v1529488218/logo.png" />
    </p>
  </div>
)

export default Contact
