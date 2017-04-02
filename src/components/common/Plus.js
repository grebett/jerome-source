import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

class Plus extends React.Component {
  render() {
    const sizes = {
      m: '68.5px'
    }
    const containerStyles = {
      display: 'inline-block', //tmp
      backgroundColor: '#4a4a4a',
      color: 'gold',
      borderRadius: '50%',
      height: sizes[this.props.size],
      width: sizes[this.props.size],
      position: 'relative',
      boxShadow: 'none',
      transition: 'all 0.2s',
      ':hover': {
        backgroundImage: 'linear-gradient(134deg, #f6d365, #fda085)',
        boxShadow: '0px 5px 5px 2px rgba(59, 59, 59, 0.2)'
      }
    }
    const textStyles = {
      color: '#ffffff',
      fontFamily: 'Kano',
      textAlign: 'center',
      lineHeight: '72.5px',
      height: '100%',
      fontSize: '68.5px',
      fontWeight: 'bold'
    }

    return (
      <Link to={this.props.to} style={{textDecoration:'none'}}>
        <div style={containerStyles}>
          <div style={textStyles}>˖</div>
        </div>
      </Link>
    )
  }
}

Plus.defaultProps = {
  size: 'm'
}

export default Radium(Plus)
