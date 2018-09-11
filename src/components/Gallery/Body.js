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
      mediaDisplayed: [],
      allMedia: [],
    }
    this.filter = this.filter.bind(this);
    Contentful.getEntries('media').then(value => {
      this.setState({mediaDisplayed: value.items, allMedia: value.items})
    }, error => {
      console.error(error)
    })
  }

  filter(type) {
    this.setState({mediaDisplayed: this.state.allMedia.filter(el => type === '*' || el.fields.type[0] === type)})
  }

  render() {
    let data = this.state.mediaDisplayed.map((element) => element.fields)

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

    const controlsStyles = {
      marginLeft: '20px',
    }

    const buttonStyles = {
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(246, 211, 101, 0.6)',
      color: 'black',
      marginLeft: '10px',
      height: '20px',
      width: '50px',
      fontSize: '14px',
      paddingTop: '3px',
      fontFamily: 'Kano',
      outline: 'none',
    }

    let isMobile = window.outerWidth < 1024

    return (
      <div style={containerStyles}>
      <div style={controlsStyles}>Afficher :
        <button style={buttonStyles} onClick={() => this.filter('image')}>Photos</button>
        <button style={buttonStyles} onClick={() => this.filter('audio')}>Audio</button>
        <button style={buttonStyles} onClick={() => this.filter('vidéo')}>Vidéo</button>
        <button style={buttonStyles} onClick={() => this.filter('*')}>Tous</button>
      </div>
        {data.filter(item => item.vignette !== undefined).map((item, i) => <GalleryItem
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

// data = [
    //   { src: '/assets/Piano.jpg', target: '/assets/Piano.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Clavecin.jpg', target: '/assets/Clavecin.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Clavecin 1.jpg', target: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256415491', title: 'piano', type: 'audio' },
    //   { src: '/assets/Composition.jpg', target: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256415491', title: 'piano', type: 'audio' },
    //   { src: '/assets/Galerie1.jpg', target: 'https://www.youtube.com/embed/LWQVztiJHfs', title: 'piano', type: 'video' },
    //   { src: '/assets/Galerie2.jpg', target: 'https://www.youtube.com/embed/LWQVztiJHfs', title: 'piano', type: 'video' },
    //   { src: '/assets/Composition.jpg', target: '/assets/Composition.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Improvisation.jpg', target: '/assets/Improvisation.jpg', title: 'piano', type: 'image' },
    //   { src: '/assets/Portrait 2.jpg', target: '/assets/Portrait 2.jpg', title: 'piano', type: 'image' },
    // ]
