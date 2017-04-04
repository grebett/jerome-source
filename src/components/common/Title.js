import React from 'react'

class Title extends React.Component {
  render() {
    const titleStyles = {
      fontFamily: 'Kano',
      color: '#4a4a4a',
      fontWeight: 'normal',
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

    titleStyles.fontSize = sizes[this.props.size]
    titleStyles.lineHeight = sizes[this.props.size]

    // could check if this.props.size is a valid hx element
    return (
       React.createElement(this.props.size, {style: titleStyles}, this.props.text.toUpperCase())
    )
  }
}

export default Title
