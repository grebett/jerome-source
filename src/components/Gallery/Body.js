import React from 'react'
import Radium from 'radium'
import * as Contentful from '../../services/contentful'

import Modal from '../common/Modal'
import GalleryItem from '../common/GalleryItem'

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      displayModal: false,
      media: [],
    }
    Contentful.getEntries('media').then(value => {
      this.setState({media: value.items})
    }, error => {
      console.error(error)
    })
  }

  render() {
    let data = this.state.media.map((element) => element.fields)
    // data = [
    //   { src: '/assets/Piano.jpg', target: '/assets/Piano.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Clavecin.jpg', target: '/assets/Clavecin.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Clavecin 1.jpg', target: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256415491', title: 'piano', type: 'audio' },
    //   { src: '/assets/Composition.jpg', target: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256415491', title: 'piano', type: 'audio' },
    //   { src: '/assets/Gallerie1.jpg', target: 'https://www.youtube.com/embed/LWQVztiJHfs', title: 'piano', type: 'video' },
    //   { src: '/assets/Gallerie2.jpg', target: 'https://www.youtube.com/embed/LWQVztiJHfs', title: 'piano', type: 'video' },
    //   { src: '/assets/Composition.jpg', target: '/assets/Composition.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Improvisation.jpg', target: '/assets/Improvisation.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Portrait 2.jpg', target: '/assets/Portrait 2.jpg', title: 'piano', type: 'image' },
    // ]

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

    // mobile
    containerStyles['@media (max-width: 1023px)'] = {
      top: '0px',
      left: '0px',
      width: '100%',
      marginLeft: '0px',
    }

    let isMobile = window.outerWidth < 1024

    return (
      <div style={containerStyles}>
        {data.map((item, i) => <GalleryItem
          key={i}
          src={item.vignette}
          title={item.title}
          type={item.type[0]}
          target={item.URL}
          width={isMobile ? '100%' : null}
          onClick={this.showModal.bind(this)}/>
        )}
        <Modal
          display={this.state.displayModal}
          onClose={this.closeModal.bind(this)}
          type={this.state.type}
          target={this.state.target}
        />
      </div>
    )
  }

  showModal(event) {
    let el = event.target
    let target = el.getAttribute('data-target')
    let type = el.getAttribute('data-type')

    this.setState({
      type,
      target,
      displayModal: true,
    })
  }

  closeModal() {
    this.setState({
      type: '',
      target: '',
      displayModal: false,
    })
  }
}

export default Radium(Body)
