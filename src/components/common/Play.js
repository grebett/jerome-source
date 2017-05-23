import React from 'react'
import Radium from 'radium'

class Play extends React.Component {
  render() {
    const sizes = {
      m: '68.5px'
    }
    const containerStyles = {
      display: 'block',
      backgroundImage: `linear-gradient(134deg, ${this.props.grad1 || '#f6d365'}, ${this.props.grad2 || '#fda085'})`,
      color: 'gold',
      borderRadius: '50%',
      height: sizes[this.props.size],
      width: sizes[this.props.size],
      position: 'relative',
      boxShadow: '0px 2px 4px 0px rgba(59, 59, 59, 0.2)',
      transition: 'all 0.2s',
      ':hover': {
        boxShadow: '0px 3px 8px 0px rgba(59, 59, 59, 0.2)',
        transform: 'scale(1.05)'
      },
      cursor: 'pointer',
    }
    const textStyles = {
      color: '#ffffff',
      fontFamily: 'Kano',
      textAlign: 'center',
      paddingLeft: '8px',
      lineHeight: '75px',
      fontSize: '40px',
      fontWeight: 'bold',
    }

    return (
      <div style={containerStyles}>
        <p style={textStyles}>►</p>
      </div>
    )
  }
}

Play.defaultProps = {
  size: 'm'
}

export default Radium(Play)
