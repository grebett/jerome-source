import React from 'react'
import Radium from 'radium'

class Title extends React.Component {
  render() {
    const sizes = {
      h1: 72,
      h2: 30,
      h3: 26,
      h4: 22,
      h5: 17,
      h6: 12
    }
    const size = {
      '1440px': sizes[this.props.size] + 'px',
      '1280px': sizes[this.props.size] * 0.8 + 'px',
      '1024px': sizes[this.props.size] * 0.7 + 'px'
    }
    const titleStyles = {
      fontFamily: 'Kano',
      color: '#4a4a4a',
      fontWeight: 'normal',
      margin: '0px',
      fontSize: size['1440px'],
      lineHeight: size['1440px']
    }
    titleStyles['@media (max-width: 1439px)'] = {
      fontSize: size['1280px'],
      lineHeight: size['1280px']
    }

    // could check if this.props.size is a valid hx element
    return (
       React.createElement(this.props.size, {style: titleStyles}, this.props.text.toUpperCase())
    )
  }
}

export default Radium(Title)
