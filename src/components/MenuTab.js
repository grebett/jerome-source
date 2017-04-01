import React from 'react'

import Icon from './common/Icon';

// TODO: add a `selected` prop and see how I can change the svg img and title color accordingly ==> #F6D365
class MenuTab extends React.Component {
  render() {
    const parentStyle = {
      width: '34px',
      padding: '0 10px',
      boxSizing: 'content-box',
      background: '#4a4a4a',
      display: 'inline-block'
    }
    const textStyles = {
      textAlign: 'center',
      marginTop: '10px',
      width: '100%',
      fontFamily: 'Kano',
      fontSize: '10px',
      color: '#ffffff'
    }

    return (
      <div style={parentStyle}>
        <Icon name={this.props.name} width="20px" block />
        <div style={textStyles}>{this.props.title}</div>
      </div>
    )
  }
}

export default MenuTab