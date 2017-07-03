import React from 'react'
import Radium from 'radium'

import Icon from '../common/Icon';

class Event extends React.Component {
  render() {
    const containerStyles = {
      marginBottom: '20px'
    }
    const textStyles = {
      fontSize: '16px',
      textAlign: 'left',
      fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
      fontWeight: 'lighter',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '15px',
      maxWidth: '280px',
    }
    textStyles['@media (max-width: 1439px)'] = {
      fontSize: '15px',
    }
    textStyles['@media (max-width: 1279px)'] = {
      fontSize: '14px',
      maxWidth: '240px',
    }
    textStyles['@media (max-width: 1023px)'] = {
      fontSize: '15px',
    }

    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    return (
      <div style={containerStyles}>
        <Icon name="agenda" active width="51px" display="inline-block"/>
        <span style={textStyles}>
          {this.props.data.venue}
          <br />
          {this.props.data.date.getDate()}
          &nbsp;
          {months[this.props.data.date.getMonth()]}
          &nbsp;
          {this.props.data.date.getFullYear()}
          &nbsp;à&nbsp;
          {this.props.data.hour}
        </span>
      </div>
    )
  }
}

export default Radium(Event)
