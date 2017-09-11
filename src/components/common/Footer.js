import React from 'react'
import Radium from 'radium'

class Footer extends React.Component {
  render() {
    const containerStyles = {
      position: this.props.position || 'relative',
      left: '0px',
      bottom: '0px',
      height: '30px',
      width: '100%',
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
      fontWeight: 'lighter',
      fontSize: '13px',
      color: '#aaaaaa',
      marginTop: '30px',
      padding: '30px 0'
    }

    return (
      <div style={containerStyles}>
        <p>Copyright 2017 – créé par grebett</p>
      </div>
    )
  }
}

export default Radium(Footer)
