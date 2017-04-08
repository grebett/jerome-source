import React from 'react'
import Radium from 'radium'

import Title from './Title'

class Card extends React.Component {
  render() {
    const containerStyles = {
      fontFamily: 'Kano',
      color: '#4a4a4a',
      width: this.props.width || '500px',
      backgroundColor: '#ffffff',
      padding: '15px 20px 5px 20px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)'
    }
    const pStyles = {
      fontSize: '20px',
      textAlign: 'left',
      fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
      fontWeight: 'lighter'
    }
    pStyles['@media (max-width: 1439px)'] = {
      fontSize: '16px'
    }

    // could check if this.props.size is a valid hx element
    return (
      <div style={containerStyles}>
        <Title size="h2" text={this.props.title} />
        <p style={pStyles}>
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default Radium(Card)
