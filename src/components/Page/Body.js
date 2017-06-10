import React from 'react'
import Radium, {Style} from 'radium'
import * as Contentful from '../../services/contentful'

import Modal from '../common/Modal'
import Card from '../common/Card'
import GalleryItem from '../common/GalleryItem'

class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false,
      medium1: null,
      medium2: null,
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.state.medium1) {
      Contentful.getEntry(nextProps.fields.medium1.sys.id).then(value1 => {
        Contentful.getEntry(nextProps.fields.medium2.sys.id).then(value2 => {
          this.setState({medium1: value1.fields, medium2: value2.fields})
          console.log(this.state)
        }, error => {
          console.error(error)
        })
      }, error => {
        console.error(error)
      })
    }
  }

  render() {
    const containerStyles = {
      position: 'relative',
      boxSizing: 'border-box',
      margin: '0px 20px',
      padding: '0px 50px',
      top: '100px',
      overflow: 'hidden',
      width: '100%',
    }
    containerStyles['@media (max-width: 1023px)'] = {
      margin: '30px 0px 0px 0px',
      padding: '0px',
      top: '0px',
    }

    let isMobile = window.outerWidth < 1024
    let galleryItemWidth = '100%'
    let cardPadding = '0%'
    if (isMobile) {
      galleryItemWidth = '100%'
      cardPadding = '15px'
    }
    let medium1 = null
    let medium2 = null

    if (this.state.medium1) {
      let type = this.state.medium1.type[0]
      if (type === 'image') {
        medium1 = <img className="inline-top" src={this.state.medium1.URL} width="50%" alt="" />
      } else {
        medium1 = <GalleryItem
          src={this.state.medium1.vignette}
          title={this.state.medium1.title}
          type={this.state.medium1.type[0]}
          width={galleryItemWidth}
          target={this.state.medium1.URL}
          onClick={this.showModal.bind(this)}/>
      }
    }

    if (this.state.medium2) {
      let type = this.state.medium2.type[0]
      if (type === 'image') {
        medium2 = <img src={this.state.medium2.URL} width="100%" alt="" />
      } else {
        medium2 = <GalleryItem
          src={this.state.medium2.vignette}
          title={this.state.medium2.title}
          type={this.state.medium2.type[0]}
          width={galleryItemWidth}
          target={this.state.medium2.URL}
          onClick={this.showModal.bind(this)}/>
      }
    }

    return (
      <div style={containerStyles}>
        <Style
          scopeSelector=".inline-top"
          rules={{
            display: 'inline-block',
            verticalAlign: 'top',
            width: isMobile ? '100%' : '44%',
            margin: isMobile ? '0 0 30px 0' : '0 2% 5% 2%',
          }}/>
        <div>
          <div className="inline-top">
            <Card
              title={this.props.fields.titre1 || ''}
              text={this.props.fields.paragraphe1}
              width="100%"
              padding={cardPadding}
              no-ui />
          </div>
          <div className="inline-top">
            {medium1}
          </div>
        </div>
        <div>
          <div className="inline-top">
            {medium2}
          </div>
          <div className="inline-top">
            <Card
              title={this.props.fields.titre2 || ''}
              text={this.props.fields.paragraphe2}
              padding={cardPadding}
              width="100%"
              no-ui />
          </div>
        </div>
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
