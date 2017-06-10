import React from 'react'
import Radium from 'radium'

import Play from './Play'

class GalleryItem extends React.Component {
  render() {
    const containerStyles = {
      display: 'inline-block',
      position: 'relative',
      boxSizing: 'border-box',
      verticalAlign: 'middle',
      fontFamily: 'Kano',
      color: '#202020',
      width: this.props.width || '33.33%',
      height: this.props.height || 'auto',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      padding: '20px',
      zIndex: 4,
      textAlign: this.props['text-align'] || 'left',
      cursor: 'pointer',
    }
    const playStyles = {
      position: 'absolute',
      top: 'calc(50% - 34px)',
      left: 'calc(50% - 34px)',
    }
    const imageStyles = {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    }

    let play = null
    if (this.props.type === 'audio' || this.props.type === 'vidéo') {
      play = <div style={playStyles}>
        <Play
          target={this.props.target}
          type={this.props.type}
          grad1={this.props.grad1}
          grad2={this.props.grad2}
        />
        </div>
    }

    return (
      <div style={containerStyles} onClick={this.props.onClick}>
        <img
          style={imageStyles}
          src={this.props.src}
          alt={this.props.title}
          width="100%" height="100%"
          data-type={this.props.type}
          data-target={this.props.target}/>
        {play}
      </div>
    )
  }
}

export default Radium(GalleryItem)
