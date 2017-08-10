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
      '1280px': sizes[this.props.size] * 0.75 + 'px',
      '1024px': sizes[this.props.size] * 0.6 + 'px',
      'mobile': sizes[this.props.size] * 0.5 + 'px'
    }
    const titleStyles = {
      fontFamily: this.props['font-family'] || 'Kano',
      color: '#202020',
      fontWeight: 'normal',
      margin: '0px',
      fontSize: this.props['custom-size'] || size['1440px'],
      lineHeight: this.props['custom-size'] || size['1440px']
    }
    titleStyles['@media (max-width: 1439px)'] = {
      fontSize: this.props['custom-size'] || size['1280px'],
      lineHeight: this.props['custom-size'] || size['1280px']
    }
    titleStyles['@media (max-width: 1279px)'] = {
      fontSize: this.props['custom-size'] || size['1024px'],
      lineHeight: this.props['custom-size'] || size['1024px']
    }
    titleStyles['@media (max-width: 1023px)'] = {
      fontSize: this.props['custom-size'] || size.mobile,
      lineHeight: this.props['custom-size'] || size.mobile,
    }

    // could check if this.props.size is a valid hx element
    return (
       React.createElement(this.props.size, {style: titleStyles}, this.props.text.toUpperCase())
    )
  }
}

export default Radium(Title)
