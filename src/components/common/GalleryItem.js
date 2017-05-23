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
      color: '#4a4a4a',
      width: this.props.width || '33.33%',
      height: this.props.height || 'auto',
      backgroundColor: this.props['no-ui'] ? 'transparent' : '#ffffff',
      overflow: 'hidden',
      // backgroundImage: `linear-gradient(134deg, ${this.props.grad1 || '#f6d365'}, ${this.props.grad2 ||  '#fda085'})`,
      padding: '20px',
      textAlign: this.props['text-align'] || 'left',
    }
    const playStyles = {
      position: 'absolute',
      top: 'calc(50% - 75px)',
      left: 'calc(50% - 34px)',
    }
    const imageStyles = {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    }

    let play = null
    if (this.props['is-media']) {
      play = <div style={playStyles}><Play /></div>
    }

    return (
      <div style={containerStyles}>
        <img style={imageStyles} src={this.props.src} alt={this.props.title} width="100%" height="100%"/>
        {play}
      </div>
    )
  }
}

export default Radium(GalleryItem)
