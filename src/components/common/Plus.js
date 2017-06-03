import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

class Plus extends React.Component {
  render() {
    const sizes = {
      m: '68.5px',
      xs: '30px',
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
      }
    }
    const textStyles = {
      color: '#ffffff',
      width: '60%',
      height: '60%',
      padding: '20%',
    }

    return (
      <Link to={this.props.to} style={{textDecoration:'none'}}>
        <div style={containerStyles}>
          <img src="/assets/plus.svg" style={textStyles} alt=""/>
        </div>
      </Link>
    )
  }
}

Plus.defaultProps = {
  size: 'm'
}

export default Radium(Plus)
