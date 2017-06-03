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
      width: '60%',
      height: '60%',
      padding: '20% 20% 20% 25%',
    }

    return (
      <div style={containerStyles}>
        <img style={textStyles} data-target={this.props.target} data-type={this.props.type} src="/assets/triangle.svg" width="100%" height="100%" alt="" />
      </div>
    )
  }
}

Play.defaultProps = {
  size: 'm'
}

export default Radium(Play)
