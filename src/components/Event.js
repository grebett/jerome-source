import React from 'react'
import Radium from 'radium'

import Icon from './common/Icon';

class Event extends React.Component {
  render() {
    const containerStyles = {
      marginBottom: '20px'
    }
    const textStyles = {
      fontSize: '20px',
      textAlign: 'left',
      fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
      fontWeight: 'lighter',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '15px'
    }

    return (
      <div style={containerStyles}>
        <Icon name="agenda" active width="51px" display="inline-block"/>
        <span style={textStyles}>
          - {this.props.data.date} {this.props.data.hour} -<br />
          {this.props.data.place} - {this.props.data.city}
        </span>
      </div>
    )
  }
}

export default Radium(Event)
