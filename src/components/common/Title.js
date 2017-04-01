import React from 'react'

class Title extends React.Component {
  render() {
    const styles = {
      fontFamily: 'Kano',
      color: '#4a4a4a',
      margin: '0px'
    }
    const sizes = {
      h1: '72px',
      h2: '30px',
      h3: '26px',
      h4: '22px',
      h5: '17px',
      h6: '12px'
    }

    styles.fontSize = sizes[this.props.size]

    // could check if this.props.size is a valid hx element
    return React.createElement(this.props.size, {style: styles}, this.props.text.toUpperCase())
  }
}

export default Title
