import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

class Planet extends React.Component {
  render() {
    const sizes = {
      xl: '157px',
      l: '148.5px',
      m: '121px',
      s: '114px',
      xs: '50px',
    }
    const containerStyles = {
      display: 'block',
      margin: '0px',
      backgroundColor: '#414141', // planet
      backgroundImage: this.props['force-active'] ? `linear-gradient(134deg, ${this.props.grad1 || '#f6d365'}, ${this.props.grad2 ||  '#fda085'})` : 'none',
      color: 'gold',
      borderRadius: '50%',
      height: sizes[this.props.size],
      width: sizes[this.props.size],
      position: 'absolute',
      boxShadow: '0px 2px 4px 0px rgba(59, 59, 59, 0.2)',
      transitionDuration: '0.2s',
      transitionProperty: 'transform, box-shadow',
      fontSize: '1px',
      ':hover': {
        backgroundImage: `linear-gradient(134deg, ${this.props.grad1 || '#f6d365'}, ${this.props.grad2 ||  '#fda085'})`,
        boxShadow: '0px 3px 8px 0px rgba(59, 59, 59, 0.2)',
        transform: 'scale(1.05)'
      },
      '@media (max-width: 1439px)': {
        fontSize: '0.9px'
      },
      '@media (max-width: 1279px)': {
        fontSize: '0.8px'
      },
      '@media (max-width: 1139px)': {
        fontSize: '0.7px'
      }
    }

    let textStyles = {
      color: '#ffffff',
      fontFamily: 'Kano',
      position: 'absolute',
      top: '49%',
      right: '10px',
      fontSize: '20px',
      '@media (max-width: 1439px)': {
        fontSize: '18px'
      }
    }
    if (this.props['text-centered']) {
      textStyles = {
        ...textStyles,
        textAlign: 'center',
        right: 'auto',
        width: '100%',
        top: '45%',
      }
    }

    let unit = this.props.unit || 'em'
    containerStyles.top = `${this.props.y || 0}${unit}`
    containerStyles.left = `${this.props.x || 0}${unit}`

    if (this.props.to) {
      return (
        <Link to={this.props.to} style={{textDecoration:'none'}}>
          <div style={containerStyles} data-id={this.props.id} onMouseOver={this.props.onMouseOver}>
            <div style={textStyles}>{this.props.text}</div>
          </div>
        </Link>
      )
    } else {
      return (
        <div style={containerStyles}>
          <div style={textStyles}>{this.props.text}</div>
        </div>
      )
    }
  }
}

export default Radium(Planet)
