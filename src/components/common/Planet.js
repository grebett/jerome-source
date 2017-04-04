import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

class Planet extends React.Component {
  render() {
    const sizes = {
      xl: '157px',
      l: '148.5px',
      m: '121px',
      s: '114px'
    }
    const containerStyles = {
      display: 'block',
      margin: '0px',
      backgroundColor: '#4a4a4a',
      color: 'gold',
      borderRadius: '50%',
      height: sizes[this.props.size],
      width: sizes[this.props.size],
      position: 'absolute',
      boxShadow: '0px 2px 4px 0px rgba(59, 59, 59, 0.2)',
      transition: 'all 0.2s',
      ':hover': {
        backgroundImage: `linear-gradient(134deg, ${this.props.grad1 || '#f6d365'}, ${this.props.grad2 ||  '#fda085'})`,
        boxShadow: '0px 3px 8px 0px rgba(59, 59, 59, 0.2)',
        transform: 'scale(1.05)'
      }
    }
    const textStyles = {
      color: '#ffffff',
      fontFamily: 'Kano',
      position: 'absolute',
      top: '49%',
      right: '10px',
      fontSize: '20px'
    }

    containerStyles.top = `${this.props.y || 0}px`
    containerStyles.left = `${this.props.x || 0}px`

    return (
      <Link to={this.props.to} style={{textDecoration:'none'}}>
        <div style={containerStyles}>
          <div style={textStyles}>{this.props.text}</div>
        </div>
      </Link>
    )
  }
}

export default Radium(Planet)
