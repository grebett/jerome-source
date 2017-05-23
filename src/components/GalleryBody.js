import React from 'react'
import Radium from 'radium'

import GalleryItem from './common/GalleryItem'

class GalleryBody extends React.Component {
  render() {
    const data = [
      { src: '../assets/Piano.jpg', title: 'piano', media: true },
      { src: '../assets/Clavecin.jpg', title: 'piano', media: false },
      { src: '../assets/Clavecin 1.jpg', title: 'piano', media: true },
      { src: '/assets/Composition.jpg', title: 'piano', media: true },
      { src: '/assets/Gallerie1.jpg', title: 'piano', media: false },
      { src: '/assets/Gallerie2.jpg', title: 'piano', media: false },
      { src: '/assets/Composition.jpg', title: 'piano', media: false },
      { src: '/assets/Improvisation.jpg', title: 'piano', media: false },
      { src: '/assets/Portrait 2.jpg', title: 'piano', media: true },
      { src: '/assets/Portrait.jpg', title: 'piano', media: false },
      { src: '/assets/Gallerie1.jpg', title: 'piano', media: true },
      { src: '/assets/Gallerie2.jpg', title: 'piano', media: true },

    ]

    const containerStyles = {
      position: 'relative',
      marginLeft: '-20px',
      top: '127px',
      left: '118px',
      overflow: 'hidden',
      width: 'calc(100% - 98px)',
    }
    containerStyles['@media (max-width: 1439px)'] = {
      left: 118 * 0.9 + 'px',
      width: `calc(100% - ${98 * 0.9 + 'px'})`,
    }
    containerStyles['@media (max-width: 1279px)'] = {
      left: 118 * 0.8 + 'px',
      width: `calc(100% - ${98 * 0.8 + 'px'})`,
    }
    containerStyles['@media (max-width: 1139px)'] = {
      left: 118 * 0.7 + 'px',
      width: `calc(100% - ${98 * 0.7 + 'px'})`,
    }

    return (
      <div style={containerStyles}>
        {data.map((item, i) => <GalleryItem
          key={i}
          src={item.src}
          title={item.title}
          is-media={item.media}/>
        )}
      </div>
    )
  }
}

export default Radium(GalleryBody)
