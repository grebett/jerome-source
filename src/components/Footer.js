import React from 'react'

class Footer extends React.Component {
  render() {
    const containerStyle = {
      position: 'relative',
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
      padding: '30px 0'
    }

    return (
      <div style={containerStyle}>
        <p>Copyright 2017 – créé par grebett</p>
      </div>
    )
  }
}

export default Footer
